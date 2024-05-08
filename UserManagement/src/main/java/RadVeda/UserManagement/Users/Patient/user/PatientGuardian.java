package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedDateConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PatientGuardian {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String firstName;

    @Convert(converter = EncryptedStringConverter.class)
    private String middleName;

    @Convert(converter = EncryptedStringConverter.class)
    private String lastName;

    @Convert(converter = EncryptedStringConverter.class)
    private String addressL1;

    @Convert(converter = EncryptedStringConverter.class)
    private String addressL2;

    @Convert(converter = EncryptedStringConverter.class)
    private String country;

    @Convert(converter = EncryptedStringConverter.class)
    private String state;

    @Convert(converter = EncryptedStringConverter.class)
    private String city;

    @NaturalId
    @Column(unique = true, nullable = false)
    @Convert(converter = EncryptedStringConverter.class)
    private String email;

    @Convert(converter = EncryptedDateConverter.class)
    private Date DOB;

    @Convert(converter = EncryptedStringConverter.class)
    private String gender;

    @Convert(converter = EncryptedStringConverter.class)
    private String relationshipToPatient;

    @Convert(converter = EncryptedStringConverter.class)
    private String phoneNumber;

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean emailVerified = false;
}
