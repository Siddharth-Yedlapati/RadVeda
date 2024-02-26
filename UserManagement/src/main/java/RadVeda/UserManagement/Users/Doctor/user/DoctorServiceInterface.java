package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.Users.Doctor.signup.DoctorSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface DoctorServiceInterface {
    List<Doctor> getDoctors();

    Doctor registerDoctor(DoctorSignUpRequest request);

    Optional<Doctor> findByEmail(String email);

    void saveDoctorVerificationToken(Doctor theDoctor, String verificationToken);

    String validateToken(String theToken);
}
