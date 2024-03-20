package RadVeda.NotificationManagement.Notifications;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OneWayNotificationRepository extends JpaRepository<OneWayNotification, Long> {
    List<OneWayNotification> findByRecipientTypeAndRecipientId(String recipientType, Long recipientId);
    @NonNull Optional<OneWayNotification> findById(@NonNull Long id);
}
