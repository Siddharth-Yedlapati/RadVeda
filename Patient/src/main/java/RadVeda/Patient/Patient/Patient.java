package RadVeda.Patient;

import RadVeda.Patient.PatientApplication;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("PatientDB")
public class Patient extends  User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    private String name;
    private String DOB;
    private String Email;
    private String language;

    public Patient() {

    }
}
