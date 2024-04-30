package RadVeda.UserManagement.Users.SuperAdmin.user;

import RadVeda.UserManagement.Users.Admin.signup.AdminServiceRequest;
import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Radiologist.user.Radiologist;
import RadVeda.UserManagement.Users.SuperAdmin.signup.SuperAdminServiceRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;
import RadVeda.UserManagement.Users.SuperAdmin.signup.token.SuperAdminVerificationToken;
import RadVeda.UserManagement.Users.SuperAdmin.signup.token.SuperAdminVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import RadVeda.UserManagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;
import RadVeda.UserManagement.Users.SuperAdmin.signup.token.SuperAdminVerificationTokenRepository;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SuperAdminService implements SuperAdminServiceInterface {
    private final SuperAdminRepository superadminRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @Override
    public List<SuperAdmin> getSuperAdmins() {
        return superadminRepository.findAll();
    }

    @Override
    public void cleanUp() {
        List<SuperAdmin> allSuperAdmins = getSuperAdmins();

        for (SuperAdmin superadmin : allSuperAdmins) {
            if (!superadmin.isEnabled()) {
                SuperAdminVerificationToken token = superadminTokenRepository.findBySuperadmin_id(superadmin.getId());
                Calendar calendar = Calendar.getInstance();
                if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    superadminTokenRepository.delete(token);
                    superadminRepository.delete(superadmin);
                }
            }
        }
    }

    @Override
    public SuperAdmin registerSuperAdmin(SuperAdminSignUpRequest request) {
        cleanUp(); // Cleaning up the SuperAdmin and SuperAdminVerificationToken tables before a new signup
        Optional<SuperAdmin> superadmin = this.findByEmail(request.email());
        if (superadmin.isPresent()) {
            throw new UserAlreadyExistsException(
                    "SuperAdmin with email " + request.email() + " already exists");
        }

        var newSuperAdmin = new SuperAdmin();
        newSuperAdmin.setFirstName(request.firstName());
        newSuperAdmin.setMiddleName(request.middleName());
        newSuperAdmin.setLastName(request.lastName());
        newSuperAdmin.setAddressL1(request.addressL1());
        newSuperAdmin.setAddressL2(request.addressL2());
        newSuperAdmin.setCountry(request.country());
        newSuperAdmin.setState(request.state());
        newSuperAdmin.setCity(request.city());
        newSuperAdmin.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newSuperAdmin.setPassword(encodedPassword);

        newSuperAdmin.setPhoneNumber(request.phoneNumber());
        newSuperAdmin.setOrgName(request.orgName());
        newSuperAdmin.setOrgAddressL1(request.orgAddressL1());
        newSuperAdmin.setOrgAddressL2(request.orgAddressL2());

        return superadminRepository.save(newSuperAdmin);
    }

    @Override
    public Optional<SuperAdmin> findByEmail(String email) {
        return superadminRepository.findByEmail(email);
    }

    @Override
    public void saveSuperAdminVerificationToken(SuperAdmin theSuperAdmin, String token) {
        var verificationToken = new SuperAdminVerificationToken(token, theSuperAdmin);
        superadminTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        SuperAdminVerificationToken token = superadminTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        SuperAdmin superadmin = token.getSuperadmin();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            superadminTokenRepository.delete(token);
            superadminRepository.delete(superadmin);
            return "Token already expired";
        }
        superadmin.setEnabled(true);
        superadminRepository.save(superadmin);
        return sendUserToServer(superadmin);
    }

    @Override
    public String sendUserToServer(SuperAdmin superAdmin) {
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        String requestBody = "";
        SuperAdminServiceRequest req = new SuperAdminServiceRequest(
                superAdmin.getFirstName(),
                superAdmin.getLastName(),
                superAdmin.getEmail()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        ResponseEntity<String> responseEntity;
        try {
            responseEntity = restTemplate.exchange("http://localhost:9196/super-admin/addSuperAdmin", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        }
        catch (Exception e) {
            e.printStackTrace();
            superadminTokenRepository.deleteBySuperAdminId(superAdmin.getId());
            superadminRepository.deleteById(superAdmin.getId());
            return "failure";
        }
        return responseEntity.getBody();

    }

    @Override
    public Optional<SuperAdmin> findById(Long id) {
        return superadminRepository.findById(id);
    }
}
