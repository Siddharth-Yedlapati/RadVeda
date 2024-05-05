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
public class ConsentRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String consentProviderType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consentProviderId;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testId;

    @Convert(converter = EncryptedStringConverter.class)
    private String message;
}
