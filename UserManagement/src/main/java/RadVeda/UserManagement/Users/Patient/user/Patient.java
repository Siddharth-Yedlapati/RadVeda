package RadVeda.UserManagement.Users.Patient.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedBooleanConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedDateConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import RadVeda.UserManagement.Users.User.User;

import javax.print.Doc;
import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("PATIENT")
public class Patient extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedDateConverter.class)
    private Date DOB;

    @Convert(converter = EncryptedStringConverter.class)
    private String gender;

    @Convert(converter = EncryptedStringConverter.class)
    private String race;

    @Convert(converter = EncryptedStringConverter.class)
    private String ethnicity;

    @Convert(converter = EncryptedStringConverter.class)
    private String maritalStatus;

    @Convert(converter = EncryptedBooleanConverter.class)
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
                   boolean isEnabled, Date DOB, String gender, String race, String ethnicity, String maritalStatus, boolean emailVerified, PatientGuardian patientguardian) {
        super(firstName, middleName, lastName, addressL1, addressL2, country, state, city, email, password, phoneNumber,
                role, isEnabled);
        this.DOB = DOB;
        this.gender = gender;
        this.race = race;
        this.ethnicity  = ethnicity;
        this.maritalStatus = maritalStatus;
        this.patientguardian = patientguardian;
        this.emailVerified = emailVerified;
        this.setEmailVerified(false);
        this.setRole("PATIENT");
    }
}
