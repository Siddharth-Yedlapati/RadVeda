package RadVeda.Patient.PatientDoc;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("PatientDB")
public class PatientDoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String Id;

    private Long Patient_Id;
    private Long prescribedDoc_Id;
}