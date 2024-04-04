package RadVeda.Radiologist;

import RadVeda.Radiologist.Radiologist;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "radiologisttests")
public class RadiologistTests {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "radiologistID", referencedColumnName = "id")
    private Radiologist radiologist;

    private Long testid;
    private String radiologistNotes;

    public RadiologistTests() {
        
    }
}
