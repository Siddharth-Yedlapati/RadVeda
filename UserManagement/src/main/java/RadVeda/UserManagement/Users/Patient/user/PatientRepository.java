package RadVeda.UserManagement.Users.Patient.user;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Optional<Patient> findByEmail(String email);
    Optional<Patient> findByPatientguardian_id(Long id);
    @NonNull Optional<Patient> findById(@NonNull Long id);
}
