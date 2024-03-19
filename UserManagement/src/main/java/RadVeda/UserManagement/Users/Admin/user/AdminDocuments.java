package RadVeda.UserManagement.Users.Admin.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "admindocuments")
public class AdminDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adminID", referencedColumnName = "id")
    private Admin admin;

    private String Documents;

    public AdminDocuments() {
        
    }
}
