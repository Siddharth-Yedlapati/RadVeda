package RadVeda.UserManagement.Users.SuperAdmin.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SuperAdminVerificationTokenRepository extends JpaRepository<SuperAdminVerificationToken, Long> {
    SuperAdminVerificationToken findByToken(String token);
}
