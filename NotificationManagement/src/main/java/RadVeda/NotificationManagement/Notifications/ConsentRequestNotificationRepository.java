package RadVeda.NotificationManagement.Notifications;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ConsentRequestNotificationRepository extends JpaRepository<ConsentRequestNotification, Long> {
    List<ConsentRequestNotification> findByRecipientTypeAndRecipientId(String recipientType, Long recipientId);
    @NonNull Optional<ConsentRequestNotification> findById(@NonNull Long id);
    @Transactional
    void deleteByRecipientTypeAndRecipientId(@Param("recipientType") String recipientType, @Param("recipientId") Long recipientId);
}
