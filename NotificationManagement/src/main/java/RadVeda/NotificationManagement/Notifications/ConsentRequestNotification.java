package RadVeda.NotificationManagement.Notifications;

import RadVeda.NotificationManagement.StorageEncryption.Converters.EncryptedLongConverter;
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
public class ConsentRequestNotification extends Notification{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consentRequestId;
}
