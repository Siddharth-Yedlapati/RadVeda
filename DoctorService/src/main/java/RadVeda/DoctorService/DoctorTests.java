package RadVeda.DoctorService;

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

    private Long testid;
    private Long patientid;
    private String doctorNotes;
    private String Report;

    public DoctorTests() {
        
    }
}
