package RadVeda.SuperAdmin.SuperAdmin;

import RadVeda.SuperAdmin.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.SuperAdmin.SuperAdminApplication;
import RadVeda.SuperAdmin.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("SuperAdminDB")
public class SuperAdmin extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Convert(converter = EncryptedStringConverter.class)
    private String firstName;

    @Convert(converter = EncryptedStringConverter.class)
    private String lastName;

    @Convert(converter = EncryptedStringConverter.class)
    private String email;

    public SuperAdmin() {

    }
}
