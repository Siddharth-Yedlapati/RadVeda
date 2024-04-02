package RadVeda.Patient.PatientDoc;

import RadVeda.Patient.Patient.Patient;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;

public interface PatientDocRepository extends JpaRepository<PatientDoc, Long> {

}
