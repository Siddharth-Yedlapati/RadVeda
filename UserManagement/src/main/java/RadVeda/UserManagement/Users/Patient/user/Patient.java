package RadVeda.UserManagement.Users.Patient.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import RadVeda.UserManagement.Users.User.User;

import javax.print.Doc;
import java.sql.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("PATIENT")
public class Patient extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date DOB;
    private String gender;
    private String race;
    private String ethnicity;
    private String maritalStatus;
    private String Documents;
    private boolean emailVerified;

    @OneToOne
    @JoinColumn(name = "patientguardian_id")
    private PatientGuardian patientguardian;

    public Patient() {
        this.setRole("PATIENT");
        this.setEmailVerified(false);
    }

    public Patient(String firstName, String middleName, String lastName, String addressL1, String addressL2,
                   String country, String state, String city, String email, String password, String phoneNumber, String role,
                   boolean isEnabled, Date DOB, String gender, String race, String ethnicity, String maritalStatus, String Documents, boolean emailVerified, PatientGuardian patientguardian) {
        super(firstName, middleName, lastName, addressL1, addressL2, country, state, city, email, password, phoneNumber,
                role, isEnabled);
        this.DOB = DOB;
        this.gender = gender;
        this.race = race;
        this.ethnicity  = ethnicity;
        this.maritalStatus = maritalStatus;
        this.Documents = Documents;
        this.patientguardian = patientguardian;
        this.emailVerified = emailVerified;
        this.setEmailVerified(false);
        this.setRole("PATIENT");
    }
}
