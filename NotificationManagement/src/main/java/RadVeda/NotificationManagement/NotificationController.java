package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.ChatNotification;
import RadVeda.NotificationManagement.Notifications.ConsentRequestNotification;
import RadVeda.NotificationManagement.Notifications.OneWayNotification;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/notifications")
public class NotificationController {
    private final NotificationService notificationService;

    public List<ChatNotification> getChatNotifications()
    {

    }
    public List<ConsentRequestNotification> getConsentRequestNotifications()
    {

    }
    public List<OneWayNotification> getOneWayNotifications()
    {

    }
    public String sendChatNotification(String recipientType, Long recipientId, Long chatID)
    {

    }
    public String sendConsentRequestNotification(String recipientType, Long recipientId, Long consentRequestId)
    {

    }
    public String sendOneWayNotification(String recipientType, Long recipientId)
    {

    }
    public String deleteChatNotification(Long Id)
    {

    }
    public String deleteConsentRequestNotification(Long Id)
    {

    }
    public String deleteOneWayNotification(Long Id)
    {

    }
}
