package RadVeda.Admin.AdminRequests;

import RadVeda.Admin.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Admin.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("SuperAdminDB")
public class UserDetails {


    @Id
    private Long Id;

    @Column(nullable = false)
    @Convert(converter = EncryptedLongConverter.class)
    private Long userId;

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

    @Convert(converter = EncryptedStringConverter.class)
    private String email;

    @Convert(converter = EncryptedStringConverter.class)
    private String phoneNumber;

    @Column(nullable = false)
    @Convert(converter = EncryptedStringConverter.class)
    private String role;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgName;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgAddressL1;

    @Convert(converter = EncryptedStringConverter.class)
    private String orgAddressL2;

    public UserDetails() {

    }
}
