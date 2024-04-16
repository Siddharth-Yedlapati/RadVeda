package RadVeda.ConsentManagement.ConsentRequest;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConsentRequestRepository extends JpaRepository<ConsentRequest, Long> {
    @NonNull Optional<ConsentRequest> findById(@NonNull Long id);
}
