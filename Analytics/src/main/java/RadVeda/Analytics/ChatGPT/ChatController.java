package RadVeda.Analytics.ChatGPT;

import RadVeda.Analytics.User;
import RadVeda.Analytics.exception.UnauthorisedUserException;
import RadVeda.Analytics.transitEncryption.EncryptionManager;
import RadVeda.Analytics.transitEncryption.EncryptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chatgpt/{service}")
public class ChatController {

    private final ChatService chatService;
    private final EncryptionRepository encryptionRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/chat")
    public String chat(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String service, @RequestParam String prompt)
    {
        User currentUser = chatService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        try {
            prompt = encryptionManager.decryptMessage(prompt);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Failed\n"+e.getMessage();
        }

        return chatService.chat(prompt);
    }
}