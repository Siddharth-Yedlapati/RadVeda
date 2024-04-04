package RadVeda.Radiologist;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "consultedradiologisttests")
public class ConsultedRadiologistTests{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "radiologistID", referencedColumnName = "id")
    private Radiologist radiologist;    

    private Long consultedTestID;

    public ConsultedRadiologistTests() {

    }

}
