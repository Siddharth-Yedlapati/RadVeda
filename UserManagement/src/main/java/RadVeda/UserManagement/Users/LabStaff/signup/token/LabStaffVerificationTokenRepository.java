package radveda.usermanagement.Users.LabStaff.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LabStaffVerificationTokenRepository extends JpaRepository<LabStaffVerificationToken, Long> {
    LabStaffVerificationToken findByToken(String token);
}
