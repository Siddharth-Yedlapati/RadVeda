package radveda.usermanagement.Users.Doctor.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorVerificationTokenRepository extends JpaRepository<DoctorVerificationToken, Long> {
    DoctorVerificationToken findByToken(String token);
}
