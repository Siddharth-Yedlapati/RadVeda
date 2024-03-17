package RadVeda.UserManagement.Users.LabStaff.user;

import RadVeda.UserManagement.Users.LabStaff.signup.LabStaffSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface LabStaffServiceInterface {
    List<LabStaff> getLabStaffs();

    public void cleanUp();

    LabStaff registerLabStaff(LabStaffSignUpRequest request);

    Optional<LabStaff> findByEmail(String email);

    void saveLabStaffVerificationToken(LabStaff theLabStaff, String verificationToken);

    String validateToken(String theToken);
}
