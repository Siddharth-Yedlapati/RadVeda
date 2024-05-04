package RadVeda.UserManagement.Users.User;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Getter
@Setter
@MappedSuperclass
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@NoArgsConstructor
@AllArgsConstructor
public abstract class User {

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

    @Convert(converter = EncryptedStringConverter.class)
    private String password;

    @Convert(converter = EncryptedStringConverter.class)
    private String phoneNumber;

    @Convert(converter = EncryptedStringConverter.class)
    private String role;

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean isEnabled = false;
//    private boolean emailVerified = false;
//    private boolean adminVerified = false;

}
