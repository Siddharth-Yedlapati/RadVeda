package RadVeda.UserManagement.Users.Doctor.signup.token;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface DoctorVerificationTokenRepository extends JpaRepository<DoctorVerificationToken, Long> {
    DoctorVerificationToken findByToken(String token);
    DoctorVerificationToken findByDoctor_id(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM doctor_verification_token WHERE doctor_id = :id", nativeQuery = true)
    void deleteByDocId(Long id);
}
