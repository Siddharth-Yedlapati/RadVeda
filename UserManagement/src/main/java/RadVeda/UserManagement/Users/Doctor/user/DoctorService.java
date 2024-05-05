package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.Users.Admin.signup.AdminServiceRequest;
import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Admin.user.AdminRepository;
import RadVeda.UserManagement.Users.Admin.user.AdminUpdateAcceptance;
import RadVeda.UserManagement.Users.Admin.user.AdminUpdateRequest;
import RadVeda.UserManagement.Users.Doctor.signup.DoctorServiceRequest;
import RadVeda.UserManagement.Users.Doctor.signup.DoctorSignUpRequest;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationToken;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationTokenRepository;
import RadVeda.UserManagement.Users.User.UserUpdateAcceptance;
import RadVeda.UserManagement.Users.User.UserUpdateRequest;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.exception.UserNotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class DoctorService implements DoctorServiceInterface {
    private final DoctorRepository doctorRepository;
    private final DoctorDocumentsRepository doctordocumentsrepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final DoctorVerificationTokenRepository doctorTokenRepository;
    private final AdminRepository adminRepository;

    @Override
    public List<Doctor> getDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public void cleanUp() {
        List<Doctor> allDoctors = getDoctors();

        for (Doctor doctor : allDoctors) {
            if (!doctor.isEmailVerified()) {
                DoctorVerificationToken token = doctorTokenRepository.findByDoctor_id(doctor.getId());
                Calendar calendar = Calendar.getInstance();
                if (token == null || (token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    ResponseEntity<String> responseEntity;
                    HttpHeaders headers = new HttpHeaders();
                    RestTemplate restTemplate = new RestTemplate();
                    responseEntity = restTemplate.exchange("http://localhost:9197/admin-doc/deleteDoc/" +
                            doctor.getId(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);

                    if(responseEntity.getBody() != null && responseEntity.getBody().equalsIgnoreCase("success")) {
                        if (token != null) {
                            doctorTokenRepository.delete(token);
                        }
                        if (doctor.getId() != null) {
                            doctordocumentsrepository.delete(doctor.getId());
                        }
                        if (doctor != null) {
                            doctorRepository.delete(doctor);
                        }
                    }
                }
            }
        }
    }

    @Override
    public Doctor registerDoctor(DoctorSignUpRequest request) {
        cleanUp(); //Cleaning up the Doctor and DoctorVerificationToken tables before a new signup
        Optional<Doctor> doctor = this.findByEmail(request.email());
        if (doctor.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Doctor with email " + request.email() + " already exists");
        }

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

        String encodedPassword = passwordEncoder.encode(request.password());
        newDoctor.setPassword(encodedPassword);

        newDoctor.setPhoneNumber(request.phoneNumber());
        newDoctor.setOrgName(request.orgName());
        newDoctor.setOrgAddressL1(request.orgAddressL1());
        newDoctor.setOrgAddressL2(request.orgAddressL2());

        for (String document : request.Documents()){
            var newDocument = new DoctorDocuments();
            newDocument.setDocuments(document);
            newDocument.setDoctor(newDoctor); 
            doctordocumentsrepository.save(newDocument);
        }

        return doctorRepository.save(newDoctor);
    }

    @Override
    public Optional<Doctor> findByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }

    @Override
    public void saveDoctorVerificationToken(Doctor theDoctor, String token) {
        var verificationToken = new DoctorVerificationToken(token, theDoctor);
        doctorTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        DoctorVerificationToken token = doctorTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Doctor doctor = token.getDoctor();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {

            ResponseEntity<String> responseEntity;
            HttpHeaders headers = new HttpHeaders();
            RestTemplate restTemplate = new RestTemplate();
            responseEntity = restTemplate.exchange("http://localhost:9197/admin-doc/deleteDoc/" +
                    doctor.getId(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);

            if(responseEntity.getBody() != null && responseEntity.getBody().equalsIgnoreCase("success")) {
                doctorTokenRepository.delete(token);
                doctordocumentsrepository.delete(doctor.getId());
                doctorRepository.delete(doctor);
            }

            return "Token already expired";
        }
        doctor.setEmailVerified(true);
        doctor.setEnabled(doctor.isEmailVerified() && doctor.isAdminVerified());
        doctorRepository.save(doctor);
        if (doctor.isEnabled()) {
            String res = sendUserToServer(doctor);
            if(res.equalsIgnoreCase("success")) return "success";
            else {
                ResponseEntity<String> responseEntity;
                HttpHeaders headers = new HttpHeaders();
                RestTemplate restTemplate = new RestTemplate();
                responseEntity = restTemplate.exchange("http://localhost:9197/admin-doc/deleteDoc/" +
                        doctor.getId(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);

                if(responseEntity.getBody() != null && responseEntity.getBody().equalsIgnoreCase("success")) {
                    doctorTokenRepository.delete(token);
                    doctordocumentsrepository.delete(doctor.getId());
                    doctorRepository.delete(doctor);
                }
                else {
                    doctor.setEmailVerified(false);
                    doctor.setEnabled(doctor.isEmailVerified() && doctor.isAdminVerified());
                    doctorRepository.save(doctor);
                }
                return "failure";
            }
        }
        return "success";
    }

    @Override
    public Optional<Doctor> findById(Long id) {
        return doctorRepository.findById(id);
    }

    @Override
    public String requestSignUp(Doctor user) {

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";

        String remarks = "Request for Sign Up";
        UserUpdateRequest req = new UserUpdateRequest(
                user.getId(),
                user.getFirstName(),
                user.getMiddleName(),
                user.getLastName(),
                user.getAddressL1(),
                user.getAddressL2(),
                user.getCountry(),
                user.getState(),
                user.getCity(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getRole(),
                user.getOrgName(),
                user.getOrgAddressL1(),
                user.getOrgAddressL2(),
                remarks,
                "SIGNUP"
        );

        Optional<Admin> adminRec = adminRepository.findByOrgName(req.orgName());
        if(adminRec.isEmpty()) return "Invalid Organisation name!";
        Admin admin = adminRec.get();

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "failure";
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9197/requests/makeSignUpRequest/"+admin.getId(), HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Failed to send request to the Admin";
        }
        return responseEntity.getBody();

    }


    @Override
    public String adminAcceptedSignUp(Long docId) throws UserNotFoundException {
        Optional<Doctor> docRec = doctorRepository.findById(docId);
        Doctor doc = docRec.orElseThrow(() -> new UserNotFoundException("Invalid Doctor Id"));
        doc.setAdminVerified(true);
        doc.setEnabled(doc.isEmailVerified() && doc.isAdminVerified());
        doctorRepository.save(doc);

        if(!doc.isEnabled()) return "success";
        return sendUserToServer(doc);
    }

    @Override
    public String adminDeclinedSignUp(Long docId) throws UserNotFoundException {
        Optional<Doctor> docRec = doctorRepository.findById(docId);
        Doctor doc = docRec.orElseThrow(() -> new UserNotFoundException("Invalid Doctor Id"));
        doctorTokenRepository.deleteByDocId(docId);
        doctordocumentsrepository.delete(docId);
        doctorRepository.deleteById(docId);
        return "Deleted";
    }

    @Override
    public String sendUserToServer(Doctor doctor) {
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        AdminServiceRequest req = new AdminServiceRequest(
                doctor.getId(),
                doctor.getFirstName(),
                doctor.getLastName(),
                doctor.getEmail()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9194/doctor/addDoctor", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "failure";
        }
        return responseEntity.getBody();

    }


    @Override
    public String updateDoctor(UserUpdateAcceptance request) throws  UserNotFoundException{

        Optional<Doctor> docRec = doctorRepository.findById(request.userId());
        Doctor doc = docRec.orElseThrow(() -> new UserNotFoundException("Invalid Doc Id"));

        if(request.firstName()!=null) doc.setFirstName(request.firstName());
        if(request.middleName()!=null)doc.setMiddleName(request.middleName());
        if(request.lastName()!=null)doc.setLastName(request.lastName());
        if(request.addressL1()!=null)doc.setAddressL1(request.addressL1());
        if(request.addressL2()!=null)doc.setAddressL2(request.addressL2());
        if(request.country()!=null)doc.setCountry(request.country());
        if(request.state()!=null)doc.setState(request.state());
        if(request.city()!=null)doc.setCity(request.city());
        if(request.email()!=null)doc.setEmail(request.email());
        if(request.phoneNumber()!=null)doc.setPhoneNumber(request.phoneNumber());
        if(request.orgName()!=null)doc.setOrgName(request.orgName());
        if(request.orgAddressL1()!=null)doc.setOrgAddressL1(request.orgAddressL1());
        if(request.orgAddressL2()!=null)doc.setOrgAddressL2(request.orgAddressL2());

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        AdminServiceRequest req = new AdminServiceRequest(
                doc.getId(),
                doc.getFirstName(),
                doc.getLastName(),
                doc.getEmail()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9194/doctor/updateDoctor/"+doc.getId(), HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
            if(responseEntity.getBody()!=null && responseEntity.getBody().equalsIgnoreCase("success")){
                doctorRepository.save(doc);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            return "failure";
        }
        return responseEntity.getBody();

    }

}
