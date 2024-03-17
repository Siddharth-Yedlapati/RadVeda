package RadVeda.UserManagement.Users.Patient.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.sql.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PatientGuardian {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String middleName;
    private String lastName;

    private String addressL1;
    private String addressL2;
    private String country;
    private String state;
    private String city;

    @NaturalId
    @Column(unique = true, nullable = false)
    private String email;

    private Date DOB;
    private String gender;
    private String relationshipToPatient;

    private String phoneNumber;
    private String Documents;
    private boolean emailVerified = false;
}
