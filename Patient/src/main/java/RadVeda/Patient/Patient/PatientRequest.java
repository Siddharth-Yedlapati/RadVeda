package RadVeda.Patient;

public record PatientRequest(
        String name,
        String language,
        String email,
        String DOB
) {

}
