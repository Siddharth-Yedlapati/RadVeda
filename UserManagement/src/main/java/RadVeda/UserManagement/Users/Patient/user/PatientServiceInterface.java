package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.Users.Patient.signup.PatientSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface PatientServiceInterface {
    List<Patient> getPatients();

    Patient registerPatient(PatientSignUpRequest request);

    Optional<Patient> findByEmail(String email);

    void savePatientVerificationToken(Patient thePatient, String verificationToken);

    String validateToken(String theToken);
}
