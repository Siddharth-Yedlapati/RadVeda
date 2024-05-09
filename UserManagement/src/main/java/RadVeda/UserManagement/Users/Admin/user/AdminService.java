package RadVeda.UserManagement.Users.Admin.user;

import RadVeda.UserManagement.Users.Admin.signup.AdminServiceRequest;
import RadVeda.UserManagement.Users.Doctor.signup.DoctorServiceRequest;
import RadVeda.UserManagement.Users.Doctor.user.DoctorDocuments;
import RadVeda.UserManagement.exception.UserNotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationToken;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService implements AdminServiceInterface {
    private final AdminRepository adminRepository;
    private final AdminDocumentsRepository admindocumentsrepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final AdminVerificationTokenRepository adminTokenRepository;

    @Override
    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    public void cleanUp() {
        List<Admin> allAdmins = getAdmins();

        for (Admin admin : allAdmins) {
            if (!admin.isEmailVerified()) {
                AdminVerificationToken token = adminTokenRepository.findByAdmin_id(admin.getId());
                Calendar calendar = Calendar.getInstance();
                if (token == null || (token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    if (token != null) {
                        adminTokenRepository.delete(token);
                    }
                    if (admin.getId() != null) {
                        admindocumentsrepository.delete(admin.getId());
                    }
                    if (admin != null) {
                        adminRepository.delete(admin);
                    }
                }
            }
        }
    }

    @Override
    public Admin registerAdmin(AdminSignUpRequest request) {
        cleanUp(); // Cleaning up the Admin and AdminVerificationToken tables before a new signup
        Optional<Admin> admin = this.findByEmail(request.email());
        if (admin.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Admin with email " + request.email() + " already exists");
        }

        var newAdmin = new Admin();
        newAdmin.setFirstName(request.firstName());
        newAdmin.setMiddleName(request.middleName());
        newAdmin.setLastName(request.lastName());
        newAdmin.setAddressL1(request.addressL1());
        newAdmin.setAddressL2(request.addressL2());
        newAdmin.setCountry(request.country());
        newAdmin.setState(request.state());
        newAdmin.setCity(request.city());
        newAdmin.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newAdmin.setPassword(encodedPassword);

        newAdmin.setPhoneNumber(request.phoneNumber());
        newAdmin.setOrgName(request.orgName());
        newAdmin.setOrgAddressL1(request.orgAddressL1());
        newAdmin.setOrgAddressL2(request.orgAddressL2());
        for (String document : request.Documents()){
            var newDocument = new AdminDocuments();
            newDocument.setDocuments(document);
            newDocument.setAdmin(newAdmin); 
            admindocumentsrepository.save(newDocument);
        }


        return adminRepository.save(newAdmin);
    }

    @Override
    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    @Override
    public void saveAdminVerificationToken(Admin theAdmin, String token) {
        var verificationToken = new AdminVerificationToken(token, theAdmin);
        adminTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        AdminVerificationToken token = adminTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Admin admin = token.getAdmin();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            adminTokenRepository.delete(token);
            admindocumentsrepository.delete(admin.getId());
            adminRepository.delete(admin);
            return "Token already expired";
        }
        admin.setEmailVerified(true);
        admin.setEnabled(admin.isEmailVerified() && admin.isAdminVerified());
        adminRepository.save(admin);
        if (admin.isEnabled()) {
            String res = sendUserToServer(admin);
            if(res.equalsIgnoreCase("success")) return "success";
            else {
                ResponseEntity<String> responseEntity;
                HttpHeaders headers = new HttpHeaders();
                RestTemplate restTemplate = new RestTemplate();
                responseEntity = restTemplate.exchange("http://localhost:9197/admin-doc/deleteDoc/" +
                        admin.getId(), HttpMethod.DELETE ,new HttpEntity<>(headers), String.class);

                if(responseEntity.getBody() != null && responseEntity.getBody().equalsIgnoreCase("success")) {
                    adminTokenRepository.delete(token);
                    admindocumentsrepository.delete(admin.getId());
                    adminRepository.delete(admin);
                }
                else {
                    admin.setEmailVerified(false);
                    admin.setEnabled(admin.isEmailVerified() && admin.isAdminVerified());
                    adminRepository.save(admin);
                }
                return "failure";
            }
        }
        return "success";
    }

    @Override
    public Optional<Admin> findById(Long id) {
        return adminRepository.findById(id);
    }

    //Invoke when UMS sends signUp request
    @Override
    public String requestSignUp(Admin admin) {

        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";

        String remarks = "Request for Sign Up";
        AdminUpdateRequest req = new AdminUpdateRequest(
                admin.getId(),
                admin.getFirstName(),
                admin.getMiddleName(),
                admin.getLastName(),
                admin.getAddressL1(),
                admin.getAddressL2(),
                admin.getCountry(),
                admin.getState(),
                admin.getCity(),
                admin.getEmail(),
                admin.getPhoneNumber(),
                admin.getRole(),
                admin.getOrgName(),
                admin.getOrgAddressL1(),
                admin.getOrgAddressL2(),
                remarks,
                "SIGNUP"
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "failure";
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9196/requests/makeSignUpRequest", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            return "failure";
        }
        return responseEntity.getBody();

    }

    //Invoked when admin accepts signUp request
    @Override
    public String adminAcceptedSignUp(Long adminId) throws UserNotFoundException{
        Optional<Admin> adminRec = adminRepository.findById(adminId);
        Admin admin = adminRec.orElseThrow(() -> new UserNotFoundException("Invalid Admin Id"));
        admin.setAdminVerified(true);
        admin.setEnabled(admin.isEmailVerified() && admin.isAdminVerified());
        adminRepository.save(admin);
        if(!admin.isEnabled()) return "success";
        else return sendUserToServer(admin);

    }

    @Override
    public String adminDeclinedSignUp(Long adminId) throws UserNotFoundException {
        Optional<Admin> adminRec = adminRepository.findById(adminId);
        Admin admin = adminRec.orElseThrow(() -> new UserNotFoundException("Invalid Admin Id"));
        adminTokenRepository.deleteByAdminId(adminId);
        admindocumentsrepository.delete(adminId);
        adminRepository.deleteById(adminId);
        return "Deleted";
    }

    @Override
    public String sendUserToServer(Admin admin) {
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        AdminServiceRequest req = new AdminServiceRequest(
                admin.getId(),
                admin.getFirstName(),
                admin.getLastName(),
                admin.getEmail()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9197/admin/addAdmins", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "failure";
        }
        return responseEntity.getBody();

    }

    //Invoked when admin accepts Update request
    @Override
    public String updateAdmin(AdminUpdateAcceptance request) throws  UserNotFoundException{

        Optional<Admin> adminRec = adminRepository.findById(request.adminId());
        Admin admin = adminRec.orElseThrow(() -> new UserNotFoundException("Invalid Admin Id"));

        if(request.firstName()!=null) admin.setFirstName(request.firstName());
        if(request.middleName()!=null)admin.setMiddleName(request.middleName());
        if(request.lastName()!=null)admin.setLastName(request.lastName());
        if(request.addressL1()!=null)admin.setAddressL1(request.addressL1());
        if(request.addressL2()!=null)admin.setAddressL2(request.addressL2());
        if(request.country()!=null)admin.setCountry(request.country());
        if(request.state()!=null)admin.setState(request.state());
        if(request.city()!=null)admin.setCity(request.city());
        if(request.email()!=null)admin.setEmail(request.email());
        if(request.phoneNumber()!=null)admin.setPhoneNumber(request.phoneNumber());
        if(request.orgName()!=null)admin.setOrgName(request.orgName());
        if(request.orgAddressL1()!=null)admin.setOrgAddressL1(request.orgAddressL1());
        if(request.orgAddressL2()!=null)admin.setOrgAddressL2(request.orgAddressL2());

        adminRepository.save(admin);


        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        AdminServiceRequest req = new AdminServiceRequest(
                admin.getId(),
                admin.getFirstName(),
                admin.getLastName(),
                admin.getEmail()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9197/admin/updateAdmin/"+admin.getId(), HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "failure";
        }
        return responseEntity.getBody();

    }


}
