package RadVeda.UserManagement.Users.LabStaff.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LabStaffVerificationTokenRepository extends JpaRepository<LabStaffVerificationToken, Long> {
    LabStaffVerificationToken findByToken(String token);
    LabStaffVerificationToken findByLabstaff_id(Long id);
}
