package radveda.usermanagement.Users.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Getter
@Setter
@MappedSuperclass
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@NoArgsConstructor
@AllArgsConstructor
public abstract class User {

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

    private String password;

    private String phoneNumber;

    public String role;
    private boolean isEnabled = false;

}
