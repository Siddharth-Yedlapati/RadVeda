package RadVeda.UserManagement.Users.Patient.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientGuardianRepository extends JpaRepository<PatientGuardian, Long> {
    Optional<PatientGuardian> findByEmail(String email);
}
