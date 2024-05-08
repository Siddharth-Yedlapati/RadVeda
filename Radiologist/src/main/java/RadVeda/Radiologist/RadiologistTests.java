package RadVeda.Radiologist;

import RadVeda.Radiologist.Radiologist;
import RadVeda.Radiologist.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.Radiologist.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "radiologisttests")
public class RadiologistTests {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "radiologistID", referencedColumnName = "id")
    private Radiologist radiologist;

    @Convert(converter = EncryptedLongConverter.class)
    private Long testid;

    @Convert(converter = EncryptedStringConverter.class)
    private String radiologistNotes;

    public RadiologistTests() {
        
    }
}
