package RadVeda.UserManagement.Users.Test.tests;

public record TestRequest(
     String TestType,
     String DatePrescribed,
     String PatientStatus,
     String DoctorStatus,
     String RadiologistStatus,
     String LabStaffStatus,
     String DoctorsRemarksforPatient,
     String DoctorsRemarksforRadiologist,
     Long doctorID,
     Long PatientID,
     String DoctorNotes,
     String OriginalImage      
){
    
}
