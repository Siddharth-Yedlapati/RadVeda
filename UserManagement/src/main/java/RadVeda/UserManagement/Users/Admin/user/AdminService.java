package RadVeda.UserManagement.Users.Admin.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationToken;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationTokenRepository;
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
    private final BCryptPasswordEncoder passwordEncoder;
    private final AdminVerificationTokenRepository adminTokenRepository;

    @Override
    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin registerAdmin(AdminSignUpRequest request) {
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
            return "Token already expired";
        }
        admin.setEnabled(true);
        adminRepository.save(admin);
        return "valid";
    }
}
