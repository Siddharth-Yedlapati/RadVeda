package RadVeda.Patient.PatientTest;

import RadVeda.Patient.User;
import RadVeda.Patient.Patient.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientTestServiceInterface {

    PatientTest addTestForPatient(PatientTestRequest request);
    void deleteRecord(Long Id);
    List<Long> getTestsOfPatient(Long patient_Id);
    Optional<Patient> getPatient(Long patientid);
    User authenticate(String AuthorizationHeader);
}
