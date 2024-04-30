package RadVeda.Admin.Admin;

import RadVeda.Admin.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("AdminDB")

public class Admin extends User {
        @Id
        private Long Id;

        private String firstName;
        private String lastName;
        private String email;

        public Admin() {

        }
}
