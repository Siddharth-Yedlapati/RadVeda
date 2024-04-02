package RadVeda.Patient.PatientTest;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PatientTestRepository extends JpaRepository<PatientTest, Long> {
    List<PatientTest> findAll();
    Optional<PatientTest> findById(Long Id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM patient_test WHERE Id = :Id", nativeQuery = true)
    void deletePatientTest(Long Id);

    @Query(value = "SELECT test_id FROM patient_test WHERE patient_id=:patientId", nativeQuery = true)
    List<Long> getTests(Long patientId);

}
