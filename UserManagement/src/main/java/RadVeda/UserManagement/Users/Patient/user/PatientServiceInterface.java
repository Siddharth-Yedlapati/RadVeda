package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.Users.Patient.signup.PatientSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface PatientServiceInterface {
    List<Patient> getPatients();

    public void cleanUp();

    Patient registerPatient(PatientSignUpRequest request);

    Optional<Patient> findByEmail(String email);

    void savePatientVerificationToken(Patient thePatient, String verificationToken);

    void savePatientGuardianVerificationToken(PatientGuardian thePatientGuardian, String verificationToken);

    String validatePatientToken(String theToken);

    String validatePatientGuardianToken(String theToken);

    Optional<Patient> findById(Long id);
}
