package radveda.usermanagement.Users.Admin.user;

import com.dailycodework.sbemailverificationdemo.exception.UserAlreadyExistsException;
import com.dailycodework.sbemailverificationdemo.registration.RegistrationRequest;
import com.dailycodework.sbemailverificationdemo.registration.token.VerificationToken;
import com.dailycodework.sbemailverificationdemo.registration.token.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.Admin.signup.AdminSignUpRequest;
import radveda.usermanagement.Users.Admin.signup.token.AdminVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService implements AdminServiceInterface {
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
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
        newAdmin.setPassword(request.password());
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
        var verificationToken = new VerificationToken(token, theAdmin);
        adminTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        VerificationToken token = adminTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Admin user = token.getUser();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            tokenRepository.delete(token);
            return "Token already expired";
        }
        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }
}
