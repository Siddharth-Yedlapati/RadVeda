package RadVeda.NotificationManagement.Notifications;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.NonNullApi;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface ChatNotificationRepository extends JpaRepository<ChatNotification, Long> {
    List<ChatNotification> findByRecipientTypeAndRecipientId(String recipientType, Long recipientId);
    @NonNull Optional<ChatNotification> findById(@NonNull Long id);
    @Transactional
    void deleteByRecipientTypeAndRecipientId(@Param("recipientType") String recipientType, @Param("recipientId") Long recipientId);
}