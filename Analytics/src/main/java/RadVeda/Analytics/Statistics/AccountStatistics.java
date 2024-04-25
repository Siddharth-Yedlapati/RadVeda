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
    private String accountOperationType; //"REGISTRATION" OR "MODIFICATION" OR "DELETION"
    private String temporalScope; //"TODAY" or "SO_FAR"
    private String clientType; //"ADMIN" or "SUPERADMIN"
    private Long clientId;
}

// Used to display statistics of the following format:
// <accountHolderType>s registered <temporalScope>: <count>
// <accountHolderType>s who have modified their account <temporalScope>: <count>
// <accountHolderType>s who have deleted their account <temporalScope>: <count>
