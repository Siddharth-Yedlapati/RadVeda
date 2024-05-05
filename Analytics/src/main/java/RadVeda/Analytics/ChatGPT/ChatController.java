package RadVeda.Analytics.ChatGPT;

import RadVeda.Analytics.User;
import RadVeda.Analytics.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chatgpt")
public class ChatController {

    private final ChatService chatService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/chat")
    public String chat(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestParam String prompt)
    {
        User currentUser = chatService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return chatService.chat(prompt);
    }
}