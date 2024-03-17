package RadVeda.UserManagement.Users.Patient.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientGuardianVerificationTokenRepository extends JpaRepository<PatientGuardianVerificationToken, Long> {
    PatientGuardianVerificationToken findByToken(String token);
    PatientGuardianVerificationToken findByPatientguardian_id(Long id);
}
