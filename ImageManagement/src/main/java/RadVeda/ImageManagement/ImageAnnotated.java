package RadVeda.ImageManagement;

import RadVeda.ImageManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.ImageManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "imageAnnotated")
public class ImageAnnotated {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testID;

    @Convert(converter = EncryptedLongConverter.class)
    private Long radID;

    @Convert(converter = EncryptedStringConverter.class)
    private String imageURL;

    public ImageAnnotated() {
        
    }

    // public ImageAnnotated(String TestType, String imageURL) {

    // }
}
