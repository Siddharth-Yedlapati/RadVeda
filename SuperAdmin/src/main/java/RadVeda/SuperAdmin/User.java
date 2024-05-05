
package RadVeda.SuperAdmin;

import RadVeda.SuperAdmin.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.SuperAdmin.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.Convert;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Convert(converter = EncryptedStringConverter.class)
    private String type;

    @Convert(converter = EncryptedLongConverter.class)
    private Long Id;
}
