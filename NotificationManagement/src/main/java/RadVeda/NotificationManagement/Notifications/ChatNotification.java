package RadVeda.NotificationManagement.Notifications;

import RadVeda.NotificationManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.NotificationManagement.StorageEncryption.Converters.EncryptedStringConverter;
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
public class ChatNotification extends Notification{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String chatType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long chatId;
}
