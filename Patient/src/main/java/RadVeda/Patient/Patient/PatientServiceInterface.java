package RadVeda.Patient;

import RadVeda.Patient.Patient.Patient;

import java.util.Optional;

public interface PatientServiceInterface {

    Patient addPatient(PatientRequest request);
    Optional<Patient> findById(long Id);

    User authenticate(String AuthorizationHeader);

}
