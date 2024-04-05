package RadVeda.TestManagement;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import RadVeda.TestManagement.exception.UserNotFoundException;
import RadVeda.TestManagement.tests.DoctorTestRequest;
import RadVeda.TestManagement.tests.PatientTestRequest;
import RadVeda.TestManagement.tests.TestRequest;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Random;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class TestService implements TestServiceInterface {
    private final TestRepository testRepository;
    // private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @Override
    public List<Test> getTests() {
        return testRepository.findAll();
    }

    @Override
    public Test prescribeTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, TestRequest request) {
        Random random = new Random();
        int radID = random.nextInt(3) + 1;
        int labID = random.nextInt(3) + 1;
        var flag = 1;
        var p_flag = 1;

        String dateString = LocalDate.now( ZoneId.of( "Asia/Kolkata" ) )
         .toString();
        String[] parts = dateString.split("-");

         // Reorder the parts to form the output string in "dd/MM/yyyy" format
        String outputDateString = parts[2] + "/" + parts[1] + "/" + parts[0];
 

        var newTest = new Test();
        newTest.setTestType(request.TestType());
        newTest.setDatePrescribed(outputDateString);
        newTest.setPatientStatus(request.PatientStatus());
        newTest.setDoctorStatus(request.DoctorStatus());
        newTest.setRadiologistStatus(request.RadiologistStatus());
        newTest.setLabStaffStatus(request.LabStaffStatus());
        newTest.setDoctorsRemarksforPatient(request.DoctorsRemarksforPatient());
        newTest.setDoctorsRemarksforRadiologist(request.DoctorsRemarksforRadiologist());
        newTest.setDoctorID(request.doctorID());
        newTest.setPatientID(request.PatientID());
        newTest.setDoctorNotes(request.DoctorNotes());
        newTest.setOriginalImage(request.OriginalImage());
        newTest.setRadiologistID((long) radID);
        newTest.setLabStaffID((long) labID);


        Test savedTest = testRepository.save(newTest);

        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        String requestBody = "";
        String requestBody_patient = "";

        DoctorTestRequest req = new DoctorTestRequest(savedTest.getId(), savedTest.getPatientID(), savedTest.getDoctorID());

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        try {
            responseEntity = restTemplate.exchange("http://localhost:9194/doctor/prescribe-test", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        } catch (ResourceAccessException e) {
            // testRepository.deleteTest(savedTest.getId());
            flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        } catch (RuntimeException e){
            flag = 2;
        }
        
        if(!responseEntity.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        }
        
        HttpHeaders headers1 = new HttpHeaders();
        headers1.setContentType(MediaType.APPLICATION_JSON);
        headers1.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity1 = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        PatientTestRequest patient_req = new PatientTestRequest(savedTest.getPatientID(), savedTest.getId());
        try {
            ObjectMapper objectmapper1 = new ObjectMapper();
            requestBody_patient = objectmapper1.writeValueAsString(patient_req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        try {
            responseEntity1 = restTemplate.exchange("http://localhost:9198/patient-test/addTest", HttpMethod.POST, new HttpEntity<>(requestBody_patient, headers1), String.class);
        } catch (ResourceAccessException e) {
            // testRepository.deleteTest(savedTest.getId());
            p_flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        } catch (RuntimeException e){
            p_flag =2;
        }
        if(!responseEntity1.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            p_flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        }

        
        if(flag == 2 || p_flag == 2){
            testRepository.deleteTest(savedTest.getId());
            HttpHeaders headers_del = new HttpHeaders();
            headers_del.set("Authorization", "Bearer " + jwtToken);
            String doc_url = "http://localhost:9194/doctor/deleteTest/" + savedTest.getId().toString();
            String pat_url = "http://localhost:9198/patient-test/" + savedTest.getId().toString() + "/deletePatient";
            ResponseEntity<String> responseEntity_doc = restTemplate.exchange(doc_url, HttpMethod.DELETE, new HttpEntity<>(headers_del), String.class);
            ResponseEntity<String> responseEntity_patient = restTemplate.exchange(pat_url, HttpMethod.DELETE, new HttpEntity<>(headers_del), String.class);
            throw new UserNotFoundException("Test creation Failed");
        }

        return savedTest;
    }

    @Override
    public Optional<Test> findById(Long id){
        return testRepository.findById(id);
    }

    @Override
    public List<Test> findAllTests(){
        return testRepository.findAll();
    }

    @Override
    public List<Test> findAllTestsByUser(String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByDoctorID(userID);
        }
        else if("PATIENT".equals(userType)){
            return testRepository.findByPatientID(userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findByRadiologistID(userID);
        }
        else if("LABSTAFF".equals(userType)){
            return testRepository.findByLabStaffID(userID);
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByPatientAndDocID(patientID, userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findAllTestsByPatientAndRadID(patientID, userID);
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findConsultedByPatientAndDocID(patientID, userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findConsultedTestsByPatientAndRadID(patientID, userID);
        }
        return new ArrayList<>();
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

}
