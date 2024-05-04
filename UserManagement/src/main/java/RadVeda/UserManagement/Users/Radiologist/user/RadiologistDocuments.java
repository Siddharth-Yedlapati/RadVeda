package RadVeda.UserManagement.Users.Radiologist.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "radiologistdocuments")
public class RadiologistDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "radiologistID", referencedColumnName = "id")
    private Radiologist radiologist;

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    public RadiologistDocuments() {
        
    }
}
