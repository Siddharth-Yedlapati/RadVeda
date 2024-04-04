package RadVeda.UserManagement.Users.Radiologist.user;

import RadVeda.UserManagement.Users.Patient.user.Patient;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.Radiologist.signup.RadiologistServiceRequest;
import RadVeda.UserManagement.Users.Radiologist.signup.RadiologistSignUpRequest;
import RadVeda.UserManagement.Users.Radiologist.signup.token.RadiologistVerificationToken;
import RadVeda.UserManagement.Users.Radiologist.signup.token.RadiologistVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.*;

import RadVeda.UserManagement.Users.Radiologist.signup.RadiologistSignUpRequest;
import RadVeda.UserManagement.Users.Radiologist.signup.token.RadiologistVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RadiologistService implements RadiologistServiceInterface {
    private final RadiologistRepository radiologistRepository;
    private final RadiologistDocumentsRepository radiologistdocumentsrepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RadiologistVerificationTokenRepository radiologistTokenRepository;

    @Override
    public List<Radiologist> getRadiologists() {
        return radiologistRepository.findAll();
    }

    @Override
    public void cleanUp() {
        List<Radiologist> allRadiologists = getRadiologists();

        for (Radiologist radiologist : allRadiologists) {
            if (!radiologist.isEnabled()) {
                RadiologistVerificationToken token = radiologistTokenRepository.findByRadiologist_id(radiologist.getId());
                Calendar calendar = Calendar.getInstance();
                if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    ResponseEntity<String> responseEntity;
                    HttpHeaders headers = new HttpHeaders();
                    RestTemplate restTemplate = new RestTemplate();
                    responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/deleteRadiologist/" + radiologist.getId().toString(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);
                    radiologistTokenRepository.delete(token);
                    radiologistdocumentsrepository.delete(radiologist.getId());
                    radiologistRepository.delete(radiologist);
                    
                }
            }
        }
    }

    @Override
    public Radiologist registerRadiologist(RadiologistSignUpRequest request) {
        cleanUp(); // Cleaning up the Radiologist and RadiologistVerificationToken tables before a new signup
        Optional<Radiologist> radiologist = this.findByEmail(request.email());
        if (radiologist.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Radiologist with email " + request.email() + " already exists");
        }

        var newRadiologist = new Radiologist();
        newRadiologist.setFirstName(request.firstName());
        newRadiologist.setMiddleName(request.middleName());
        newRadiologist.setLastName(request.lastName());
        newRadiologist.setAddressL1(request.addressL1());
        newRadiologist.setAddressL2(request.addressL2());
        newRadiologist.setCountry(request.country());
        newRadiologist.setState(request.state());
        newRadiologist.setCity(request.city());
        newRadiologist.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newRadiologist.setPassword(encodedPassword);

        newRadiologist.setPhoneNumber(request.phoneNumber());
        newRadiologist.setOrgName(request.orgName());
        newRadiologist.setOrgAddressL1(request.orgAddressL1());
        newRadiologist.setOrgAddressL2(request.orgAddressL2());

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        RadiologistServiceRequest req = new RadiologistServiceRequest(request.firstName(), request.middleName(), request.lastName(), request.addressL1(), request.addressL2(),
                     request.country(), request.state(), request.city(), request.email(), request.phoneNumber(), request.orgName(), request.orgAddressL1(), request.orgAddressL2());
        
        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        
        ResponseEntity<String> responseEntity;

        responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/addRadiologist", HttpMethod.POST ,new HttpEntity<>(requestBody, headers), String.class);


        for (String document : request.Documents()){
            var newDocument = new RadiologistDocuments();
            newDocument.setDocuments(document);
            newDocument.setRadiologist(newRadiologist); 
            radiologistdocumentsrepository.save(newDocument);
        }        

        return radiologistRepository.save(newRadiologist);
    }

    @Override
    public Optional<Radiologist> findByEmail(String email) {
        return radiologistRepository.findByEmail(email);
    }

    @Override
    public void saveRadiologistVerificationToken(Radiologist theRadiologist, String token) {
        var verificationToken = new RadiologistVerificationToken(token, theRadiologist);
        radiologistTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        RadiologistVerificationToken token = radiologistTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Radiologist radiologist = token.getRadiologist();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            ResponseEntity<String> responseEntity;
            HttpHeaders headers = new HttpHeaders();
            RestTemplate restTemplate = new RestTemplate();
            responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/deleteRadiologist/" + radiologist.getId().toString(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);
            radiologistTokenRepository.delete(token);
            radiologistdocumentsrepository.delete(radiologist.getId());
            radiologistRepository.delete(radiologist);
            
            return "Token already expired";
        }
        radiologist.setEnabled(true);
        radiologistRepository.save(radiologist);
        return "valid";
    }

    @Override
    public Optional<Radiologist> findById(Long id) {
        return radiologistRepository.findById(id);
    }
}
