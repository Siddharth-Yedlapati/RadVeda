package RadVeda.UserManagement.Users.Admin.user;

import RadVeda.UserManagement.exception.UserNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationToken;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationTokenRepository;
import RadVeda.UserManagement.Users.Doctor.user.DoctorDocuments;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationTokenRepository;

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
            if (!admin.isEnabled()) {
                AdminVerificationToken token = adminTokenRepository.findByAdmin_id(admin.getId());
                Calendar calendar = Calendar.getInstance();
                if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    adminTokenRepository.delete(token);
                    admindocumentsrepository.delete(admin.getId());
                    adminRepository.delete(admin);
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
    public Admin updateAdmin(AdminUpdateRequest request) throws  UserNotFoundException{

        Optional<Admin> adminRec = adminRepository.findById(request.adminId());
        Admin admin = adminRec.orElseThrow(() -> new UserNotFoundException("Invalid Admin Id"));

        admin.setFirstName(request.firstName());
        admin.setMiddleName(request.middleName());
        admin.setLastName(request.lastName());
        admin.setAddressL1(request.addressL1());
        admin.setAddressL2(request.addressL2());
        admin.setCountry(request.country());
        admin.setState(request.state());
        admin.setCity(request.city());
        admin.setEmail(request.email());
        admin.setPhoneNumber(request.phoneNumber());
        admin.setOrgName(request.orgName());
        admin.setOrgAddressL1(request.orgAddressL1());
        admin.setOrgAddressL2(request.orgAddressL2());

        return adminRepository.save(admin);
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
        admin.setEnabled(true);
        adminRepository.save(admin);
        return "valid";
    }

    @Override
    public Optional<Admin> findById(Long id) {
        return adminRepository.findById(id);
    }

}
