package RadVeda.Admin.AdminLabStaff;

import RadVeda.Admin.Admin.Admin;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("AdminDB")

public class AdminLabStaff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Admin_ID", referencedColumnName = "id")
    private Admin admin;

    private Long labstaffId;
}
