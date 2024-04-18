package RadVeda.ConsentManagement;

import RadVeda.ConsentManagement.ConsentProviders.*;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequest;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequestRepository;
import RadVeda.ConsentManagement.ConsentRequest.ConsentSeeker;
import RadVeda.ConsentManagement.ConsentRequest.ConsentSeekerRepository;
import RadVeda.ConsentManagement.exception.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

@Service
@RequiredArgsConstructor
public class ConsentService implements ConsentServiceInterface{
    private static String delimiter = ":_:";
    private final ConsentRequestRepository consentRequestRepository;
    private final ConsentSeekerRepository consentSeekerRepository;
    private final DoctorProviderRepository doctorProviderRepository;
    private final PatientProviderRepository patientProviderRepository;
    private final RadiologistProviderRepository radiologistProviderRepository;

    @Override
    public List<Long> getTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, String consentProviderType, Long consentProviderId)
    {
        return switch (consentProviderType) {
            case "DOCTOR" ->
                    doctorProviderRepository.findTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderId);
            case "PATIENT" ->
                    patientProviderRepository.findTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderId);
            case "RADIOLOGIST" ->
                    radiologistProviderRepository.findTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderId);
            default -> throw new InvalidConsentProviderTypeException("Invalid consent provider type!");
        };
    }

    @Override
    public Optional<ConsentRequest> findConsentRequestById(Long consentRequestId)
    {
        return consentRequestRepository.findById(consentRequestId);
    }

    @Override
    public List<ConsentSeeker> getConsentSeekersByConsentRequestId(Long consentRequestId)
    {
        return consentSeekerRepository.findByConsentRequestId(consentRequestId);
    }

    @Override
    public String sendConsentRequest(String consentProviderType, Long consentProviderId, Long testId, String message, List<User> consentSeekers, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user
        ConsentRequest consentRequest = new ConsentRequest();
        consentRequest.setConsentProviderType(consentProviderType);
        consentRequest.setConsentProviderId(consentProviderId);
        consentRequest.setTestId(testId);
        consentRequest.setMessage(message);
        consentRequest = consentRequestRepository.save(consentRequest);

        Long consentRequestId = consentRequest.getId();
        //System.out.println("Consent request ID: "+consentRequestId);

        // Sending a consent request notification
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        // Preparing the request object for sending to the notification management service
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Constructing the request payload manually as JSON
        String requestBody = "{" +
                "\"message\": \"" + message + "\"," +
                "\"recipientType\": \"" + consentProviderType + "\"," +
                "\"recipientId\": " + consentProviderId + "," +
                "\"consentRequestId\": " + consentRequestId +
                "}";

        // Setting up RestTemplate
        RestTemplate restTemplate = new RestTemplate();

        // Setting the URL for the appropriate API end point of the notification management service
        String url = "http://localhost:9193/notifications/sendConsentRequestNotification";

        // Setting the request entity
        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        // Sending the POST request
        ResponseEntity<String> responseEntity;

        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            consentRequestRepository.delete(consentRequest); // Rolling back the previously saved consent request
            return "Failed to send consent request notification!";
        }

        if (!responseEntity.getStatusCode().is2xxSuccessful()) {
            consentRequestRepository.delete(consentRequest); // Rolling back the previously saved consent request
            return "Failed to send consent request notification!";
        }

        for(User user: consentSeekers)
        {
            ConsentSeeker consentSeeker = new ConsentSeeker();
            consentSeeker.setConsentSeekerType(user.getType());
            consentSeeker.setConsentSeekerId(user.getId());
            consentSeeker.setConsentRequest(consentRequest);

            consentSeekerRepository.save(consentSeeker);
        }

        return "Consent request sent successfully!";
    }

    @Override
    public String setDoctorProviderDetails(User currentUser, DoctorProviderConsentForm consentForm, String authorizationHeader)
    {
        List<DoctorProviderConsent> doctorProviderConsents = parseDoctorProviderConsentForm(currentUser, consentForm, authorizationHeader);

        for(DoctorProviderConsent doctorProviderConsent : doctorProviderConsents)
        {
            int numRowsUpdated = doctorProviderRepository.updateIfExists(doctorProviderConsent.getConsentSeekerType(), doctorProviderConsent.getConsentSeekerId(), doctorProviderConsent.getConsentProviderId(), doctorProviderConsent.getTestId(), doctorProviderConsent.isNotesAllowed());
            if(numRowsUpdated == 0) {
                doctorProviderRepository.insertEntry(doctorProviderConsent.getConsentSeekerType(), doctorProviderConsent.getConsentSeekerId(), doctorProviderConsent.getConsentProviderId(), doctorProviderConsent.getTestId(), doctorProviderConsent.isNotesAllowed());
            }
        }
        return "Consent preferences for doctor saved successfully!";
    }

    @Override
    public String setPatientProviderDetails(User currentUser, PatientProviderConsentForm consentForm, String authorizationHeader)
    {
        List<PatientProviderConsent> patientProviderConsents = parsePatientProviderConsentForm(currentUser, consentForm, authorizationHeader);

        for(PatientProviderConsent patientProviderConsent : patientProviderConsents)
        {
            int numRowsUpdated = patientProviderRepository.updateIfExists(patientProviderConsent.getConsentSeekerType(), patientProviderConsent.getConsentSeekerId(), patientProviderConsent.getConsentProviderId(), patientProviderConsent.getTestId(), patientProviderConsent.isImagesAllowed(), patientProviderConsent.isReportAllowed());
            if(numRowsUpdated == 0) {
                patientProviderRepository.insertEntry(patientProviderConsent.getConsentSeekerType(), patientProviderConsent.getConsentSeekerId(), patientProviderConsent.getConsentProviderId(), patientProviderConsent.getTestId(), patientProviderConsent.isImagesAllowed(), patientProviderConsent.isReportAllowed());
            }
        }
        return "Consent preferences for patient saved successfully!";
    }

    @Override
    public String setRadiologistProviderDetails(User currentUser, RadiologistProviderConsentForm consentForm, String authorizationHeader)
    {
        List<RadiologistProviderConsent> radiologistProviderConsents = parseRadiologistProviderConsentForm(currentUser, consentForm, authorizationHeader);

        for(RadiologistProviderConsent radiologistProviderConsent : radiologistProviderConsents)
        {
            int numRowsUpdated = radiologistProviderRepository.updateIfExists(radiologistProviderConsent.getConsentSeekerType(), radiologistProviderConsent.getConsentSeekerId(), radiologistProviderConsent.getConsentProviderId(), radiologistProviderConsent.getTestId(), radiologistProviderConsent.isAnnotationsAllowed(), radiologistProviderConsent.isNotesAllowed());
            if(numRowsUpdated == 0) {
                radiologistProviderRepository.insertEntry(radiologistProviderConsent.getConsentSeekerType(), radiologistProviderConsent.getConsentSeekerId(), radiologistProviderConsent.getConsentProviderId(), radiologistProviderConsent.getTestId(), radiologistProviderConsent.isAnnotationsAllowed(), radiologistProviderConsent.isNotesAllowed());
            }
        }
        return "Consent preferences for radiologist saved successfully!";
    }

    @Override
    public String cleanByDeletedUser(String userType, Long userId)
    {
        doctorProviderRepository.deleteByConsentSeekerTypeAndConsentSeekerId(userType, userId);
        patientProviderRepository.deleteByConsentSeekerTypeAndConsentSeekerId(userType, userId);
        radiologistProviderRepository.deleteByConsentSeekerTypeAndConsentSeekerId(userType, userId);

        switch (userType) {
            case "DOCTOR" -> doctorProviderRepository.deleteByConsentProviderId(userId);
            case "PATIENT" -> patientProviderRepository.deleteByConsentProviderId(userId);
            case "RADIOLOGIST" -> radiologistProviderRepository.deleteByConsentProviderId(userId);
        }

        return "Successfully deleted consent information corresponding to given user!";
    }

    @Override
    public DoctorProviderConsent getDoctorProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId)
    {
        Optional<DoctorProvider> optionalDoctorProvider = doctorProviderRepository.findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(consentSeekerType, consentSeekerId, consentProviderId, testId);
        if(optionalDoctorProvider.isEmpty())
        {
            throw new UnableToFetchConsentException("Unable to fetch consent information!");
        }
        DoctorProvider doctorProvider = optionalDoctorProvider.get();

        DoctorProviderConsent doctorProviderConsent = new DoctorProviderConsent();
        doctorProviderConsent.setConsentSeekerType(doctorProvider.getConsentSeekerType());
        doctorProviderConsent.setConsentSeekerId(doctorProvider.getConsentSeekerId());
        doctorProviderConsent.setConsentProviderId(doctorProvider.getConsentProviderId());
        doctorProviderConsent.setTestId(doctorProvider.getTestId());
        doctorProviderConsent.setNotesAllowed(doctorProvider.isNotesAllowed());

        return doctorProviderConsent;
    }

    @Override
    public PatientProviderConsent getPatientProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId)
    {
        Optional<PatientProvider> optionalPatientProvider = patientProviderRepository.findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(consentSeekerType, consentSeekerId, consentProviderId, testId);
        if(optionalPatientProvider.isEmpty())
        {
            throw new UnableToFetchConsentException("Unable to fetch consent information!");
        }
        PatientProvider patientProvider = optionalPatientProvider.get();

        PatientProviderConsent patientProviderConsent = new PatientProviderConsent();
        patientProviderConsent.setConsentSeekerType(patientProvider.getConsentSeekerType());
        patientProviderConsent.setConsentSeekerId(patientProvider.getConsentSeekerId());
        patientProviderConsent.setConsentProviderId(patientProvider.getConsentProviderId());
        patientProviderConsent.setTestId(patientProvider.getTestId());
        patientProviderConsent.setImagesAllowed(patientProvider.isImagesAllowed());
        patientProviderConsent.setReportAllowed(patientProvider.isReportAllowed());

        return patientProviderConsent;
    }

    @Override
    public RadiologistProviderConsent getRadiologistProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId)
    {
        Optional<RadiologistProvider> optionalRadiologistProvider = radiologistProviderRepository.findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(consentSeekerType, consentSeekerId, consentProviderId, testId);
        if(optionalRadiologistProvider.isEmpty())
        {
            throw new UnableToFetchConsentException("Unable to fetch consent information!");
        }
        RadiologistProvider radiologistProvider = optionalRadiologistProvider.get();

        RadiologistProviderConsent radiologistProviderConsent = new RadiologistProviderConsent();
        radiologistProviderConsent.setConsentSeekerType(radiologistProvider.getConsentSeekerType());
        radiologistProviderConsent.setConsentSeekerId(radiologistProvider.getConsentSeekerId());
        radiologistProviderConsent.setConsentProviderId(radiologistProvider.getConsentProviderId());
        radiologistProviderConsent.setTestId(radiologistProvider.getTestId());
        radiologistProviderConsent.setAnnotationsAllowed(radiologistProvider.isAnnotationsAllowed());
        radiologistProviderConsent.setNotesAllowed(radiologistProvider.isNotesAllowed());

        return radiologistProviderConsent;
    }

    @Override
    public User authenticate(String authorizationHeader)
    {
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }
        else
        {
            // Handling the case where the Authorization header is missing or empty
            return null;
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        List<String> userTypes = new ArrayList<>();
        userTypes.add("ADMIN");
        userTypes.add("DOCTOR");
        userTypes.add("LABSTAFF");
        userTypes.add("PATIENT");
        userTypes.add("RADIOLOGIST");
        userTypes.add("SUPERADMIN");

        List<String> authUrls = new ArrayList<>();
        authUrls.add("http://localhost:9191/admins/profile");
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/labstaffs/profile");
        authUrls.add("http://localhost:9191/patients/profile");
        authUrls.add("http://localhost:9191/radiologists/profile");
        authUrls.add("http://localhost:9191/superadmins/profile");

        User currentUser = null;

        for(int i=0;i<userTypes.size();i++)
        {
            // Sending a GET request to the user management service with the JWT token in the headers
            ResponseEntity<String> responseEntity;
            try{
                responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);
            } catch (HttpClientErrorException.Forbidden ex){
                continue;
            }
            // Checking if the response status is OK (200)
            if (responseEntity.getStatusCode() == HttpStatus.OK)
            {
                // Creating a new User object
                User user = new User();
                user.setType(userTypes.get(i));

                // Extracting user profile JSON from the response body
                String userProfileJson = responseEntity.getBody();

                // Parsing JSON using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    // Reading JSON as a tree
                    JsonNode rootNode = objectMapper.readTree(userProfileJson);

                    // Extracting user ID from the JSON
                    Long userId = rootNode.path("id").asLong();
                    user.setId(userId);
                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }

    @Override
    public boolean isUserValid(String userType, Long userId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        HashMap<String, String> urlMap = new HashMap<>();
        urlMap.put("ADMIN", "http://localhost:9191/admins/validateAdminId/"+userId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/validateDoctorId/"+userId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/validateLabStaffId/"+userId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/validatePatientId/"+userId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/validateRadiologistId/"+userId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/validateSuperAdminId/"+userId);

        String url = urlMap.get(userType);

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return false;
        }
        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody();
            return Boolean.parseBoolean(responseBody);
        }

        return false;
    }

    @Override
    public boolean isTestValid(Long testId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        String url = "http://localhost:9192/tests/"+ testId +"/getTest";

        // Sending a GET request to the test management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            return false;
        }

        // Checking if the response status is OK (200)
        return responseEntity.getStatusCode() == HttpStatus.OK;

    }

    @Override
    public List<User> parseConsentSeekersList(List<String> consentSeekers)
    { //Format: consentSeekerType<delimiter>consentSeekerId

        List<User> userList = new ArrayList<>();

        // Iterating over consentSeekers list
        for (String consentSeeker : consentSeekers) {
            // Splitting string by delimiter
            String[] parts = consentSeeker.split(ConsentService.delimiter);

            // Extracting consentSeekerType and consentSeekerId
            String consentSeekerType = parts[0];
            Long consentSeekerId = Long.parseLong(parts[1]);

            // Creating new User object
            User user = new User();
            user.setType(consentSeekerType);
            user.setId(consentSeekerId);

            // Adding User object to userList
            userList.add(user);
        }

        return userList;
    }

    @Override
    public List<DoctorProviderConsent> parseDoctorProviderConsentForm(User currentUser, DoctorProviderConsentForm consentForm, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user
        Long consentRequestId = consentForm.consentRequestId();
        List<String> currentTestData = consentForm.currentTest();
        List<String> otherTestsData = consentForm.otherTests();

        Optional<ConsentRequest> optionalConsentRequest = consentRequestRepository.findById(consentRequestId);
        if(optionalConsentRequest.isEmpty())
        {
            throw new InvalidDoctorProviderConsentFormException("Can't find a consent request for the given ID!");
        }
        ConsentRequest consentRequest = optionalConsentRequest.get();
        String consentProviderType = consentRequest.getConsentProviderType();
        if(!consentProviderType.equals("DOCTOR"))
        {
            throw new InvalidDoctorProviderConsentFormException("Consent provider type must be DOCTOR!");
        }
        Long consentProviderId = consentRequest.getConsentProviderId();
        if(!currentUser.getType().equals(consentProviderType) || !Objects.equals(currentUser.getId(), consentProviderId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Long currentTestId = consentRequest.getTestId();


        // Other tests: Tests other than the current test, corresponding to the provider for which he/she hasn't given access to any resource, to the seeker.
        //              So it's consent seeker specific...

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        String url = "http://localhost:9192/tests/"+consentProviderType+"/"+consentProviderId+"/getAllPrimaryandConsultedTests";

        // Sending a GET request to the test management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        // Creating a list to store test IDs
        List<Long> consentProviderTestIds = new ArrayList<>();

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Extracting the response body
            String responseBody = responseEntity.getBody();

            // Parsing the response body to extract test IDs directly
            try {
                // Assuming the response is a JSON array of test objects
                JSONArray jsonArray = new JSONArray(responseBody);

                // Extracting IDs from each JSON object in the array
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    Long id = jsonObject.getLong("id");
                    consentProviderTestIds.add(id);
                }

            } catch (JSONException e) {
                throw new UnableToFetchTestDetailsException("Error parsing JSON response!");
            }
        }
        else
        {
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        List<DoctorProviderConsent> doctorProviderConsents = new ArrayList<>();

        // Operating on currentTestData:
        for (String entry : currentTestData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean notesAllowed = Boolean.parseBoolean(parts[2]);

            DoctorProviderConsent doctorProviderConsent = new DoctorProviderConsent();
            doctorProviderConsent.setConsentProviderId(consentProviderId);
            doctorProviderConsent.setConsentSeekerId(consentSeekerId);
            doctorProviderConsent.setConsentSeekerType(consentSeekerType);
            doctorProviderConsent.setTestId(currentTestId);
            doctorProviderConsent.setNotesAllowed(notesAllowed);

            doctorProviderConsents.add(doctorProviderConsent);

        }

        //Operating on otherTestsData:
        for (String entry : otherTestsData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean notesAllowed = Boolean.parseBoolean(parts[2]);

            List<Long> consentedConsentProviderTestIds = getTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderType, consentProviderId);
            consentedConsentProviderTestIds.add(currentTestId);

            List<Long> otherTests = new ArrayList<>(consentProviderTestIds);
            otherTests.removeAll(consentedConsentProviderTestIds);
            for(Long otherTest : otherTests) {
                DoctorProviderConsent doctorProviderConsent = new DoctorProviderConsent();
                doctorProviderConsent.setConsentProviderId(consentProviderId);
                doctorProviderConsent.setConsentSeekerId(consentSeekerId);
                doctorProviderConsent.setConsentSeekerType(consentSeekerType);
                doctorProviderConsent.setTestId(otherTest);
                doctorProviderConsent.setNotesAllowed(notesAllowed);

                doctorProviderConsents.add(doctorProviderConsent);
            }

        }

        return doctorProviderConsents;

    }

    @Override
    public List<PatientProviderConsent> parsePatientProviderConsentForm(User currentUser, PatientProviderConsentForm consentForm, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user
        Long consentRequestId = consentForm.consentRequestId();
        List<String> currentTestData = consentForm.currentTest();
        List<String> otherTestsData = consentForm.otherTests();

        Optional<ConsentRequest> optionalConsentRequest = consentRequestRepository.findById(consentRequestId);
        if(optionalConsentRequest.isEmpty())
        {
            throw new InvalidPatientProviderConsentFormException("Can't find a consent request for the given ID!");
        }
        ConsentRequest consentRequest = optionalConsentRequest.get();
        String consentProviderType = consentRequest.getConsentProviderType();
        if(!consentProviderType.equals("PATIENT"))
        {
            throw new InvalidPatientProviderConsentFormException("Consent provider type must be PATIENT!");
        }
        Long consentProviderId = consentRequest.getConsentProviderId();
        if(!currentUser.getType().equals(consentProviderType) || !Objects.equals(currentUser.getId(), consentProviderId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Long currentTestId = consentRequest.getTestId();


        // Other tests: Tests other than the current test, corresponding to the provider for which he/she hasn't given access to any resource, to the seeker.
        //              So it's consent seeker specific...

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        String url = "http://localhost:9192/tests/"+consentProviderType+"/"+consentProviderId+"/getTests";

        // Sending a GET request to the test management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        // Creating a list to store test IDs
        List<Long> consentProviderTestIds = new ArrayList<>();

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Extracting the response body
            String responseBody = responseEntity.getBody();

            // Parsing the response body to extract test IDs directly
            try {
                // Assuming the response is a JSON array of test objects
                JSONArray jsonArray = new JSONArray(responseBody);

                // Extracting IDs from each JSON object in the array
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    Long id = jsonObject.getLong("id");
                    consentProviderTestIds.add(id);
                }

            } catch (JSONException e) {
                throw new UnableToFetchTestDetailsException("Error parsing JSON response!");
            }
        }
        else
        {
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        List<PatientProviderConsent> patientProviderConsents = new ArrayList<>();

        // Operating on currentTestData:
        for (String entry : currentTestData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean imagesAllowed = Boolean.parseBoolean(parts[2]);
            boolean reportAllowed = Boolean.parseBoolean(parts[3]);

            PatientProviderConsent patientProviderConsent = new PatientProviderConsent();
            patientProviderConsent.setConsentProviderId(consentProviderId);
            patientProviderConsent.setConsentSeekerId(consentSeekerId);
            patientProviderConsent.setConsentSeekerType(consentSeekerType);
            patientProviderConsent.setTestId(currentTestId);
            patientProviderConsent.setImagesAllowed(imagesAllowed);
            patientProviderConsent.setReportAllowed(reportAllowed);

            patientProviderConsents.add(patientProviderConsent);

        }

        //Operating on otherTestsData:
        for (String entry : otherTestsData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean imagesAllowed = Boolean.parseBoolean(parts[2]);
            boolean reportAllowed = Boolean.parseBoolean(parts[3]);

            List<Long> consentedConsentProviderTestIds = getTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderType, consentProviderId);
            consentedConsentProviderTestIds.add(currentTestId);

            List<Long> otherTests = new ArrayList<>(consentProviderTestIds);
            otherTests.removeAll(consentedConsentProviderTestIds);
            for(Long otherTest : otherTests) {
                PatientProviderConsent patientProviderConsent = new PatientProviderConsent();
                patientProviderConsent.setConsentProviderId(consentProviderId);
                patientProviderConsent.setConsentSeekerId(consentSeekerId);
                patientProviderConsent.setConsentSeekerType(consentSeekerType);
                patientProviderConsent.setTestId(otherTest);
                patientProviderConsent.setImagesAllowed(imagesAllowed);
                patientProviderConsent.setReportAllowed(reportAllowed);

                patientProviderConsents.add(patientProviderConsent);
            }

        }

        return patientProviderConsents;

    }

    @Override
    public List<RadiologistProviderConsent> parseRadiologistProviderConsentForm(User currentUser, RadiologistProviderConsentForm consentForm, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user
        Long consentRequestId = consentForm.consentRequestId();
        List<String> currentTestData = consentForm.currentTest();
        List<String> otherTestsData = consentForm.otherTests();

        Optional<ConsentRequest> optionalConsentRequest = consentRequestRepository.findById(consentRequestId);
        if(optionalConsentRequest.isEmpty())
        {
            throw new InvalidRadiologistProviderConsentFormException("Can't find a consent request for the given ID!");
        }
        ConsentRequest consentRequest = optionalConsentRequest.get();
        String consentProviderType = consentRequest.getConsentProviderType();
        if(!consentProviderType.equals("RADIOLOGIST"))
        {
            throw new InvalidRadiologistProviderConsentFormException("Consent provider type must be RADIOLOGIST!");
        }
        Long consentProviderId = consentRequest.getConsentProviderId();
        if(!currentUser.getType().equals(consentProviderType) || !Objects.equals(currentUser.getId(), consentProviderId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Long currentTestId = consentRequest.getTestId();


        // Other tests: Tests other than the current test, corresponding to the provider for which he/she hasn't given access to any resource, to the seeker.
        //              So it's consent seeker specific...

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        String url = "http://localhost:9192/tests/"+consentProviderType+"/"+consentProviderId+"/getAllPrimaryandConsultedTests";

        // Sending a GET request to the test management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        // Creating a list to store test IDs
        List<Long> consentProviderTestIds = new ArrayList<>();

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Extracting the response body
            String responseBody = responseEntity.getBody();

            // Parsing the response body to extract test IDs directly
            try {
                // Assuming the response is a JSON array of test objects
                JSONArray jsonArray = new JSONArray(responseBody);

                // Extracting IDs from each JSON object in the array
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    Long id = jsonObject.getLong("id");
                    consentProviderTestIds.add(id);
                }

            } catch (JSONException e) {
                throw new UnableToFetchTestDetailsException("Error parsing JSON response!");
            }
        }
        else
        {
            throw new UnableToFetchTestDetailsException("Unable to fetch test details!");
        }

        List<RadiologistProviderConsent> radiologistProviderConsents = new ArrayList<>();

        // Operating on currentTestData:
        for (String entry : currentTestData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean annotationsAllowed = Boolean.parseBoolean(parts[2]);
            boolean notesAllowed = Boolean.parseBoolean(parts[3]);

            RadiologistProviderConsent radiologistProviderConsent = new RadiologistProviderConsent();
            radiologistProviderConsent.setConsentProviderId(consentProviderId);
            radiologistProviderConsent.setConsentSeekerId(consentSeekerId);
            radiologistProviderConsent.setConsentSeekerType(consentSeekerType);
            radiologistProviderConsent.setTestId(currentTestId);
            radiologistProviderConsent.setAnnotationsAllowed(annotationsAllowed);
            radiologistProviderConsent.setNotesAllowed(notesAllowed);

            radiologistProviderConsents.add(radiologistProviderConsent);

        }

        //Operating on otherTestsData:
        for (String entry : otherTestsData) {
            String[] parts = entry.split(ConsentService.delimiter);

            // Extracting parts
            String consentSeekerType = parts[0];
            long consentSeekerId = Long.parseLong(parts[1]);
            boolean annotationsAllowed = Boolean.parseBoolean(parts[2]);
            boolean notesAllowed = Boolean.parseBoolean(parts[3]);

            List<Long> consentedConsentProviderTestIds = getTestIdsWithSomeConsentedResources(consentSeekerType, consentSeekerId, consentProviderType, consentProviderId);
            consentedConsentProviderTestIds.add(currentTestId);

            List<Long> otherTests = new ArrayList<>(consentProviderTestIds);
            otherTests.removeAll(consentedConsentProviderTestIds);
            for(Long otherTest : otherTests) {
                RadiologistProviderConsent radiologistProviderConsent = new RadiologistProviderConsent();
                radiologistProviderConsent.setConsentProviderId(consentProviderId);
                radiologistProviderConsent.setConsentSeekerId(consentSeekerId);
                radiologistProviderConsent.setConsentSeekerType(consentSeekerType);
                radiologistProviderConsent.setTestId(otherTest);
                radiologistProviderConsent.setAnnotationsAllowed(annotationsAllowed);
                radiologistProviderConsent.setNotesAllowed(notesAllowed);

                radiologistProviderConsents.add(radiologistProviderConsent);
            }

        }

        return radiologistProviderConsents;

    }
}
