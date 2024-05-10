package RadVeda.TestManagement;

public record UpdateTestRequest(
     Long testID,
     String PatientStatus,
     String DoctorStatus,
     String RadiologistStatus,
     String LabStaffStatus 
){
    
}
