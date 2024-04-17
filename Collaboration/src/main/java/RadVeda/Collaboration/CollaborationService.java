package RadVeda.Collaboration;

import RadVeda.Collaboration.Messages.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CollaborationService implements CollaborationServiceInterface{
    private final GroupMessageRepository groupMessageRepository;
    private final PrivateMessageRepository privateMessageRepository;
    private final NotifiabilityRepository notifiabilityRepository;

    @Override
    public String setPrivateMessageNotifiabilityToTrueForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {

    }

    @Override
    public String setPrivateMessageNotifiabilityToFalseForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {

    }

    @Override
    public String setGroupMessageNotifiabilityToTrueForTest(Long testId, User currentUser)
    {

    }

    @Override
    public String setGroupMessageNotifiabilityToFalseForTest(Long testId, User currentUser)
    {

    }

    @Override
    public String sendGroupMessage(GroupMessageRequest request, User currentUser)
    {
        /* To set:
        Long testId,
        String text,
        String senderType,
        Long senderId,
        String senderFirstName,
        String senderLastName,
        String referenceMessageType,
        Long referenceMessageId
        */
    }

    @Override
    public String sendPrivateMessage(PrivateMessageRequest request, User currentUser)
    {
        /* To set:
        Long testId,
        String text,
        String senderType,
        Long senderId,
        String senderFirstName,
        String senderLastName,
        String referenceMessageType,
        Long referenceMessageId,
        String recipientType,
        Long recipientId,
        String recipientFirstName,
        String recipientLastName
        */
    }

    @Override
    public List<GroupMessage> getGroupMessagesForTest(Long testId)
    {

    }

    @Override
    public List<GroupMessage> getSentGroupMessagesForTest(Long testId)
    {

    }

    @Override
    public List<User> getDirectlyContactedPeopleForTest(Long testId)
    {

    }

    @Override
    public List<PrivateMessage> getPrivateConversationForTestAndUser(Long testId, String userType, Long userId)
    {

    }

    @Override
    public boolean validateMessage(String messageType, Long messageId)
    {

    }

    @Override
    public String clearGroupMessagesForTest(Long testId)
    {

    }

    @Override
    public String clearPrivateMessagesForTestAndUser(Long testId, String userType, Long userId)
    {

    }

    @Override
    public String deleteMessageForCurrentUserForTest(Long testId, String messageType, Long messageId)
    {

    }

    @Override
    public String deleteMessageForEveryoneForTest(Long testId, String messageType, Long messageId, User currentUser)
    {

    }

    @Override
    public String cleanByDeletedUser(String userType, Long userId)
    {

    }

    @Override
    public User authenticate(String authorizationHeader)
    { // NOTE: This function is different from authenticate functions in other services
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

                    // Extracting firstName and lastName from the JSON
                    String firstName = rootNode.path("firstName").asText();
                    String lastName = rootNode.path("lastName").asText();
                    user.setFirstName(firstName);
                    user.setLastName(lastName);

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
    public boolean isUserValid(String userType, Long userId, String authorizationHeader)
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
        urlMap.put("ADMIN", "http://localhost:9191/admins/validateAdminId/"+userId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/validateDoctorId/"+userId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/validateLabStaffId/"+userId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/validatePatientId/"+userId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/validateRadiologistId/"+userId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/validateSuperAdminId/"+userId);

        String url = urlMap.get(userType);

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

    @Override
    public boolean performTestBasedSanityChecks(Long testId, String currentUserType, Long currentUserId, String otherEndUserType, Long otherEndUserId, String authorizationHeader)
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

        String url = "http://localhost:9192/tests/"+ testId +"/getPeopleInvolvedForTest";

        // Sending a GET request to the test management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            return false;
        }

        // Creating a list to store user types
        List<String> userTypes = new ArrayList<>();
        //Creating a list to store corresponding user ids
        List<Long> userIds = new ArrayList<>();

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Extracting the response body
            String responseBody = responseEntity.getBody();

            // Parsing the response body
            try {
                JSONArray jsonArray = new JSONArray(responseBody);

                // Extracting userType and userId from each JSON object in the array
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    String userType = jsonObject.getString("type");
                    Long userId = jsonObject.getLong("id");
                    userTypes.add(userType);
                    userIds.add(userId);
                }

            } catch (JSONException e) {
                return false;
            }
        }
        else
        {
            return false;
        }

        boolean isCurrentUserInTest = false;
        boolean isOtherEndUserInTest = false;

        for(int i=0;i<userTypes.size();i++)
        {
            if(Objects.equals(currentUserType, userTypes.get(i)) && Objects.equals(currentUserId, userIds.get(i)))
            {
                isCurrentUserInTest = true;
            }
            if(otherEndUserType != null && otherEndUserId != null)
            {
                if (Objects.equals(otherEndUserType, userTypes.get(i)) && Objects.equals(otherEndUserId, userIds.get(i)))
                {
                    isOtherEndUserInTest = true;
                }
            }
        }

        return isCurrentUserInTest && ((otherEndUserType == null && otherEndUserId == null) || isOtherEndUserInTest);

    }

    @Override
    public boolean isReferenceMessageValid(User currentMessageSender, User currentMessageRecipient, Long currentMessageTestId, String currentMessageType, String referenceMessageType, Long referenceMessageId)
    {
        //Reference message should be a valid message first of all... done
        //Reference message type should be same as the current message type... done
        //Reference message should be from the same test.. check test id... done
        //If type is private message:
            //sortByTypeAndId([rm_sender, rm_recipient]) should be same as sortByTypeAndId([m_sender, m_recipient])... done

        if(!Objects.equals(referenceMessageType, "PRIVATE") && !Objects.equals(referenceMessageType, "GROUP"))
        {
            return false;
        }
        if(!referenceMessageType.equals(currentMessageType))
        {
            return false;
        }

        if(referenceMessageType.equals("GROUP"))
        {
            Optional<GroupMessage> optionalReferenceMessage = groupMessageRepository.findById(referenceMessageId);
            if(optionalReferenceMessage.isEmpty())
            {
                return false;
            }
            GroupMessage referenceMessage = optionalReferenceMessage.get();
            return Objects.equals(currentMessageTestId, referenceMessage.getTestId());
        }
        else
        {
            Optional<PrivateMessage> optionalReferenceMessage = privateMessageRepository.findById(referenceMessageId);
            if(optionalReferenceMessage.isEmpty())
            {
                return false;
            }
            PrivateMessage referenceMessage = optionalReferenceMessage.get();
            if(!Objects.equals(currentMessageTestId, referenceMessage.getTestId()))
            {
                return false;
            }

            User referenceMessageSender = new User();
            User referenceMessageRecipient = new User();

            referenceMessageSender.setId(referenceMessage.getSenderId());
            referenceMessageSender.setType(referenceMessage.getSenderType());
            referenceMessageSender.setFirstName(referenceMessage.getSenderFirstName());
            referenceMessageSender.setLastName(referenceMessage.getSenderLastName());

            referenceMessageRecipient.setId(referenceMessage.getRecipientId());
            referenceMessageRecipient.setType(referenceMessage.getRecipientType());
            referenceMessageRecipient.setFirstName(referenceMessage.getRecipientFirstName());
            referenceMessageRecipient.setLastName(referenceMessage.getRecipientLastName());

            return (currentMessageSender.equals(referenceMessageSender) && currentMessageRecipient.equals(referenceMessageRecipient)) || (currentMessageSender.equals(referenceMessageRecipient) && currentMessageRecipient.equals(referenceMessageSender));
        }
    }

}