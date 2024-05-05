package RadVeda.ConsentManagement.ConsentRequest;

import RadVeda.ConsentManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.ConsentManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class ConsentSeeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String consentSeekerType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consentSeekerId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "consentRequestId", referencedColumnName = "id")
    private ConsentRequest consentRequest;
}
