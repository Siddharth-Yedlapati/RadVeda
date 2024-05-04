package RadVeda.ImageManagement;

import RadVeda.ImageManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.ImageManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testID;

    @Convert(converter = EncryptedStringConverter.class)
    private String imageURL;

    public Image() {
        
    }

    public Image(String TestType, String imageURL) {

    }
}
