package RadVeda.Admin.transitEncryption;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
