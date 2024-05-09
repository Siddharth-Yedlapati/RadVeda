package RadVeda.ImageManagement.transitEncryption;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/encryptor")
public class EncryptionController {

    private final EncryptionService encryptionService;

    @PostMapping("/sharedKey/{service}")
    public String receiveSharedKey(@RequestBody byte[] sharedKey, @PathVariable String service) {

        return encryptionService.storeSharedKey(service, sharedKey);

    }
}
