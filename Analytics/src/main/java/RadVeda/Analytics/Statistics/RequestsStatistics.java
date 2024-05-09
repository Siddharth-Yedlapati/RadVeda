package RadVeda.Analytics.Statistics;

import RadVeda.Analytics.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Analytics.StorageEncryption.Converters.EncryptedStringConverter;
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
public class RequestsStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long count;

    @Convert(converter = EncryptedStringConverter.class)
    private String requesterType;

    @Convert(converter = EncryptedStringConverter.class)
    private String requestType; //"SIGNUP" or "ACCOUNT_MODIFICATION" or "ACCOUNT_DELETION"

    @Convert(converter = EncryptedStringConverter.class)
    private String temporalScope; //"TODAY" or "SO_FAR"

    @Convert(converter = EncryptedStringConverter.class)
    private String clientType; //"ADMIN" or "SUPERADMIN"

    @Convert(converter = EncryptedLongConverter.class)
    private Long clientId; //If client is SUPERADMIN then clientId would be ignored
}

// Used to display statistics of the following format:
// Pending <requestType> requests made <temporalScope> by <requesterType>s: <count>
//FOR ADMIN-> DOC, RAD, LABSTAFF
//FOR SUPERADMIN -> DOC, RAD, LABSTAFF, ADMIN