package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "doctordocuments")
public class DoctorDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctorID", referencedColumnName = "id")
    private Doctor doctor;

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    public DoctorDocuments() {
        
    }
}
