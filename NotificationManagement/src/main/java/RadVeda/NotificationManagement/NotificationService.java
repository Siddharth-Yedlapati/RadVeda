package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.NotificationNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NotificationService implements NotificationServiceInterface{
    private final ChatNotificationRepository chatNotificationRepository;
    private final ConsentRequestNotificationRepository consentRequestNotificationRepository;
    private final OneWayNotificationRepository oneWayNotificationRepository;

    @Override
    public List<ChatNotification> findAllChatNotificationsByRecipient(String recipientType, Long recipientId)
    {
        return chatNotificationRepository.findByRecipientTypeAndRecipientId(recipientType, recipientId);
    }

    @Override
    public List<ConsentRequestNotification> findAllConsentRequestNotificationsByRecipient(String recipientType, Long recipientId)
    {
        return consentRequestNotificationRepository.findByRecipientTypeAndRecipientId(recipientType, recipientId);
    }

    @Override
    public List<OneWayNotification> findAllOneWayNotificationsByRecipient(String recipientType, Long recipientId)
    {
        return oneWayNotificationRepository.findByRecipientTypeAndRecipientId(recipientType, recipientId);
    }

    @Override
    public String sendChatNotificationToRecipient(String message, String recipientType, Long recipientId, Long chatID)
    {
        ChatNotification chatNotif = new ChatNotification();

        chatNotif.setMessage(message);
        chatNotif.setRecipientType(recipientType);
        chatNotif.setRecipientId(recipientId);
        chatNotif.setChatID(chatID);

        chatNotificationRepository.save(chatNotif);
        return "Notification sent successfully!!";
    }

    @Override
    public String sendConsentRequestNotificationToRecipient(String message, String recipientType, Long recipientId, Long consentRequestId)
    {
        ConsentRequestNotification consReqNotif = new ConsentRequestNotification();

        consReqNotif.setMessage(message);
        consReqNotif.setRecipientType(recipientType);
        consReqNotif.setRecipientId(recipientId);
        consReqNotif.setConsentRequestId(consentRequestId);

        consentRequestNotificationRepository.save(consReqNotif);
        return "Notification sent successfully!!";
    }

    @Override
    public String sendOneWayNotificationToRecipient(String message, String recipientType, Long recipientId)
    {
        OneWayNotification oneWayNotif = new OneWayNotification();

        oneWayNotif.setMessage(message);
        oneWayNotif.setRecipientType(recipientType);
        oneWayNotif.setRecipientId(recipientId);

        oneWayNotificationRepository.save(oneWayNotif);
        return "Notification sent successfully!!";
    }

    @Override
    public String deleteChatNotificationOfRecipient(Long Id)
    {
        Optional<ChatNotification> chatNotif = chatNotificationRepository.findById(Id);
        if(chatNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        chatNotificationRepository.delete(chatNotif.get());
        return "Notification deleted successfully!!";
    }

    @Override
    public String deleteConsentRequestNotificationOfRecipient(Long Id)
    {
        Optional<ConsentRequestNotification> consReqNotif = consentRequestNotificationRepository.findById(Id);
        if(consReqNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        consentRequestNotificationRepository.delete(consReqNotif.get());
        return "Notification deleted successfully!!";
    }

    @Override
    public String deleteOneWayNotificationOfRecipient(Long Id)
    {
        Optional<OneWayNotification> oneWayNotif = oneWayNotificationRepository.findById(Id);
        if(oneWayNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        oneWayNotificationRepository.delete(oneWayNotif.get());
        return "Notification deleted successfully!!";
    }
}
