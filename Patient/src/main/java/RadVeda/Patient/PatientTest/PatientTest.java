package RadVeda.Patient.PatientTest;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import RadVeda.Patient.Patient.Patient;

@Getter
@Setter
@Entity
@DiscriminatorValue("PatientDB")
public class PatientTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Patient_Id", referencedColumnName = "Id")
    private Patient patient;
    
    private Long Test_Id;
}