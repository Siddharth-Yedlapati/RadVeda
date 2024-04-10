package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.InvalidChatException;
import RadVeda.NotificationManagement.exception.InvalidConsentRequestException;
import RadVeda.NotificationManagement.exception.RecipientNotFoundException;
import RadVeda.NotificationManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notifications")
public class NotificationController {
    private final NotificationService notificationService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllChatNotifications")
    public List<ChatNotification> getAllChatNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllChatNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllConsentRequestNotifications")
    public List<ConsentRequestNotification> getAllConsentRequestNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllConsentRequestNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllOneWayNotifications")
    public List<OneWayNotification> getAllOneWayNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllOneWayNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getChatNotification/{id}")
    public ChatNotification getChatNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findChatNotificationById(id, currentUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getConsentRequestNotification/{id}")
    public ConsentRequestNotification getConsentRequestNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findConsentRequestNotificationById(id, currentUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getOneWayNotification/{id}")
    public OneWayNotification getOneWayNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findOneWayNotificationById(id, currentUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
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
        if(!notificationService.isChatValid(request.chatType(), request.chatId(), authorizationHeader))
        {
            throw new InvalidChatException("Invalid chat!");
        }
        return notificationService.sendChatNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.chatType(), request.chatId());
    }

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:9202" })
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
        if(!notificationService.isConsentRequestValid(request.consentRequestId(), authorizationHeader))
        {
            throw new InvalidConsentRequestException("Invalid consent request!");
        }
        return notificationService.sendConsentRequestNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.consentRequestId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
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

    @CrossOrigin(origins = "http://localhost:3000")
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

    @CrossOrigin(origins = "http://localhost:3000")
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

    @CrossOrigin(origins = "http://localhost:3000")
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

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteAllChatNotifications")
    public String deleteAllChatNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteAllChatNotificationsOfRecipient(currentUser.getType(), currentUser.getId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteAllConsentRequestNotifications")
    public String deleteAllConsentRequestNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteAllConsentRequestNotificationsOfRecipient(currentUser.getType(), currentUser.getId());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteAllOneWayNotifications")
    public String deleteAllOneWayNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = notificationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteAllOneWayNotificationsOfRecipient(currentUser.getType(), currentUser.getId());
    }

}
