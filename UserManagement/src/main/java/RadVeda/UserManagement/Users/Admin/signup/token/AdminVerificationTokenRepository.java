package RadVeda.UserManagement.Users.Admin.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminVerificationTokenRepository extends JpaRepository<AdminVerificationToken, Long> {
    AdminVerificationToken findByToken(String token);
    AdminVerificationToken findByAdmin_id(Long id);
}
