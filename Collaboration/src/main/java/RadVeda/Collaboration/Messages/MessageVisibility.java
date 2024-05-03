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
public class MessageVisibility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String messageType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long messageId;

    @Convert(converter = EncryptedStringConverter.class)
    private String userType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long userId;

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean visible;
}
