package RadVeda.UserManagement.Users.Patient.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientVerificationTokenRepository extends JpaRepository<PatientVerificationToken, Long> {
    PatientVerificationToken findByToken(String token);
    PatientVerificationToken findByPatient_id(Long id);
}
