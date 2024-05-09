package RadVeda.UserManagement.security.transitEncryption;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EncryptionRepository extends JpaRepository<SharedKeys, Long> {

    Optional<SharedKeys> findByServiceName(String sharedKey);

}
