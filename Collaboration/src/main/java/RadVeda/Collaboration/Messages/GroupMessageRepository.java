package RadVeda.Collaboration.Messages;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupMessageRepository extends JpaRepository<GroupMessage, Long> {
    @NonNull Optional<GroupMessage> findById(@NonNull Long id);
}
