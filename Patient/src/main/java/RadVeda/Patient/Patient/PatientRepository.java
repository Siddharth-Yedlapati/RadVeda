package RadVeda.Patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;


public interface PatientRepository extends JpaRepository<Patient, Long> {

    List<Patient> findAll();

    @Query(value="SELECT name, email, dob" +
            "from Patient WHERE Id = :Id", nativeQuery = true)
    Optional<Patient> patientDetails(long Id);

}