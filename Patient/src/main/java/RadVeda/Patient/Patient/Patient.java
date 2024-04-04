package RadVeda.Patient.Patient;

import RadVeda.Patient.PatientApplication;
import RadVeda.Patient.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("PatientDB")
public class Patient extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String firstName;
    private String lastName;
    private String email;
    private String gender;

    public Patient() {

    }
}
