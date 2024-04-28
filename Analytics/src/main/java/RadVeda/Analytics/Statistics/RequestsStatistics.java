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
public class RequestsStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long count;
    private String requesterType;
    private String requestType; //"SIGNUP" or "ACCOUNT_MODIFICATION" or "ACCOUNT_DELETION"
    private String temporalScope; //"TODAY" or "SO_FAR"
    private String clientType; //"ADMIN" or "SUPERADMIN"
    private Long clientId; //If client is SUPERADMIN then clientId would be ignored
}

// Used to display statistics of the following format:
// Pending <requestType> requests made <temporalScope> by <requesterType>s: <count>