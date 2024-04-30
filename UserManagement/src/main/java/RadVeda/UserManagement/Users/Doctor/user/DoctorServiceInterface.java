package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Admin.user.AdminUpdateAcceptance;
import RadVeda.UserManagement.Users.Doctor.signup.DoctorSignUpRequest;
import RadVeda.UserManagement.Users.User.UserUpdateAcceptance;

import java.util.List;
import java.util.Optional;

public interface DoctorServiceInterface {
    List<Doctor> getDoctors();

    public void cleanUp();

    Doctor registerDoctor(DoctorSignUpRequest request);

    Optional<Doctor> findByEmail(String email);

    void saveDoctorVerificationToken(Doctor theDoctor, String verificationToken);

    String validateToken(String theToken);

    String requestSignUp(Doctor doctor);
    String adminAcceptedSignUp(Long Id);
    String adminDeclinedSignUp(Long Id);

    String updateDoctor(UserUpdateAcceptance doctorUpdateAcceptance);

    Optional<Doctor> findById(Long id);

    String sendUserToServer(Doctor doctor);
}
