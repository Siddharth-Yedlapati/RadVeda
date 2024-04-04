package RadVeda.Patient.PatientTest;

import RadVeda.Patient.Patient.Patient;
import RadVeda.Patient.Patient.PatientService;
import RadVeda.Patient.User;
import RadVeda.Patient.exceptions.UserNotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import RadVeda.Patient.Patient.PatientRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PatientTestService implements PatientTestServiceInterface {

    private final PatientTestRepository patientTestRepository;
    private final PatientRepository patientRepository;
    private final PatientService patientService;
    


    @Override
    public PatientTest addTestForPatient(PatientTestRequest request) {
        Optional<Patient> patient = patientService.findById(request.patient_Id());
        if(patient.isEmpty()) {
            throw new UserNotFoundException("Patient Not Registered!");

        }

        //similar check for test required?
        Long patientid = request.patient_Id();
        Optional<Patient> patient_rec = getPatient(patientid);
        Patient newPat = patient_rec.orElseThrow(() -> new UserNotFoundException("Patient not found"));
        var newRecord = new PatientTest();
        newRecord.setPatient(newPat);
        newRecord.setTest_Id(request.test_Id());

        return patientTestRepository.save(newRecord);
    }

    @Override
    public Optional<Patient> getPatient(Long patientid){
        return patientRepository.findById(patientid);
    }

    @Override
    public void deleteRecord(Long Id) {
        patientTestRepository.deletePatientTest(Id);
    }

    @Override
    public List<Long> getTestsOfPatient(Long Id) {
        return patientTestRepository.getTests(Id);
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
