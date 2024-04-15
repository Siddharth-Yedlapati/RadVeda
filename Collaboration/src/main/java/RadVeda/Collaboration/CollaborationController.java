package RadVeda.Collaboration;

import RadVeda.Collaboration.Messages.GroupMessage;
import RadVeda.Collaboration.Messages.GroupMessageRequest;
import RadVeda.Collaboration.Messages.PrivateMessage;
import RadVeda.Collaboration.Messages.PrivateMessageRequest;
import RadVeda.Collaboration.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/collaboration")
public class CollaborationController {
    private final CollaborationService collaborationService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/sendGroupMessage")
    public String sendGroupMessage(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody GroupMessageRequest request)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.sendGroupMessage(request, currentUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/sendPrivateMessage")
    public String sendPrivateMessage(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody PrivateMessageRequest request)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.sendPrivateMessage(request, currentUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getGroupMessagesForTest/{testId}")
    public List<GroupMessage> getGroupMessagesForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.getGroupMessagesForTest(testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getSentGroupMessagesForTest/{testId}")
    public List<GroupMessage> getSentGroupMessagesForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.getSentGroupMessagesForTest(testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getDirectlyContactedPeopleForTest/{testId}")
    public List<User> getDirectlyContactedPeopleForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.getDirectlyContactedPeopleForTest(testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getPrivateConversationForTestAndUser/{testId}/{userType}/{userId}")
    public List<PrivateMessage> getPrivateConversationForTestAndUser(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId, @PathVariable String userType, @PathVariable Long userId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.getPrivateConversationForTestAndUser(testId, userType, userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/validateMessage/{messageType}/{messageId}")
    public boolean validateMessage(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String messageType, @PathVariable Long messageId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.validateMessage(messageType, messageId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/clearGroupMessagesForTest/{testId}")
    public String clearGroupMessagesForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.clearGroupMessagesForTest(testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/clearPrivateMessagesForTestAndUser/{testId}/{userType}/{userId}")
    public String clearPrivateMessagesForTestAndUser(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId, @PathVariable String userType, @PathVariable Long userId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.clearPrivateMessagesForTestAndUser(testId, userType, userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/deleteMessageForCurrentUserForTest/{testId}/{messageType}/{messageId}")
    public String deleteMessageForCurrentUserForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId, @PathVariable String messageType, @PathVariable Long messageId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.deleteMessageForCurrentUserForTest(testId, messageType, messageId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/deleteMessageForEveryoneForTest/{testId}/{messageType}/{messageId}")
    public String deleteMessageForEveryoneForTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testId, @PathVariable String messageType, @PathVariable Long messageId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.deleteMessageForEveryoneForTest(testId, messageType, messageId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("cleanByDeletedUser/{userType}/{userId}")
    public String cleanByDeletedUser(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String userType, @PathVariable Long userId)
    {
        User currentUser = collaborationService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return collaborationService.cleanByDeletedUser(userType, userId);
    }

}
