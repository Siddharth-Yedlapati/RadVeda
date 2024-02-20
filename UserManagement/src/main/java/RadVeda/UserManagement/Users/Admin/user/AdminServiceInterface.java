package radveda.usermanagement.Users.Admin.user;

import radveda.usermanagement.Users.Admin.signup.AdminSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface AdminServiceInterface {
    List<Admin> getUsers();

    Admin registerAdmin(AdminSignUpRequest request);

    Optional<Admin> findByEmail(String email);

    void saveAdminVerificationToken(Admin theAdmin, String verificationToken);

    String validateToken(String theToken);
}
