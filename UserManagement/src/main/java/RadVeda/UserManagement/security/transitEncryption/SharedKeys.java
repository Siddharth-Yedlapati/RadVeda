package RadVeda.UserManagement.security.transitEncryption;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class SharedKeys {

    @Id
    private String serviceName;

    private String sharedKey;

}
