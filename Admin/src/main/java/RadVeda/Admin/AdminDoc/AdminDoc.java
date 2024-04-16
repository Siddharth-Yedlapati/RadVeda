//package RadVeda.Admin.AdminDoc;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//import RadVeda.Admin.Admin.Admin;
//
//@Getter
//@Setter
//@Entity
//@DiscriminatorValue("AdminDB")
//public class AdminDoc {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long Id;
//
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "Admin_ID", referencedColumnName = "Id")
//    private Admin Admin;
//
//    private Long Doc_Id;
//}

package RadVeda.Admin.AdminDoc;

import RadVeda.Admin.Admin.Admin;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@DiscriminatorValue("AdminDB")
public class AdminDoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Admin_ID", referencedColumnName = "id")
    private Admin admin;

    private Long docId;
}
