package RadVeda.Patient.Patient;

import RadVeda.Patient.Patient.Patient;
import RadVeda.Patient.Patient.PatientRequest;
import RadVeda.Patient.User;

import java.util.Optional;

public interface PatientServiceInterface {

    Patient addPatient(PatientRequest request);
    Optional<Patient> findById(Long Id);

    void deletePatient(Long Id);

    User authenticate(String AuthorizationHeader);

}
