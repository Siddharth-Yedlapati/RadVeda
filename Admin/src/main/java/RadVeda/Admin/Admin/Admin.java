package RadVeda.Admin.Admin;

import RadVeda.Admin.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("AdminDB")

public class Admin extends User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Id;

        private String firstName;
        private String lastName;
        private String email;
        private String gender;

        public Admin() {

        }
}
