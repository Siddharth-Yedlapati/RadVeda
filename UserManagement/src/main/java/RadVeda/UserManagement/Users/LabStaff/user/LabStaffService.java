package radveda.usermanagement.Users.LabStaff.user;

import radveda.usermanagement.exception.UserAlreadyExistsException;
import radveda.usermanagement.Users.LabStaff.signup.LabStaffSignUpRequest;
import radveda.usermanagement.Users.LabStaff.signup.token.LabStaffVerificationToken;
import radveda.usermanagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.LabStaff.signup.LabStaffSignUpRequest;
import radveda.usermanagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LabStaffService implements LabStaffServiceInterface {
    private final LabStaffRepository labstaffRepository;
    private final PasswordEncoder passwordEncoder;
    private final LabStaffVerificationTokenRepository labstaffTokenRepository;

    @Override
    public List<LabStaff> getLabStaffs() {
        return labstaffRepository.findAll();
    }

    @Override
    public LabStaff registerLabStaff(LabStaffSignUpRequest request) {
        Optional<LabStaff> labstaff = this.findByEmail(request.email());
        if (labstaff.isPresent()) {
            throw new UserAlreadyExistsException(
                    "LabStaff with email " + request.email() + " already exists");
        }

        var newLabStaff = new LabStaff();
        newLabStaff.setFirstName(request.firstName());
        newLabStaff.setMiddleName(request.middleName());
        newLabStaff.setLastName(request.lastName());
        newLabStaff.setAddressL1(request.addressL1());
        newLabStaff.setAddressL2(request.addressL2());
        newLabStaff.setCountry(request.country());
        newLabStaff.setState(request.state());
        newLabStaff.setCity(request.city());
        newLabStaff.setEmail(request.email());
        newLabStaff.setPassword(request.password());
        newLabStaff.setPhoneNumber(request.phoneNumber());
        newLabStaff.setOrgName(request.orgName());
        newLabStaff.setOrgAddressL1(request.orgAddressL1());
        newLabStaff.setOrgAddressL2(request.orgAddressL2());

        return labstaffRepository.save(newLabStaff);
    }

    @Override
    public Optional<LabStaff> findByEmail(String email) {
        return labstaffRepository.findByEmail(email);
    }

    @Override
    public void saveLabStaffVerificationToken(LabStaff theLabStaff, String token) {
        var verificationToken = new LabStaffVerificationToken(token, theLabStaff);
        labstaffTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        LabStaffVerificationToken token = labstaffTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        LabStaff labstaff = token.getLabStaff();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            labstaffTokenRepository.delete(token);
            return "Token already expired";
        }
        labstaff.setEnabled(true);
        labstaffRepository.save(labstaff);
        return "valid";
    }
}
