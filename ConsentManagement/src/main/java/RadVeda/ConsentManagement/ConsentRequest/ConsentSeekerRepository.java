package RadVeda.ConsentManagement.ConsentRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsentSeekerRepository extends JpaRepository<ConsentSeeker, Long> {
}
