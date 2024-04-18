package RadVeda.ConsentManagement.ConsentRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsentSeekerRepository extends JpaRepository<ConsentSeeker, Long> {
    List<ConsentSeeker> findByConsentRequestId(Long consentRequestId);
}
