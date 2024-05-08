package RadVeda.Doctor.transitEncryption;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class SharedKeys {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


    private String serviceName;

    private String sharedKey;

}
