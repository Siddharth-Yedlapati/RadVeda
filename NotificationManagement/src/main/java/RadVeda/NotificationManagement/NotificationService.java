package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.NotificationNotFoundException;
import RadVeda.NotificationManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
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
    public String deleteChatNotificationOfRecipient(Long Id, User currentUser)
    {
        Optional<ChatNotification> chatNotif = chatNotificationRepository.findById(Id);
        if(chatNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        if(!Objects.equals(currentUser.getId(), chatNotif.get().getRecipientId()) || !Objects.equals(currentUser.getType(), chatNotif.get().getRecipientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        chatNotificationRepository.delete(chatNotif.get());
        return "Notification deleted successfully!!";
    }

    @Override
    public String deleteConsentRequestNotificationOfRecipient(Long Id, User currentUser)
    {
        Optional<ConsentRequestNotification> consReqNotif = consentRequestNotificationRepository.findById(Id);
        if(consReqNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        if(!Objects.equals(currentUser.getId(), consReqNotif.get().getRecipientId()) || !Objects.equals(currentUser.getType(), consReqNotif.get().getRecipientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        consentRequestNotificationRepository.delete(consReqNotif.get());
        return "Notification deleted successfully!!";
    }

    @Override
    public String deleteOneWayNotificationOfRecipient(Long Id, User currentUser)
    {
        Optional<OneWayNotification> oneWayNotif = oneWayNotificationRepository.findById(Id);
        if(oneWayNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        if(!Objects.equals(currentUser.getId(), oneWayNotif.get().getRecipientId()) || !Objects.equals(currentUser.getType(), oneWayNotif.get().getRecipientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        oneWayNotificationRepository.delete(oneWayNotif.get());
        return "Notification deleted successfully!!";
    }
}
