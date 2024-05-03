package RadVeda.Collaboration.Messages;

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
public class PrivateMessage extends Message{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private static String messageType = "PRIVATE";

    @Convert(converter = EncryptedStringConverter.class)
    private String recipientType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long recipientId;

    @Convert(converter = EncryptedStringConverter.class)
    private String recipientFirstName;

    @Convert(converter = EncryptedStringConverter.class)
    private String recipientLastName;
}
