package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.NotificationNotFoundException;
import RadVeda.NotificationManagement.exception.UnauthorisedUserException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
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
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllChatNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @GetMapping("/getConsentRequestNotifications")
    public List<ConsentRequestNotification> getConsentRequestNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllConsentRequestNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @GetMapping("/getOneWayNotifications")
    public List<OneWayNotification> getOneWayNotifications(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.findAllOneWayNotificationsByRecipient(currentUser.getType(), currentUser.getId());
    }

    @PostMapping("/sendChatNotification")
    public String sendChatNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody ChatNotificationRequest request)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.sendChatNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.chatID());
    }
    @PostMapping("/sendConsentRequestNotification")
    public String sendConsentRequestNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,  @RequestBody ConsentRequestNotificationRequest request)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.sendConsentRequestNotificationToRecipient(request.message(), request.recipientType(), request.recipientId(), request.consentRequestId());
    }

    @PostMapping("/sendOneWayNotification")
    public String sendOneWayNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody OneWayNotificationRequest request)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.sendOneWayNotificationToRecipient(request.message(), request.recipientType(), request.recipientId());
    }

    @DeleteMapping("/deleteChatNotification/{id}")
    public String deleteChatNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteChatNotificationOfRecipient(id);
    }

    @DeleteMapping("/deleteConsentRequestNotification/{id}")
    public String deleteConsentRequestNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteConsentRequestNotificationOfRecipient(id);
    }

    @DeleteMapping("/deleteOneWayNotification/{id}")
    public String deleteOneWayNotification(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id)
    {
        User currentUser = authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return notificationService.deleteOneWayNotificationOfRecipient(id);
    }

    public User authenticate(String authorizationHeader)
    {
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }
        else
        {
            // Handling the case where the Authorization header is missing or empty
            return null;
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        List<String> userTypes = new ArrayList<>();
        userTypes.add("ADMIN");
        userTypes.add("DOCTOR");
        userTypes.add("LABSTAFF");
        userTypes.add("PATIENT");
        userTypes.add("RADIOLOGIST");
        userTypes.add("SUPERADMIN");

        List<String> authUrls = new ArrayList<>();
        authUrls.add("http://localhost:9191/admins/profile");
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/labstaffs/profile");
        authUrls.add("http://localhost:9191/patients/profile");
        authUrls.add("http://localhost:9191/radiologists/profile");
        authUrls.add("http://localhost:9191/superadmins/profile");

        User currentUser = null;

        for(int i=0;i<userTypes.size();i++)
        {
            // Sending a GET request to the user management service with the JWT token in the headers
            ResponseEntity<String> responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);

            // Checking if the response status is OK (200)
            if (responseEntity.getStatusCode() == HttpStatus.OK)
            {
                // Creating a new User object
                User user = new User();
                user.setType(userTypes.get(i));

                // Extracting user profile JSON from the response body
                String userProfileJson = responseEntity.getBody();

                // Parsing JSON using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    // Reading JSON as a tree
                    JsonNode rootNode = objectMapper.readTree(userProfileJson);

                    // Extracting user ID from the JSON
                    Long userId = rootNode.path("id").asLong();
                    user.setId(userId);
                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }
}
