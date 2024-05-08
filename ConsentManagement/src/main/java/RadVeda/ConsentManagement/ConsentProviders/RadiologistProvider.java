package RadVeda.ConsentManagement.ConsentProviders;

import RadVeda.ConsentManagement.StorageEncryption.Converters.EncryptedBooleanConverter;
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
public class RadiologistProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String consentSeekerType;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consentSeekerId;

    @Convert(converter = EncryptedLongConverter.class)
    private Long consentProviderId;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testId;

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean annotationsAllowed;

    @Convert(converter = EncryptedBooleanConverter.class)
    private boolean notesAllowed;
}
