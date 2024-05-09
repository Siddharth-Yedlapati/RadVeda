package RadVeda.Patient.transitEncryption;

import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.util.Base64;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@EnableScheduling
public class EncryptionService {

    private KeyPair patient;
    private final EncryptionRepository encryptionRepository;

    @Scheduled(fixedDelay = 2*60*1000)
    public void generateKeyPair() {

        try {
            KeyPairGenerator gen = KeyPairGenerator.getInstance("RSA");
            gen.initialize(2048);

            patient = gen.generateKeyPair();

            byte[] keyBytes = patient.getPublic().getEncoded();

//            String base64encodedKey = Base64.

            HttpHeaders headers = new HttpHeaders();
            RestTemplate restTemplate = new RestTemplate();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Set content type as octet-stream

            HttpEntity<byte[]> requestEntity = new HttpEntity<>(keyBytes, headers);

            ResponseEntity<String> res  = restTemplate.exchange("http://localhost:9191/encryptor/sendPublicKey/patient",
                    HttpMethod.POST, requestEntity, String.class);

        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }


    public String storeSharedKey(String service, byte[] keyBytes) {
        try {
            String sharedKey = decrypt(keyBytes, patient.getPrivate());

            Optional<SharedKeys> sharedKeysRec = encryptionRepository.findByServiceName(service);
            SharedKeys sharedKeys = new SharedKeys();
            if(sharedKeysRec.isPresent()) sharedKeys = sharedKeysRec.get();
            else sharedKeys.setServiceName(service);

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

    public String encryptMessage(String message, String service) throws Exception {

        Optional<SharedKeys> sharedKeysRec = encryptionRepository.findByServiceName(service);
        SharedKeys sharedKeys = new SharedKeys();
        if(sharedKeysRec.isPresent()) sharedKeys = sharedKeysRec.get();
        else throw new Exception("fail");

        String sharedKey = sharedKeys.getSharedKey();
        sharedKey = padKey(sharedKey);

        SecretKeySpec secretKeySpec = new SecretKeySpec(sharedKey.getBytes(), "AES");
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);
        byte[] encryptedBytes = cipher.doFinal(message.getBytes());
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public String decryptMessage(String message, String service) throws Exception {

        Optional<SharedKeys> sharedKeysRec = encryptionRepository.findByServiceName(service);
        SharedKeys sharedKeys = new SharedKeys();
        if(sharedKeysRec.isPresent()) sharedKeys = sharedKeysRec.get();
        else throw new Exception("fail");

        String sharedKey = sharedKeys.getSharedKey();
        sharedKey = padKey(sharedKey);

        SecretKeySpec secretKeySpec = new SecretKeySpec(sharedKey.getBytes(), "AES");
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);
        byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(message));
        return new String(decryptedBytes);
    }

    public static String padKey(String key) {
        int keyLength = key.length();
        if (keyLength < 16) {
            // Pad the key to make it 16 bytes (128 bits)
            StringBuilder paddedKey = new StringBuilder(key);
            while (paddedKey.length() < 16) {
                paddedKey.append('0');
            }
            return paddedKey.toString();
        } else if (keyLength < 24) {
            // Pad the key to make it 24 bytes (192 bits)
            StringBuilder paddedKey = new StringBuilder(key);
            while (paddedKey.length() < 24) {
                paddedKey.append('0');
            }
            return paddedKey.toString();
        } else if (keyLength < 32) {
            // Pad the key to make it 32 bytes (256 bits)
            StringBuilder paddedKey = new StringBuilder(key);
            while (paddedKey.length() < 32) {
                paddedKey.append('0');
            }
            return paddedKey.toString();
        }
        // Key length is already valid
        return key;
    }


}
