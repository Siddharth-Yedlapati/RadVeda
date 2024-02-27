package RadVeda.UserManagement.Users.Patient.user;

import lombok.Getter;
import lombok.Setter;
import RadVeda.UserManagement.Users.User.User;

import javax.persistence.*;

@Getter
@Setter
@Entity
@DiscriminatorValue("PATIENT")
public class Patient extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Existing fields
    private String dateOfBirth;
    private String gender;
    private String ethnicity;
    private String maritalStatus;
    private String race;

    // New guardian fields
    private String guardianName;
    private String guardianRelationship;
    private String guardianPhoneNumber;
    private String guardianEmailAddress;

    public Patient() {
        this.setRole("PATIENT");
    }

    public Patient(String firstName, String middleName, String lastName, String addressL1, String addressL2, String country, String state, String city, String email, String password, String phoneNumber, String role, boolean isEnabled, String dateOfBirth, String gender, String ethnicity, String maritalStatus, String race, String guardianName, String guardianRelationship, String guardianPhoneNumber, String guardianEmailAddress) {
        super(firstName, middleName, lastName, addressL1, addressL2, country, state, city, email, password, phoneNumber, role, isEnabled);
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.ethnicity = ethnicity;
        this.maritalStatus = maritalStatus;
        this.race = race;
        this.guardianName = guardianName;
        this.guardianRelationship = guardianRelationship;
        this.guardianPhoneNumber = guardianPhoneNumber;
        this.guardianEmailAddress = guardianEmailAddress;
        this.setRole("PATIENT");
    }
}
