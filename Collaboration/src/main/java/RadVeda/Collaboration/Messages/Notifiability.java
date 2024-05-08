package RadVeda.Collaboration.Messages;

import RadVeda.Collaboration.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.Collaboration.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Collaboration.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Notifiability {

    // Used to decide whether to send chat notifications to a user.

    // notifiable flag is set to false when chat window is open...
    // and it's set back to true when the chat window is closed

    // A user is notifiable, by another user, or the main test group when:
    // 1) There is no corresponding entry in the Notifiability table
    //                            OR
    // 2) The notifiable flag in the corresponding entry in the Notifiability table
    //    is set to true.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String notifiabilityType; //Either "GROUP" or "PRIVATE"

    @Convert(converter = EncryptedLongConverter.class)
    private Long testId;

    @Convert(converter = EncryptedStringConverter.class)
    private String notificationRecipientType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long notificationRecipientId;

    @Convert(converter = EncryptedStringConverter.class)
    private String notificationSenderType; //Set to null if notifiabilityType is "GROUP"

    @Convert(converter = EncryptedLongConverter.class)
    private Long notificationSenderId; //Set to null if notifiabilityType is "GROUP"

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean notifiable;
}
