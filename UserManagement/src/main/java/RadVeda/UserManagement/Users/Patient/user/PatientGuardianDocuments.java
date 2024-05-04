package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "patientguardiandocuments")
public class PatientGuardianDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patientguardianID", referencedColumnName = "id")
    private PatientGuardian patientguardian;

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    public PatientGuardianDocuments() {
        
    }
}
