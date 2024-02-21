package radveda.usermanagement.Users.SuperAdmin.user;

import radveda.usermanagement.exception.UserAlreadyExistsException;
import radveda.usermanagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;
import radveda.usermanagement.Users.SuperAdmin.signup.token.SuperAdminVerificationToken;
import radveda.usermanagement.Users.SuperAdmin.signup.token.SuperAdminVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;
import radveda.usermanagement.Users.SuperAdmin.signup.token.SuperAdminVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SuperAdminService implements SuperAdminServiceInterface {
    private final SuperAdminRepository superadminRepository;
    private final PasswordEncoder passwordEncoder;
    private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @Override
    public List<SuperAdmin> getSuperAdmins() {
        return superadminRepository.findAll();
    }

    @Override
    public SuperAdmin registerSuperAdmin(SuperAdminSignUpRequest request) {
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
        newSuperAdmin.setPassword(request.password());
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
        SuperAdmin superadmin = token.getSuperAdmin();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            superadminTokenRepository.delete(token);
            return "Token already expired";
        }
        superadmin.setEnabled(true);
        superadminRepository.save(superadmin);
        return "valid";
    }
}
