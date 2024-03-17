package RadVeda.UserManagement.Users.Radiologist.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RadiologistVerificationTokenRepository extends JpaRepository<RadiologistVerificationToken, Long> {
    RadiologistVerificationToken findByToken(String token);
    RadiologistVerificationToken findByRadiologist_id(Long id);
}
