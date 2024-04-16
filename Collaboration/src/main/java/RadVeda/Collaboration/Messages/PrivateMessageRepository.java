package RadVeda.Collaboration.Messages;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PrivateMessageRepository extends JpaRepository<PrivateMessage, Long> {
    @NonNull Optional<PrivateMessage> findById(@NonNull Long id);
}
