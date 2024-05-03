package RadVeda.Collaboration.StorageEncryption;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class EncryptionUtility {

    private static final String ALGORITHM = "AES";
    private static final SecretKey SECRET_KEY;
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;
    private static final DateTimeFormatter DATETIME_FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    static
    {
        try
        {
            String key = System.getenv("STORAGE_ENCRYPTION_SECRET_KEY");
            if(key == null || key.length() != 16)
            { // Ensure it's a valid 16-byte key
                throw new IllegalStateException("Storage encryption secret key is not properly configured!");
            }
            SECRET_KEY = new SecretKeySpec(key.getBytes(), ALGORITHM); // Create secret key from bytes
        }
        catch(Exception e)
        {
            throw new RuntimeException("Error initializing encryption utility", e);
        }
    }

    public static String encrypt(String plainText) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, SECRET_KEY);
            byte[] encrypted = cipher.doFinal(plainText.getBytes());
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            throw new RuntimeException("Error encrypting data", e);
        }
    }

    public static String decrypt(String encryptedText) {
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, SECRET_KEY);
            byte[] decoded = Base64.getDecoder().decode(encryptedText);
            byte[] decrypted = cipher.doFinal(decoded);
            return new String(decrypted);
        } catch (Exception e) {
            throw new RuntimeException("Error decrypting data", e);
        }
    }

    public static String encrypt(Long value) {
        return encrypt(value.toString());
    }

    public static Long decryptLong(String encryptedText) {
        return Long.parseLong(decrypt(encryptedText));
    }

    public static String encrypt(Boolean value) {
        return encrypt(value.toString());
    }

    public static Boolean decryptBoolean(String encryptedText) {
        return Boolean.parseBoolean(decrypt(encryptedText));
    }

    public static String encrypt(LocalDateTime value) {
        return encrypt(value.format(DATETIME_FORMATTER));
    }

    public static LocalDateTime decryptLocalDateTime(String encryptedText) {
        return LocalDateTime.parse(decrypt(encryptedText), DATETIME_FORMATTER);
    }

    public static String encrypt(LocalDate value) {
        return encrypt(value.format(DATE_FORMATTER));
    }

    public static LocalDate decryptLocalDate(String encryptedText) {
        return LocalDate.parse(decrypt(encryptedText), DATE_FORMATTER);
    }
}
