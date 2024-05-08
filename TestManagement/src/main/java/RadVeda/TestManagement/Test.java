package RadVeda.TestManagement;

import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@DiscriminatorValue("TEST")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String TestType;

    @Convert(converter = EncryptedStringConverter.class)
    private String DatePrescribed;

    @Convert(converter = EncryptedStringConverter.class)
    private String PatientStatus;

    @Convert(converter = EncryptedStringConverter.class)
    private String DoctorStatus;

    @Convert(converter = EncryptedStringConverter.class)
    private String RadiologistStatus;

    @Convert(converter = EncryptedStringConverter.class)
    private String LabStaffStatus;

    @Convert(converter = EncryptedStringConverter.class)
    private String DoctorsRemarksforPatient;

    @Convert(converter = EncryptedStringConverter.class)
    private String DoctorsRemarksforRadiologist;

    @Convert(converter = EncryptedLongConverter.class)
    private Long doctorID;

    @Convert(converter = EncryptedLongConverter.class)
    private Long PatientID;

    @Convert(converter = EncryptedStringConverter.class)
    private String DoctorNotes;

    @Convert(converter = EncryptedStringConverter.class)
    private String OriginalImage;

    @Convert(converter = EncryptedLongConverter.class)
    private Long RadiologistID;

    @Convert(converter = EncryptedLongConverter.class)
    private Long LabStaffID;

    public Test() {
        
    }

    public Test(String TestType, String DatePrescribed, String PatientStatus, String DoctorStatus, String RadiologistStatus, String LabStaffStatus,String DoctorsRemarksforPatient, String DoctorsRemarksforRadiologist, Long doctorID,
            Long PatientID, String DoctorNotes, String OriginalImage, Long RadiologistID, Long LabStaffID) {

    }
}
