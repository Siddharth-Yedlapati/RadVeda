package RadVeda.Analytics.Gemini;

import RadVeda.Analytics.transitEncryption.EncryptionManager;
import RadVeda.Analytics.transitEncryption.EncryptionRepository;
import com.google.cloud.vertexai.api.Content;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/gemini-chat/{service}")
@RequiredArgsConstructor
public class GeminiChatController {

    private final ChatSession chatSession;
    private  final EncryptionRepository encryptionRepository;

    @GetMapping("/{text}")
    public String chat(@PathVariable String service, @PathVariable String text) throws IOException {
        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        try {
            text = encryptionManager.decryptMessage(text);
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Failed\n"+e.getMessage();
        }

        GenerateContentResponse generateContentResponse = this.chatSession.sendMessage(text);
        return ResponseHandler.getText(generateContentResponse);
    }

    @GetMapping("/history/{text}")
    public List<String> getChatHistory(@PathVariable String service, @PathVariable String text) throws IOException {
        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        try {
            text = encryptionManager.decryptMessage(text);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }

        GenerateContentResponse generateContentResponse = this.chatSession.sendMessage(text);
        List<Content> history = this.chatSession.getHistory();
        return history.stream().flatMap(h -> h.getPartsList().stream()).map(part -> part.getText()).toList();
    }
}
