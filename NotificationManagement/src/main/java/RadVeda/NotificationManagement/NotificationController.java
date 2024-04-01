package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.RecipientNotFoundException;
import RadVeda.NotificationManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/notifications")
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping("/getChatNotifications")
    public List<ChatNotification> getChatNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllChatNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @GetMapping("/getConsentRequestNotifications")
    public List<ConsentRequestNotification> getConsentRequestNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllConsentRequestNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @GetMapping("/getOneWayNotifications")
    public List<OneWayNotification> getOneWayNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllOneWayNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @PostMapping("/sendChatNotification")
    public String sendChatNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody ChatNotificationRequest request)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!notificationService.isRecipientValid(request.recipientType(), request.recipientId(), authorizationHeader))
        {
            throw new RecipientNotFoundException("Invalid notification recipient!");
        }
        return notificationService.sendChatNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.chatID());
    }
    @PostMapping("/sendConsentRequestNotification")
    public String sendConsentRequestNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,  @RequestBody ConsentRequestNotificationRequest request)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!notificationService.isRecipientValid(request.recipientType(), request.recipientId(), authorizationHeader))
        {
            throw new RecipientNotFoundException("Invalid notification recipient!");
        }
        return notificationService.sendConsentRequestNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.consentRequestId());
    }

    @PostMapping("/sendOneWayNotification")
    public String sendOneWayNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody OneWayNotificationRequest request)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!notificationService.isRecipientValid(request.recipientType(), request.recipientId(), authorizationHeader))
        {
            throw new RecipientNotFoundException("Invalid notification recipient!");
        }
        return notificationService.sendOneWayNotificationToRecipient(request.message(), request.recipientType(), request.recipientId());
    }

    @DeleteMapping("/deleteChatNotification/{id}")
    public String deleteChatNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteChatNotificationOfRecipient(id, currentUser);
    }

    @DeleteMapping("/deleteConsentRequestNotification/{id}")
    public String deleteConsentRequestNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteConsentRequestNotificationOfRecipient(id, currentUser);
    }

    @DeleteMapping("/deleteOneWayNotification/{id}")
    public String deleteOneWayNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteOneWayNotificationOfRecipient(id, currentUser);
    }

}
