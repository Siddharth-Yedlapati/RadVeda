package RadVeda.Collaboration.Messages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface NotifiabilityRepository extends JpaRepository<Notifiability, Long> {

    Optional<Notifiability> findByNotifiabilityTypeAndTestIdAndNotificationRecipientTypeAndNotificationRecipientIdAndNotificationSenderTypeAndNotificationSenderId(String notifiabilityType, Long testId, String notificationRecipientType, Long notificationRecipientId, String notificationSenderType, Long notificationSenderId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE notifiability n SET n.notifiable = :notifiable " +
            "WHERE n.notifiability_type = :notifiabilityType " +
            "AND n.test_id = :testId " +
            "AND n.notification_recipient_type = :notificationRecipientType " +
            "AND n.notification_recipient_id = :notificationRecipientId " +
            "AND n.notification_sender_type = :notificationSenderType " +
            "AND n.notification_sender_id = :notificationSenderId", nativeQuery = true)
    int updateIfExists(String notifiabilityType,
                       String testId,
                       String notificationRecipientType,
                       String notificationRecipientId,
                       String notificationSenderType,
                       String notificationSenderId,
                       String notifiable);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO notifiability (notifiability_type, test_id, notification_recipient_type, notification_recipient_id, notification_sender_type, notification_sender_id, notifiable) " +
            "VALUES (:notifiabilityType, :testId, :notificationRecipientType, :notificationRecipientId, :notificationSenderType, :notificationSenderId, :notifiable)", nativeQuery = true)
    void insertEntry(String notifiabilityType,
                     String testId,
                     String notificationRecipientType,
                     String notificationRecipientId,
                     String notificationSenderType,
                     String notificationSenderId,
                     String notifiable);

}
