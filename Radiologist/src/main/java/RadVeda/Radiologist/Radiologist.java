package RadVeda.Radiologist;

import RadVeda.Radiologist.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.Radiologist.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@DiscriminatorValue("RADIOLOGIST")
public class Radiologist extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgName;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgAddressL1;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgAddressL2;

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
    private String city;

    @Convert(converter = EncryptedStringConverter.class)
    private String state;

    @Convert(converter = EncryptedStringConverter.class)
    private String email;

    @Convert(converter = EncryptedStringConverter.class)
    private String phonenumber;

    @Convert(converter = EncryptedBooleanConverter.class)
    private Boolean available;


    public Radiologist() {
        this.available = true;
    }

    public Radiologist(String firstName, String middleName, String lastName, String addressL1, String addressL2,
            String country, String state, String city, String email, String password, String phoneNumber, String role,
            boolean isEnabled, String orgName, String orgAddressL1, String orgAddressL2) {
        this.orgName = orgName;
        this.orgAddressL1 = orgAddressL1;
        this.orgAddressL2 = orgAddressL2;
    }
}
