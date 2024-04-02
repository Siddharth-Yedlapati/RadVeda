package RadVeda.Doctor;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import RadVeda.Doctor.DoctorServiceInterface;
import RadVeda.Doctor.doctors.DoctorSignUpRequest;
import RadVeda.Doctor.doctors.DoctorTestRequest;
import RadVeda.Doctor.exception.UserNotFoundException;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Random;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class DoctorService implements DoctorServiceInterface {
    private final DoctorRepository doctorRepository;
    private final DoctorTestsRepository doctortestsrepository;
    // private final SuperAdminVerificationTokenRepository superadminTokenRepository;

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
    public DoctorTests prescribeTest(DoctorTestRequest request) throws UserNotFoundException{
        Long doctorid = request.doctorID();
        Optional<Doctor> doctor = getDoctor(doctorid);
        Doctor newDoc = doctor.orElseThrow(() -> new UserNotFoundException("Doctor not found"));
        var test = new DoctorTests();
        test.setDoctor(newDoc);
        test.setPatientid(request.patientID());
        test.setTestid(request.testID());
        return doctortestsrepository.save(test);
         
    }

    @Override
    public Optional<Doctor> getDoctor(Long doctorid){
        return doctorRepository.findById(doctorid);
    }

    @Override
    public Doctor addDoctor(DoctorSignUpRequest request){
        var newDoctor = new Doctor();
        newDoctor.setFirstName(request.firstName());
        newDoctor.setMiddleName(request.middleName());
        newDoctor.setLastName(request.lastName());
        newDoctor.setAddressL1(request.addressL1());
        newDoctor.setAddressL2(request.addressL2());
        newDoctor.setCountry(request.country());
        newDoctor.setState(request.state());
        newDoctor.setCity(request.city());
        newDoctor.setEmail(request.email());
        newDoctor.setOrgName(request.orgName());
        newDoctor.setOrgAddressL1(request.orgAddressL1());
        newDoctor.setOrgAddressL2(request.orgAddressL2());
        return doctorRepository.save(newDoctor);
    }


    @Override
    public void deleteDoctor(Long doctorID){
        doctorRepository.delete(doctorID);
        return;
    }

    @Override
    public DoctorTests addNotes(Long id, String notes){
        DoctorTests test = doctortestsrepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Test not found"));
        test.setDoctorNotes(notes);
        return doctortestsrepository.save(test);
    } 
}
