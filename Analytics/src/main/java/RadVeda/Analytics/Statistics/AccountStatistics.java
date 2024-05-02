package RadVeda.Analytics.Statistics;

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
public class AccountStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long count;
    private String accountHolderType;
    private String accountOperationType; //"REGISTRATION" OR "MODIFICATION" OR "DELETION" OR "LOGIN" OR "LOGOUT"
    private String temporalScope; //"TODAY" or "SO_FAR"
    private String clientType; //"ADMIN" or "SUPERADMIN"
    private Long clientId; //If client is SUPERADMIN then clientId would be ignored
}

// Used to display statistics of the following format:
// <accountHolderType>s registered <temporalScope>: <count>
// <accountHolderType>s who have modified their account <temporalScope>: <count>
// <accountHolderType>s who have deleted their account <temporalScope>: <count>
// Number of online <accountHolderType>s: <login-count-so-far> - <logout-count-so-far>