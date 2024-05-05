package RadVeda.UserManagement.Users.Admin.user;

import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface AdminServiceInterface {
    List<Admin> getAdmins();

    Admin registerAdmin(AdminSignUpRequest request);

    Optional<Admin> findByEmail(String email);

    void saveAdminVerificationToken(Admin theAdmin, String verificationToken);

    String validateToken(String theToken);

    String requestSignUp(Admin admin);
    String adminAcceptedSignUp(Long Id);
    String adminDeclinedSignUp(Long Id);

    String updateAdmin(AdminUpdateAcceptance adminUpdateAcceptance);

    String sendUserToServer(Admin admin);



    Optional<Admin> findById(Long id);
}
