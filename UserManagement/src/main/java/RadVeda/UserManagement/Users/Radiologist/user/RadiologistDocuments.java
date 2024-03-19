package RadVeda.UserManagement.Users.Radiologist.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "radiologistdocuments")
public class RadiologistDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "radiologistID", referencedColumnName = "id")
    private Radiologist radiologist;

    private String Documents;

    public RadiologistDocuments() {
        
    }
}
