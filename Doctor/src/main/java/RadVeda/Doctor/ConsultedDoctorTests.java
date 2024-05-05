package RadVeda.Doctor;

import RadVeda.Doctor.StorageEncryption.Converters.EncryptedLongConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "consulteddoctortests")
public class ConsultedDoctorTests{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctorID", referencedColumnName = "id")
    private Doctor doctor;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consultedTestID;

    public ConsultedDoctorTests() {

    }

}
