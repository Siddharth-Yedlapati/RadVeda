package RadVeda.UserManagement.Users.LabStaff.user;

import RadVeda.UserManagement.Users.Doctor.user.Doctor;
import RadVeda.UserManagement.Users.Doctor.user.DoctorDocuments;
import RadVeda.UserManagement.Users.LabStaff.signup.LabStaffSignUpRequest;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationToken;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LabStaffService implements LabStaffServiceInterface {
    private final LabStaffRepository labstaffRepository;
    private final LabStaffDocumentsRepository labstaffdocumentsrepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final LabStaffVerificationTokenRepository labstaffTokenRepository;

    @Override
    public List<LabStaff> getLabStaffs() {
        return labstaffRepository.findAll();
    }

    @Override
    public void cleanUp() {
        List<LabStaff> allLabStaffs = getLabStaffs();

        for (LabStaff labstaff : allLabStaffs) {
            if (!labstaff.isEnabled()) {
                LabStaffVerificationToken token = labstaffTokenRepository.findByLabstaff_id(labstaff.getId());
                Calendar calendar = Calendar.getInstance();
                if (token == null || (token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    if (token != null) {
                        labstaffTokenRepository.delete(token);
                    }
                    if (labstaff.getId() != null) {
                        labstaffdocumentsrepository.delete(labstaff.getId());
                    }
                    if (labstaff != null) {
                        labstaffRepository.delete(labstaff);
                    }
                }
            }
        }
    }

    @Override
    public LabStaff registerLabStaff(LabStaffSignUpRequest request) {
        cleanUp(); //Cleaning up the LabStaff and LabStaffVerificationToken tables before a new signup
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
        for (String document : request.Documents()){
            var newDocument = new LabStaffDocuments();
            newDocument.setDocuments(document);
            newDocument.setLabstaff(newLabStaff); 
            labstaffdocumentsrepository.save(newDocument);
        }        

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
            labstaffdocumentsrepository.delete(labstaff.getId());
            labstaffRepository.delete(labstaff);
            return "Token already expired";
        }
        labstaff.setEnabled(true);
        labstaffRepository.save(labstaff);
        return "valid";
    }

    @Override
    public Optional<LabStaff> findById(Long id) {
        return labstaffRepository.findById(id);
    }
}
