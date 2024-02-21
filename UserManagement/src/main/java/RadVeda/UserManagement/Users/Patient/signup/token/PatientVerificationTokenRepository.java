package radveda.usermanagement.Users.Patient.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientVerificationTokenRepository extends JpaRepository<PatientVerificationToken, Long> {
    PatientVerificationToken findByToken(String token);
}