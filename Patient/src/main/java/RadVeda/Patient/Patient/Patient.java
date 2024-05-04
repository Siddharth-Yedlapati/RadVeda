package RadVeda.Patient.Patient;

import RadVeda.Patient.PatientApplication;
import RadVeda.Patient.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.Patient.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("PatientDB")
public class Patient extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Convert(converter = EncryptedStringConverter.class)
    private String firstName;

    @Convert(converter = EncryptedStringConverter.class)
    private String lastName;

    @Convert(converter = EncryptedStringConverter.class)
    private String email;

    @Convert(converter = EncryptedStringConverter.class)
    private String gender;

    public Patient() {

    }
}
