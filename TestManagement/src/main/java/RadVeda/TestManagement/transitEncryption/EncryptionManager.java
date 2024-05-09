package RadVeda.TestManagement.transitEncryption;


import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Optional;

public class EncryptionManager {

    private String service;
    private EncryptionRepository encryptionRepository;

    public EncryptionManager(String service, EncryptionRepository encryptionRepository) {
        this.service = service;
        this.encryptionRepository = encryptionRepository;
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
