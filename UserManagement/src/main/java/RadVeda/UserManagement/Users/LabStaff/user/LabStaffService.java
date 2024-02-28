package RadVeda.UserManagement.Users.LabStaff.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import RadVeda.UserManagement.Users.LabStaff.signup.LabStaffSignUpRequest;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationToken;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import RadVeda.UserManagement.Users.LabStaff.signup.LabStaffSignUpRequest;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LabStaffService implements LabStaffServiceInterface {
    private final LabStaffRepository labstaffRepository;
    private final BCryptPasswordEncoder passwordEncoder;
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

        String encodedPassword = passwordEncoder.encode(request.password());
        newLabStaff.setPassword(encodedPassword);

        newLabStaff.setPhoneNumber(request.phoneNumber());
        newLabStaff.setOrgName(request.orgName());
        newLabStaff.setOrgAddressL1(request.orgAddressL1());
        newLabStaff.setOrgAddressL2(request.orgAddressL2());
        newLabStaff.setDocuments(request.Documents());

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
        LabStaff labstaff = token.getLabstaff();
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
