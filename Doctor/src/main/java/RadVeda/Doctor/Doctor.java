package RadVeda.Doctor;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@DiscriminatorValue("DOCTOR")
public class Doctor extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orgName;
    private String orgAddressL1;
    private String orgAddressL2;
    private String firstName;
    private String middleName;
    private String lastName;
    private String addressL1;
    private String addressL2;
    private String country;
    private String city;
    private String state;
    private String email;
    private String phonenumber;


    public Doctor() {
    }

    public Doctor(String firstName, String middleName, String lastName, String addressL1, String addressL2,
            String country, String state, String city, String email, String password, String phoneNumber, String role,
            boolean isEnabled, String orgName, String orgAddressL1, String orgAddressL2) {
        this.orgName = orgName;
        this.orgAddressL1 = orgAddressL1;
        this.orgAddressL2 = orgAddressL2;
    }
}
