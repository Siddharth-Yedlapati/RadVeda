package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.ChatNotification;
import RadVeda.NotificationManagement.Notifications.ConsentRequestNotification;
import RadVeda.NotificationManagement.Notifications.OneWayNotification;

import java.util.List;

public interface NotificationServiceInterface {
    List<ChatNotification> findAllChatNotificationsByRecipient(String recipientType, Long recipientId);
    List<ConsentRequestNotification> findAllConsentRequestNotificationsByRecipient(String recipientType, Long recipientId);
    List<OneWayNotification> findAllOneWayNotificationsByRecipient(String recipientType, Long recipientId);
    String sendChatNotificationToRecipient(String message, String recipientType, Long recipientId, Long chatID);
    String sendConsentRequestNotificationToRecipient(String message, String recipientType, Long recipientId, Long consentRequestId);
    String sendOneWayNotificationToRecipient(String message, String recipientType, Long recipientId);
    String deleteChatNotificationOfRecipient(Long Id);
    String deleteConsentRequestNotificationOfRecipient(Long Id);
    String deleteOneWayNotificationOfRecipient(Long Id);
}
