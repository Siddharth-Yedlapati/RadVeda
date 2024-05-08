package RadVeda.UserManagement.security.transitEncryption;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EncryptionRepository extends JpaRepository<SharedKeys, Long> {

}
