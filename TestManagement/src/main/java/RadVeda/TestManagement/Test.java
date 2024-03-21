package RadVeda.TestManagement;

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

    private String TestType;
    private String DatePrescribed;
    private String PatientStatus;
    private String DoctorStatus;
    private String RadiologistStatus;
    private String LabStaffStatus;
    private String DoctorsRemarksforPatient;
    private String DoctorsRemarksforRadiologist;
    private Long doctorID;
    private Long PatientID;
    private String DoctorNotes;
    private String OriginalImage;
    private Long RadiologistID;
    private Long LabStaffID;

    public Test() {
        
    }

    public Test(String TestType, String DatePrescribed, String PatientStatus, String DoctorStatus, String RadiologistStatus, String LabStaffStatus,String DoctorsRemarksforPatient, String DoctorsRemarksforRadiologist, Long doctorID,
            Long PatientID, String DoctorNotes, String OriginalImage, Long RadiologistID, Long LabStaffID) {

    }
}
