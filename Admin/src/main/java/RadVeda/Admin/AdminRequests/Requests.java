package RadVeda.Admin.AdminRequests;

import RadVeda.Admin.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.Admin.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Admin.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.Admin.StorageEncryption.Converters.EncryptedDateConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;
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
    @Convert(converter = EncryptedStringConverter.class)
    private String typeOfRequest;

    @Column(nullable = false)
    @Convert(converter = EncryptedStringConverter.class)
    private String role;

    @Convert(converter = EncryptedStringConverter.class)
    private String remarks;

    @Convert(converter = EncryptedStringConverter.class)
    private String status;

    @Convert(converter = EncryptedLongConverter.class)
    private Long adminId;

    @Convert(converter = EncryptedDateConverter.class)
    private Date dateOfRequest;

    public Requests() {
        this.status = "TBD";
        this.dateOfRequest = new Date();
    }

}
