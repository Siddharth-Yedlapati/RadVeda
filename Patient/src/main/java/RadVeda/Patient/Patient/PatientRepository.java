package RadVeda.Patient.Patient;

import RadVeda.Patient.Patient.Patient;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;


public interface PatientRepository extends JpaRepository<Patient, Long> {

    List<Patient> findAll();
    Optional<Patient> findById(Long Id);

    @Query(value = "SELECT * FROM patient WHERE Id IN (:ids)", nativeQuery = true)
    List<Patient> getPatients(@Param("ids") List<Long> ids);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM patient WHERE Id = :Id", nativeQuery = true)
    void deletePatient(Long Id);

}