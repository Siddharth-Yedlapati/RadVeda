package RadVeda.LabStaff.LabStaff;

import RadVeda.LabStaff.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("LabStaff")
public class LabStaff extends User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String firstName;
    private String lastName;
    private Date DOB;
    private String email;
    private String language;
    private Boolean available;

    public LabStaff () {

    }

}
