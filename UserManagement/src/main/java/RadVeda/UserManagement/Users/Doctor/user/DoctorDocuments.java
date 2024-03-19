package RadVeda.UserManagement.Users.Doctor.user;

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

    private String Documents;

    public DoctorDocuments() {
        
    }
}
