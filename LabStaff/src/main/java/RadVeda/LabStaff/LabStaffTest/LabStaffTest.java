package RadVeda.LabStaff.LabStaffTest;

import RadVeda.LabStaff.LabStaff.LabStaff;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("LabStaffDB")
public class LabStaffTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "LabStaff_Id", referencedColumnName = "Id")
    private LabStaff LabStaff;

    private Long Test_Id;
}
