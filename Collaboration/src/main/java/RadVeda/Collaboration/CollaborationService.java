package RadVeda.Collaboration;

import RadVeda.Collaboration.Messages.*;
import RadVeda.Collaboration.exception.InvalidMessageRecipientException;
import RadVeda.Collaboration.exception.UnableToFetchRecipientDetailsException;
import RadVeda.Collaboration.exception.UnableToFetchTestDetailsException;
import RadVeda.Collaboration.exception.UnauthorisedUserException;
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
    private static String delimiter = ":_:";
    private final GroupMessageRepository groupMessageRepository;
    private final PrivateMessageRepository privateMessageRepository;
    private final MessageVisibilityRepository messageVisibilityRepository;
    private final NotifiabilityRepository notifiabilityRepository;


    @Override
    public String setPrivateMessageNotifiabilityToTrueForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {
        String notifiabilityType = "PRIVATE";
        String notificationRecipientType = currentUser.getType();
        Long notificationRecipientId = currentUser.getId();
        String notificationSenderType = userType;
        Long notificationSenderId = userId;
        boolean notifiable = true;

        int numRowsUpdated = notifiabilityRepository.updateIfExists(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        if(numRowsUpdated == 0) {
            notifiabilityRepository.insertEntry(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        }

        return "Notifiability info set successfully!";
    }

    @Override
    public String setPrivateMessageNotifiabilityToFalseForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {
        String notifiabilityType = "PRIVATE";
        String notificationRecipientType = currentUser.getType();
        Long notificationRecipientId = currentUser.getId();
        String notificationSenderType = userType;
        Long notificationSenderId = userId;
        boolean notifiable = false;

        int numRowsUpdated = notifiabilityRepository.updateIfExists(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        if(numRowsUpdated == 0) {
            notifiabilityRepository.insertEntry(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        }

        return "Notifiability info set successfully!";
    }

    @Override
    public String setGroupMessageNotifiabilityToTrueForTest(Long testId, User currentUser)
    {
        String notifiabilityType = "GROUP";
        String notificationRecipientType = currentUser.getType();
        Long notificationRecipientId = currentUser.getId();
        String notificationSenderType = null;
        Long notificationSenderId = null;
        boolean notifiable = true;

        int numRowsUpdated = notifiabilityRepository.updateIfExists(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        if(numRowsUpdated == 0) {
            notifiabilityRepository.insertEntry(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        }

        return "Notifiability info set successfully!";
    }

    @Override
    public String setGroupMessageNotifiabilityToFalseForTest(Long testId, User currentUser)
    {
        String notifiabilityType = "GROUP";
        String notificationRecipientType = currentUser.getType();
        Long notificationRecipientId = currentUser.getId();
        String notificationSenderType = null;
        Long notificationSenderId = null;
        boolean notifiable = false;

        int numRowsUpdated = notifiabilityRepository.updateIfExists(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        if(numRowsUpdated == 0) {
            notifiabilityRepository.insertEntry(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId, notifiable);
        }

        return "Notifiability info set successfully!";
    }

    @Override
    public String sendGroupMessage(GroupMessageRequest request, User currentUser, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        if(!Objects.equals(currentUser.getType(), "RADIOLOGIST") && !Objects.equals(currentUser.getType(), "DOCTOR"))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        Long testId = request.testId();
        String text = request.text();
        String senderType = currentUser.getType();
        Long senderId = currentUser.getId();
        String senderFirstName = currentUser.getFirstName();
        String senderLastName = currentUser.getLastName();
        String referenceMessageType = request.referenceMessageType();
        Long referenceMessageId = request.referenceMessageId();

        GroupMessage groupMessage = new GroupMessage();
        groupMessage.setTestId(testId);
        groupMessage.setText(text);
        groupMessage.setSenderType(senderType);
        groupMessage.setSenderId(senderId);
        groupMessage.setSenderFirstName(senderFirstName);
        groupMessage.setSenderLastName(senderLastName);
        groupMessage.setReferenceMessageType(referenceMessageType);
        groupMessage.setReferenceMessageId(referenceMessageId);
        groupMessage = groupMessageRepository.save(groupMessage);

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
            groupMessageRepository.delete(groupMessage);
            throw new UnableToFetchTestDetailsException("Error while retrieving people involved for test!");
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
                groupMessageRepository.delete(groupMessage);
                throw new UnableToFetchTestDetailsException("JSON parsing exception!");
            }
        }
        else
        {
            groupMessageRepository.delete(groupMessage);
            throw new UnableToFetchTestDetailsException("Error while retrieving people involved for test!");
        }

        // Preparing the request object for sending to the notification management service
        headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        boolean notificationFailure = false;

        for(int i=0;i<userTypes.size();i++)
        {
            if(Objects.equals(userTypes.get(i), senderType) && Objects.equals(userIds.get(i), senderId))
            {
                continue;
            }
            if(Objects.equals(userTypes.get(i), "RADIOLOGIST") || Objects.equals(userTypes.get(i), "DOCTOR"))
            {
                String notifiabilityType = "GROUP";
                String notificationRecipientType = userTypes.get(i);
                Long notificationRecipientId = userIds.get(i);
                String notificationSenderType = null;
                Long notificationSenderId = null;

                Optional<Notifiability> optionalNotifiability = notifiabilityRepository.findByNotifiabilityTypeAndTestIdAndNotificationRecipientTypeAndNotificationRecipientIdAndNotificationSenderTypeAndNotificationSenderId(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId);

                if(optionalNotifiability.isEmpty() || optionalNotifiability.get().isNotifiable())
                {
                    // Constructing the request payload manually as JSON
                    String message = senderType + delimiter + senderId + delimiter + text; //Format: senderType<delimiter>senderId<delimiter>text
                    String requestBody = "{" +
                    "\"message\": \"" + message + "\"," +
                    "\"recipientType\": \"" + notificationRecipientType + "\"," +
                    "\"recipientId\": " + notificationRecipientId + "," +
                    "\"chatType\": " + "\"GROUP\"" + "," +
                    "\"chatId\": " + groupMessage.getId() +
                    "}";

                    // Setting up RestTemplate
                    restTemplate = new RestTemplate();

                    // Setting the URL for the appropriate API end point of the notification management service
                    url = "http://localhost:9193/notifications/sendChatNotification";

                    // Setting the request entity
                    HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

                    // Sending the POST request
                    try {
                        responseEntity = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
                    } catch (RuntimeException e) { //VERIFY_EXCEPTION
                        notificationFailure = true;
                        break;
                    }

                    if (!responseEntity.getStatusCode().is2xxSuccessful()) {
                        notificationFailure = true;
                        break;
                    }
                }
            }
        }

        if(!notificationFailure)
        {
            //Setting message visibility info:
            for(int i=0;i<userTypes.size();i++)
            {
                if (Objects.equals(userTypes.get(i), "RADIOLOGIST") || Objects.equals(userTypes.get(i), "DOCTOR"))
                {
                    messageVisibilityRepository.insertEntry("GROUP", groupMessage.getId(), userTypes.get(i), userIds.get(i), true);
                }
            }

            return "Group message sent successfully!";
        }
        groupMessageRepository.delete(groupMessage);
        return "Failed to send group message!";

    }

    @Override
    public String sendPrivateMessage(PrivateMessageRequest request, User currentUser, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        if(!Objects.equals(currentUser.getType(), "PATIENT") && !Objects.equals(currentUser.getType(), "DOCTOR") && !Objects.equals(currentUser.getType(), "RADIOLOGIST"))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!Objects.equals(request.recipientType(), "PATIENT") && !Objects.equals(request.recipientType(), "DOCTOR") && !Objects.equals(request.recipientType(), "RADIOLOGIST"))
        {
            throw new InvalidMessageRecipientException("Invalid private message recipient!");
        }

        Long testId = request.testId();
        String text = request.text();
        String senderType = currentUser.getType();
        Long senderId = currentUser.getId();
        String senderFirstName = currentUser.getFirstName();
        String senderLastName = currentUser.getLastName();
        String referenceMessageType = request.referenceMessageType();
        Long referenceMessageId = request.referenceMessageId();
        String recipientType = request.recipientType();
        Long recipientId = request.recipientId();


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
        urlMap.put("ADMIN", "http://localhost:9191/admins/getFirstAndLastNamesForAdminId/"+recipientId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/getFirstAndLastNamesForDoctorId/"+recipientId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/getFirstAndLastNamesForLabStaffId/"+recipientId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/getFirstAndLastNamesForPatientId/"+recipientId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/getFirstAndLastNamesForRadiologistId/"+recipientId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/getFirstAndLastNamesForSuperAdminId/"+recipientId);

        String url = urlMap.get(recipientType);

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (RuntimeException e){ //VERIFY_EXCEPTION
            throw new UnableToFetchRecipientDetailsException("Error while fetching first and last names for message recipient!");
        }

        String recipientFirstName;
        String recipientLastName;

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Extracting the response body
            String responseBody = responseEntity.getBody();

            if(responseBody == null)
            {
                throw new UnableToFetchRecipientDetailsException("Error while extracting first and last names for message recipient!");
            }

            // Splitting the responseBody string using the delimiter
            String[] parts = responseBody.split(delimiter);

            // Checking if the split produced exactly two parts
            if (parts.length == 2)
            {
                recipientFirstName = parts[0];
                recipientLastName = parts[1];
            }
            else
            {
                throw new UnableToFetchRecipientDetailsException("Error while extracting first and last names for message recipient!");
            }
        }
        else
        {
            throw new UnableToFetchRecipientDetailsException("Error while fetching first and last names for message recipient!");
        }


        PrivateMessage privateMessage = new PrivateMessage();
        privateMessage.setTestId(testId);
        privateMessage.setText(text);
        privateMessage.setSenderType(senderType);
        privateMessage.setSenderId(senderId);
        privateMessage.setSenderFirstName(senderFirstName);
        privateMessage.setSenderLastName(senderLastName);
        privateMessage.setReferenceMessageType(referenceMessageType);
        privateMessage.setReferenceMessageId(referenceMessageId);
        privateMessage.setRecipientType(recipientType);
        privateMessage.setRecipientId(recipientId);
        privateMessage.setRecipientFirstName(recipientFirstName);
        privateMessage.setRecipientLastName(recipientLastName);
        privateMessage = privateMessageRepository.save(privateMessage);

        // Preparing the request object for sending to the notification management service
        headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        boolean notificationFailure = false;

        String notifiabilityType = "PRIVATE";
        String notificationRecipientType = recipientType;
        Long notificationRecipientId = recipientId;
        String notificationSenderType = senderType;
        Long notificationSenderId = senderId;

        Optional<Notifiability> optionalNotifiability = notifiabilityRepository.findByNotifiabilityTypeAndTestIdAndNotificationRecipientTypeAndNotificationRecipientIdAndNotificationSenderTypeAndNotificationSenderId(notifiabilityType, testId, notificationRecipientType, notificationRecipientId, notificationSenderType, notificationSenderId);

        if(optionalNotifiability.isEmpty() || optionalNotifiability.get().isNotifiable())
        {
            // Constructing the request payload manually as JSON
            String message = senderType + delimiter + senderId + delimiter + text; //Format: senderType<delimiter>senderId<delimiter>text
            String requestBody = "{" +
                    "\"message\": \"" + message + "\"," +
                    "\"recipientType\": \"" + notificationRecipientType + "\"," +
                    "\"recipientId\": " + notificationRecipientId + "," +
                    "\"chatType\": " + "\"PRIVATE\"" + "," +
                    "\"chatId\": " + privateMessage.getId() +
                    "}";

            // Setting up RestTemplate
            restTemplate = new RestTemplate();

            // Setting the URL for the appropriate API end point of the notification management service
            url = "http://localhost:9193/notifications/sendChatNotification";

            // Setting the request entity
            HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

            // Sending the POST request
            try {
                responseEntity = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
            } catch (RuntimeException e) { //VERIFY_EXCEPTION
                notificationFailure = true;
            }

            if (!responseEntity.getStatusCode().is2xxSuccessful()) {
                notificationFailure = true;
            }
        }


        if(!notificationFailure)
        {
            //Setting message visibility info:
            messageVisibilityRepository.insertEntry("PRIVATE", privateMessage.getId(), senderType, senderId, true);
            messageVisibilityRepository.insertEntry("PRIVATE", privateMessage.getId(), recipientType, recipientId, true);

            return "Private message sent successfully!";
        }
        privateMessageRepository.delete(privateMessage);
        return "Failed to send private message!";

    }

    @Override
    public List<GroupMessage> getGroupMessagesForTest(Long testId, User currentUser)
    {
        if(!Objects.equals(currentUser.getType(), "RADIOLOGIST") && !Objects.equals(currentUser.getType(), "DOCTOR"))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        List<GroupMessage> visibleGroupMessages = new ArrayList<>();
        List<GroupMessage> groupMessages = groupMessageRepository.findByTestId(testId);
        for (GroupMessage groupMessage : groupMessages)
        {
            Optional<MessageVisibility> optionalMessageVisibility = messageVisibilityRepository.findByMessageTypeAndMessageIdAndUserTypeAndUserId("GROUP", groupMessage.getId(), currentUser.getType(), currentUser.getId());
            if (optionalMessageVisibility.isPresent() && optionalMessageVisibility.get().isVisible())
            {
                visibleGroupMessages.add(groupMessage);
            }
        }

        return visibleGroupMessages;

    }

    @Override
    public List<GroupMessage> getSentGroupMessagesForTest(Long testId, User currentUser)
    {
        if(!Objects.equals(currentUser.getType(), "RADIOLOGIST") && !Objects.equals(currentUser.getType(), "DOCTOR"))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        List<GroupMessage> visibleSentGroupMessages = new ArrayList<>();
        List<GroupMessage> groupMessages = groupMessageRepository.findByTestId(testId);
        for (GroupMessage groupMessage : groupMessages)
        {
            Optional<MessageVisibility> optionalMessageVisibility = messageVisibilityRepository.findByMessageTypeAndMessageIdAndUserTypeAndUserId("GROUP", groupMessage.getId(), currentUser.getType(), currentUser.getId());
            if (optionalMessageVisibility.isPresent() && optionalMessageVisibility.get().isVisible() && Objects.equals(groupMessage.getSenderType(), currentUser.getType()) && Objects.equals(groupMessage.getSenderId(), currentUser.getId()))
            {
                visibleSentGroupMessages.add(groupMessage);
            }
        }

        return visibleSentGroupMessages;

    }

    @Override
    public List<User> getDirectlyContactedPeopleForTest(Long testId, User currentUser)
    {
        //TODO
        return null;
    }

    @Override
    public List<PrivateMessage> getPrivateConversationForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {
        List<PrivateMessage> currentUserToOtherEndUserPrivateMessages = privateMessageRepository.findByTestIdAndSenderTypeAndSenderIdAndRecipientTypeAndRecipientId(testId, currentUser.getType(), currentUser.getId(), userType, userId);
        List<PrivateMessage> otherEndUserToCurrentUserPrivateMessages = privateMessageRepository.findByTestIdAndSenderTypeAndSenderIdAndRecipientTypeAndRecipientId(testId, userType, userId, currentUser.getType(), currentUser.getId());

        List<PrivateMessage> conversation = new ArrayList<>();
        conversation.addAll(currentUserToOtherEndUserPrivateMessages);
        conversation.addAll(otherEndUserToCurrentUserPrivateMessages);

        return conversation;
    }

    @Override
    public boolean validateMessage(String messageType, Long messageId)
    {
        if(Objects.equals(messageType, "GROUP"))
        {
            Optional<GroupMessage> optionalGroupMessage = groupMessageRepository.findById(messageId);
            return optionalGroupMessage.isPresent();
        }
        else //PRIVATE
        {
            Optional<PrivateMessage> optionalPrivateMessage = privateMessageRepository.findById(messageId);
            return optionalPrivateMessage.isPresent();
        }
    }

    @Override
    public String clearGroupMessagesForTest(Long testId, User currentUser)
    {
        //TODO
        return null;
    }

    @Override
    public String clearPrivateMessagesForTestAndUser(Long testId, String userType, Long userId, User currentUser)
    {
        //TODO
        return null;
    }

    @Override
    public String deleteMessageForCurrentUserForTest(Long testId, String messageType, Long messageId, User currentUser)
    {
        //TODO
        return null;
    }

    @Override
    public String deleteMessageForEveryoneForTest(Long testId, String messageType, Long messageId, User currentUser)
    {
        //TODO
        return null;
    }

    @Override
    public String cleanByDeletedUser(String userType, Long userId)
    {
        //TODO
        return null;
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
    {   // If there is no reference message then pass referenceMessageType as "NONE"... that's a valid case
        //Reference message should be a valid message first of all... done
        //Reference message type should be same as the current message type... done
        //Reference message should be from the same test.. check test id... done
        //If type is private message:
            //sortByTypeAndId([rm_sender, rm_recipient]) should be same as sortByTypeAndId([m_sender, m_recipient])... done

        if(Objects.equals(referenceMessageType, "NONE"))
        {
            return true;
        }

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