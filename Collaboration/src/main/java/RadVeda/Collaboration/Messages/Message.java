package RadVeda.Collaboration.Messages;

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
    private String sentAtDate;
    private String sentAtTime;

    private Long testId;
    private String text;
    private String senderType;
    private Long senderId;
    private String referenceMessageType;
    private Long referenceMessageId;

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        this.sentAtDate = now.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        this.sentAtTime = now.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
    }
}