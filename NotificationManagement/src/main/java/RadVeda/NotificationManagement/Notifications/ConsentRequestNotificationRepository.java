package RadVeda.NotificationManagement.Notifications;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConsentRequestNotificationRepository extends JpaRepository<ConsentRequestNotification, Long> {
    List<ConsentRequestNotification> findByRecipientTypeAndRecipientId(String recipientType, Long recipientId);
    @NonNull Optional<ConsentRequestNotification> findById(@NonNull Long id);
}
