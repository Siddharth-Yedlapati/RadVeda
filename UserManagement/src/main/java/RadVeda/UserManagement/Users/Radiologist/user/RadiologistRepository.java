package RadVeda.UserManagement.Users.Radiologist.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RadiologistRepository extends JpaRepository<Radiologist, Long> {
    Optional<Radiologist> findByEmail(String email);
}
