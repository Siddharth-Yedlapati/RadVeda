package RadVeda.Doctor.transitEncryption;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.crypto.Cipher;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class EncryptionService {

    private KeyPair doctor;
    private final EncryptionRepository encryptionRepository;

    @Scheduled(fixedDelay = 2*60*1000)
    public void generateKeyPair() {

        System.out.println("h");

        try {
            KeyPairGenerator gen = KeyPairGenerator.getInstance("RSA");
            gen.initialize(2048);

            doctor = gen.generateKeyPair();

            byte[] keyBytes = doctor.getPublic().getEncoded();

//            String base64encodedKey = Base64.

            HttpHeaders headers = new HttpHeaders();
            RestTemplate restTemplate = new RestTemplate();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Set content type as octet-stream

            HttpEntity<byte[]> requestEntity = new HttpEntity<>(keyBytes, headers);

            ResponseEntity<String> res  = restTemplate.exchange("http://localhost:9191/encryptor/sendPublicKey/doctor",
                    HttpMethod.POST, requestEntity, String.class);

        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }


    public String storeSharedKey(String service, byte[] keyBytes) {
        try {
            String sharedKey = decrypt(keyBytes, doctor.getPrivate());

            Optional<SharedKeys> sharedKeysRec = encryptionRepository.findByServiceName(service);
            SharedKeys sharedKeys = new SharedKeys();
            if(sharedKeysRec.isPresent()) sharedKeys = sharedKeysRec.get();

            sharedKeys.setSharedKey(sharedKey);
            encryptionRepository.save(sharedKeys);
            return "success";
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }
    }

    public static String decrypt(byte[] encryptedData, PrivateKey privateKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decryptedData = cipher.doFinal(encryptedData);
        return new String(decryptedData);
    }


}
