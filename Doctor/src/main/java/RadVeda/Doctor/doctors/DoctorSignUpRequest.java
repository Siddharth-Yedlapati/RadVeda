package RadVeda.Doctor.doctors;

public record DoctorSignUpRequest(
        Long Id,
        String firstName,
        String lastName,
        String email
){
}