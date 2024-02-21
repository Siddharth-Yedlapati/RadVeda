package radveda.usermanagement.Users.SuperAdmin.user;

import radveda.usermanagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface SuperAdminServiceInterface {
    List<SuperAdmin> getSuperAdmins();

    SuperAdmin registerSuperAdmin(SuperAdminSignUpRequest request);

    Optional<SuperAdmin> findByEmail(String email);

    void saveSuperAdminVerificationToken(SuperAdmin theSuperAdmin, String verificationToken);

    String validateToken(String theToken);
}
