package RadVeda.DoctorService.doctors;

public record DoctorTestRequest(
     Long testID,
     Long patientID,
     Long doctorID     
){
    
}
