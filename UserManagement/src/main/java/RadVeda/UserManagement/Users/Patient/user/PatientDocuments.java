package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
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

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    public PatientDocuments() {
        
    }
}
