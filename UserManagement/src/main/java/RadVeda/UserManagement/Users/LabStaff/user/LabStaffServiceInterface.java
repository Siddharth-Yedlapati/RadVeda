package radveda.usermanagement.Users.LabStaff.user;

import radveda.usermanagement.Users.LabStaff.signup.LabStaffSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface LabStaffServiceInterface {
    List<LabStaff> getLabStaffs();

    LabStaff registerLabStaff(LabStaffSignUpRequest request);

    Optional<LabStaff> findByEmail(String email);

    void saveLabStaffVerificationToken(LabStaff theLabStaff, String verificationToken);

    String validateToken(String theToken);
}
