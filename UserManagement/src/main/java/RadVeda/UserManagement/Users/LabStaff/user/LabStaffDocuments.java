package RadVeda.UserManagement.Users.LabStaff.user;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "labstaffdocuments")
public class LabStaffDocuments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "labstaffID", referencedColumnName = "id")
    private LabStaff labstaff;

    @Convert(converter = EncryptedStringConverter.class)
    private String Documents;

    public LabStaffDocuments() {
        
    }
}
