package RadVeda.NotificationManagement.Notifications;

import RadVeda.NotificationManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.NotificationManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.Convert;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
public abstract class Notification {

    @Convert(converter = EncryptedStringConverter.class)
    private String message;

    @Convert(converter = EncryptedStringConverter.class)
    private String recipientType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long recipientId;
}
