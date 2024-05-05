package RadVeda.UserManagement.Users.SuperAdmin.signup.token;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface SuperAdminVerificationTokenRepository extends JpaRepository<SuperAdminVerificationToken, Long> {
    SuperAdminVerificationToken findByToken(String token);
    SuperAdminVerificationToken findBySuperadmin_id(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM super_admin_verification_token WHERE admin_id = :id", nativeQuery = true)
    void deleteBySuperAdminId(Long id);

}
