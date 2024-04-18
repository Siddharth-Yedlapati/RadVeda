package RadVeda.Collaboration;

import RadVeda.Collaboration.Messages.GroupMessage;
import RadVeda.Collaboration.Messages.GroupMessageRequest;
import RadVeda.Collaboration.Messages.PrivateMessage;
import RadVeda.Collaboration.Messages.PrivateMessageRequest;

import java.util.List;

public interface CollaborationServiceInterface {
    String setPrivateMessageNotifiabilityToTrueForTestAndUser(Long testId, String userType, Long userId, User currentUser);
    String setPrivateMessageNotifiabilityToFalseForTestAndUser(Long testId, String userType, Long userId, User currentUser);
    String setGroupMessageNotifiabilityToTrueForTest(Long testId, User currentUser);
    String setGroupMessageNotifiabilityToFalseForTest(Long testId, User currentUser);
    String sendGroupMessage(GroupMessageRequest request, User currentUser, String authorizationHeader);
    String sendPrivateMessage(PrivateMessageRequest request, User currentUser, String authorizationHeader);
    List<GroupMessage> getGroupMessagesForTest(Long testId, User currentUser);
    List<GroupMessage> getSentGroupMessagesForTest(Long testId, User currentUser);
    List<User> getDirectlyContactedPeopleForTest(Long testId, User currentUser);
    List<PrivateMessage> getPrivateConversationForTestAndUser(Long testId, String userType, Long userId, User currentUser);
    boolean validateMessage(String messageType, Long messageId);
    String clearGroupMessagesForTest(Long testId, User currentUser);
    String clearPrivateMessagesForTestAndUser(Long testId, String userType, Long userId, User currentUser);
    String deleteMessageForCurrentUserForTest(Long testId, String messageType, Long messageId, User currentUser);
    String deleteMessageForEveryoneForTest(Long testId, String messageType, Long messageId, User currentUser);
    String cleanByDeletedUser(String userType, Long userId);
    User authenticate(String authorizationHeader);
    boolean isUserValid(String userType, Long userId, String authorizationHeader);
    boolean performTestBasedSanityChecks(Long testId, String currentUserType, Long currentUserId, String otherEndUserType, Long otherEndUserId, String authorizationHeader);
    boolean isReferenceMessageValid(User currentMessageSender, User currentMessageRecipient, Long currentMessageTestId, String currentMessageType, String referenceMessageType, Long referenceMessageId);
}
