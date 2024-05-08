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
public class AccountStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long count;

    @Convert(converter = EncryptedStringConverter.class)
    private String accountHolderType;

    @Convert(converter = EncryptedStringConverter.class)
    private String accountOperationType; //"REGISTRATION" OR "MODIFICATION" OR "DELETION" OR "LOGIN" OR "LOGOUT"

    @Convert(converter = EncryptedStringConverter.class)
    private String temporalScope; //"TODAY" or "SO_FAR"

    @Convert(converter = EncryptedStringConverter.class)
    private String clientType; //"ADMIN" or "SUPERADMIN"

    @Convert(converter = EncryptedLongConverter.class)
    private Long clientId; //If client is SUPERADMIN then clientId would be ignored
}

// Used to display statistics of the following format:
// <accountHolderType>s registered <temporalScope>: <count>
// <accountHolderType>s who have modified their account <temporalScope>: <count>
// <accountHolderType>s who have deleted their account <temporalScope>: <count>
// Number of online <accountHolderType>s: <login-count-so-far> - <logout-count-so-far>

//ACCOUNTHOLDER TYPE For ADMIN -> DOCTOR, RADIOLOGIST, LABSTAFF, PATIENT
//And for superadmin -> DOCTOR, RADIOLOGIST, LABSTAFF, PATIENT, ADMIN