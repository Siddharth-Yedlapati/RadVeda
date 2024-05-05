package RadVeda.Admin.Admin;

import RadVeda.Admin.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.Admin.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("AdminDB")

public class Admin extends User {
        @Id
        private Long Id;

        @Convert(converter = EncryptedStringConverter.class)
        private String firstName;

        @Convert(converter = EncryptedStringConverter.class)
        private String lastName;

        @Convert(converter = EncryptedStringConverter.class)
        private String email;

        public Admin() {

        }
}
