package RadVeda.Collaboration.Messages;

import RadVeda.Collaboration.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Collaboration.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.Convert;
import jakarta.persistence.MappedSuperclass;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
public abstract class Message {

    @Convert(converter = EncryptedStringConverter.class)
    private String sentAtDate;

    @Convert(converter = EncryptedStringConverter.class)
    private String sentAtTime;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testId;

    @Convert(converter = EncryptedStringConverter.class)
    private String text;

    @Convert(converter = EncryptedStringConverter.class)
    private String senderType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long senderId;

    @Convert(converter = EncryptedStringConverter.class)
    private String senderFirstName;

    @Convert(converter = EncryptedStringConverter.class)
    private String senderLastName;

    @Convert(converter = EncryptedStringConverter.class)
    private String referenceMessageType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long referenceMessageId;

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        this.sentAtDate = now.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        this.sentAtTime = now.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
    }
}