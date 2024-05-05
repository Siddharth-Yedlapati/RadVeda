package RadVeda.UserManagement.Users.SuperAdmin.user;

import RadVeda.UserManagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface SuperAdminServiceInterface {
    List<SuperAdmin> getSuperAdmins();

    public void cleanUp();

    SuperAdmin registerSuperAdmin(SuperAdminSignUpRequest request);

    Optional<SuperAdmin> findByEmail(String email);

    void saveSuperAdminVerificationToken(SuperAdmin theSuperAdmin, String verificationToken);

    String validateToken(String theToken);

    String sendUserToServer(SuperAdmin superAdmin);
    Optional<SuperAdmin> findById(Long id);
}
