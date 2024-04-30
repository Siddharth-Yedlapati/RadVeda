package RadVeda.Admin.AdminRequests;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;

@Getter
@Setter
@Entity
@DiscriminatorValue("SuperAdminDB")
public class Requests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false)
    private String typeOfRequest;

    @Column(nullable = false)
    private String role;


    private String remarks;
    private String status;
    private Long adminId;
    private Date dateOfRequest;

    public Requests() {
        this.status = "TBD";
        this.dateOfRequest = new Date();
    }

}
