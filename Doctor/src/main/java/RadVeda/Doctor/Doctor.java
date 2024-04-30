package RadVeda.Doctor;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@DiscriminatorValue("DOCTOR")
public class Doctor extends User {
    @Id
    private Long Id;

    private String firstName;
    private String lastName;
    private String email;

    public Doctor() {

    }
}
