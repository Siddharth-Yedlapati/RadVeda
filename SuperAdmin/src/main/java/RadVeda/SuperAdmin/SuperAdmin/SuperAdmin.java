package RadVeda.SuperAdmin.SuperAdmin;

import RadVeda.SuperAdmin.SuperAdminApplication;
import RadVeda.SuperAdmin.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("SuperAdminDB")
public class SuperAdmin extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String firstName;
    private String lastName;
    private String email;
    private String gender;

    public SuperAdmin() {

    }
}
