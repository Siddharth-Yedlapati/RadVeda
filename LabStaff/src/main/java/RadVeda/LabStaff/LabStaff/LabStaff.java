package RadVeda.LabStaff.LabStaff;

import RadVeda.LabStaff.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.LabStaff.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.LabStaff.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.LabStaff.StorageEncryption.Converters.EncryptedDateConverter;
import RadVeda.LabStaff.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("LabStaff")
public class LabStaff extends User{

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
    private String orgName;

    @Convert(converter = EncryptedBooleanConverter.class)
    private Boolean available;

    public LabStaff () {

    }

}
