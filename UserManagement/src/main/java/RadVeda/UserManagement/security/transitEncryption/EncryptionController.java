package RadVeda.UserManagement.security.transitEncryption;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;

@RestController
@RequiredArgsConstructor
@RequestMapping("/encryptor")
public class EncryptionController {

    private final EncryptionService encryptionService;

    @PostMapping("/sendPublicKey/{service}")
    public void sendPublicKey(@RequestBody byte[] publicKey, @PathVariable String service) {
        int res = encryptionService.addPublicKey(service, publicKey);
        System.out.println(res);
        if(res == 1) {
            encryptionService.generateSharedKeys();
        }
    }
}
