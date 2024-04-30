package RadVeda.UserManagement.Users.Admin.signup.token;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AdminVerificationTokenRepository extends JpaRepository<AdminVerificationToken, Long> {
    AdminVerificationToken findByToken(String token);
    AdminVerificationToken findByAdmin_id(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admin_verification_token WHERE admin_id = :id", nativeQuery = true)
    void deleteByAdminId(Long id);

}
