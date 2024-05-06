package RadVeda.TestManagement;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TestVerificationOTPRepository extends JpaRepository<TestVerificationOTP, Long> {

    Optional<TestVerificationOTP> findByPatientIdAndDoctorId(Long patientId, Long doctorId);

}
