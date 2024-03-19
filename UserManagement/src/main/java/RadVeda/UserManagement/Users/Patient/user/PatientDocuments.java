package RadVeda.UserManagement.Users.Patient.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "patientdocuments")
public class PatientDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patientID", referencedColumnName = "id")
    private Patient patient;

    private String Documents;

    public PatientDocuments() {
        
    }
}
