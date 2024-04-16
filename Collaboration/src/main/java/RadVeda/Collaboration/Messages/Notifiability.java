package RadVeda.Collaboration.Messages;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    private String notifiabilityType; //Either "GROUP" or "PRIVATE"
    private Long testId;
    private String notificationRecipientType;
    private Long notificationRecipientId;
    private String notificationSenderType; //Set to null if notifiabilityType is "GROUP"
    private Long notificationSenderId; //Set to null if notifiabilityType is "GROUP"
    private boolean notifiable;
}
