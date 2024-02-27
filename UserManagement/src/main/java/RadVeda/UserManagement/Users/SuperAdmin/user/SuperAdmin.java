package RadVeda.UserManagement.Users.SuperAdmin.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import RadVeda.UserManagement.Users.User.User;

@Getter
@Setter
@Entity
@DiscriminatorValue("SUPERADMIN")
public class SuperAdmin extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public SuperAdmin() {
        super();
        this.setRole("SUPERADMIN");
    }

    public SuperAdmin(String firstName, String middleName, String lastName, String addressL1, String addressL2,
            String country, String state, String city, String email, String password, String phoneNumber, String role,
            boolean isEnabled) {
        super(firstName, middleName, lastName, addressL1, addressL2, country, state, city, email, password, phoneNumber,
                role, isEnabled);

        this.setRole("SUPERADMIN");
    }
}
