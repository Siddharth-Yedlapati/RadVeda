package RadVeda.Admin.AdminRequests;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("SuperAdminDB")
public class UserDetails {


    @Id
    private Long Id;

    @Column(nullable = false)
    private Long userId;

    private String firstName;
    private String middleName;
    private String lastName;
    private String addressL1;
    private String addressL2;
    private String country;
    private String state;
    private String city;
    private String email;
    private String phoneNumber;

    @Column(nullable = false)
    private String role;

    private String orgName;
    private String orgAddressL1;
    private String orgAddressL2;

    public UserDetails() {

    }
}
