package RadVeda.Doctor;

import RadVeda.Doctor.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Doctor.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "doctortests")
public class DoctorTests {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctorID", referencedColumnName = "id")
    private Doctor doctor;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testid;

    @Convert(converter = EncryptedStringConverter.class)
    private String doctorNotes;

    @Convert(converter = EncryptedStringConverter.class)
    private String Report;

    public DoctorTests() {
        
    }
}
