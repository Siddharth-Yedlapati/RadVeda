package RadVeda.NotificationManagement;

import RadVeda.NotificationManagement.Notifications.*;
import RadVeda.NotificationManagement.exception.NotificationNotFoundException;
import RadVeda.NotificationManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

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
    public ChatNotification findChatNotificationById(Long Id, User currentUser)
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

        return chatNotif.get();
    }

    @Override
    public ConsentRequestNotification findConsentRequestNotificationById(Long Id, User currentUser)
    {
        Optional<ConsentRequestNotification> consentRequestNotif = consentRequestNotificationRepository.findById(Id);
        if(consentRequestNotif.isEmpty())
        {
            throw new NotificationNotFoundException("Couldn't find a notification with the given ID");
        }

        if(!Objects.equals(currentUser.getId(), consentRequestNotif.get().getRecipientId()) || !Objects.equals(currentUser.getType(), consentRequestNotif.get().getRecipientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentRequestNotif.get();
    }

    @Override
    public OneWayNotification findOneWayNotificationById(Long Id, User currentUser)
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

        return oneWayNotif.get();
    }

    @Override
    public String sendChatNotificationToRecipient(String message, String recipientType, Long recipientId, String chatType, Long chatId)
    {
        ChatNotification chatNotif = new ChatNotification();

        chatNotif.setMessage(message);
        chatNotif.setRecipientType(recipientType);
        chatNotif.setRecipientId(recipientId);
        chatNotif.setChatId(chatId);
        chatNotif.setChatType(chatType);

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

    @Override
    public String deleteAllChatNotificationsOfRecipient(String recipientType, Long recipientId)
    {
        chatNotificationRepository.deleteByRecipientTypeAndRecipientId(recipientType, recipientId);
        return "Notifications deleted successfully!!";
    }

    @Override
    public String deleteAllConsentRequestNotificationsOfRecipient(String recipientType, Long recipientId)
    {
        consentRequestNotificationRepository.deleteByRecipientTypeAndRecipientId(recipientType, recipientId);
        return "Notifications deleted successfully!!";
    }

    @Override
    public String deleteAllOneWayNotificationsOfRecipient(String recipientType, Long recipientId)
    {
        oneWayNotificationRepository.deleteByRecipientTypeAndRecipientId(recipientType, recipientId);
        return "Notifications deleted successfully!!";
    }

    @Override
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
            ResponseEntity<String> responseEntity;
            try{
            responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);
            } catch (HttpClientErrorException.Forbidden ex){
                continue;
            }
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

    @Override
    public boolean isRecipientValid(String recipientType, Long recipientId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        HashMap<String, String> urlMap = new HashMap<>();
        urlMap.put("ADMIN", "http://localhost:9191/admins/validateAdminId/"+recipientId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/validateDoctorId/"+recipientId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/validateLabStaffId/"+recipientId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/validatePatientId/"+recipientId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/validateRadiologistId/"+recipientId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/validateSuperAdminId/"+recipientId);

        String url = urlMap.get(recipientType);

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return false;
        }
        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody();
            return Boolean.parseBoolean(responseBody);
        }

        return false;
    }
}
