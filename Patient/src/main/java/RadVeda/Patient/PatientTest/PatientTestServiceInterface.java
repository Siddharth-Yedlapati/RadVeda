package RadVeda.Patient.PatientTest;

import RadVeda.Patient.User;

import java.util.List;

public interface PatientTestServiceInterface {

    PatientTest addTestForPatient(PatientTestRequest request);
    void deleteRecord(Long Id);
    List<Long> getTestsOfPatient(Long patient_Id);

    User authenticate(String AuthorizationHeader);
}
