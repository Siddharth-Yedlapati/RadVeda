package RadVeda.LabStaff.transitEncryption;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EncryptionRepository extends JpaRepository<SharedKeys, Long> {

    @Query(value = "SELECT * FROM shared_keys WHERE service_name = :service", nativeQuery = true)
    Optional<SharedKeys> findByServiceName(String service);

}

