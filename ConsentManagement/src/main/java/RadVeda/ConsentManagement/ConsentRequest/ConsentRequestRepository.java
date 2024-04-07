package RadVeda.ConsentManagement.ConsentRequest;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsentRequestRepository extends JpaRepository<ConsentRequest, Long> {
    @NonNull Optional<ConsentRequest> findById(@NonNull Long id);
}
