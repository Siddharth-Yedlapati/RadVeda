package radveda.usermanagement.Users.Admin.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminVerificationTokenRepository extends JpaRepository<AdminVerificationToken, Long> {
    AdminVerificationToken findByToken(String token);
}
