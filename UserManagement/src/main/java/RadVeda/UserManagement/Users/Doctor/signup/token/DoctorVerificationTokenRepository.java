package RadVeda.UserManagement.Users.Doctor.signup.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorVerificationTokenRepository extends JpaRepository<DoctorVerificationToken, Long> {
    DoctorVerificationToken findByToken(String token);
    DoctorVerificationToken findByDoctor_id(Long id);
}
