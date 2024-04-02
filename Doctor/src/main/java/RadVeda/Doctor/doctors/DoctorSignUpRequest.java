package RadVeda.Doctor.doctors;

public record DoctorSignUpRequest(
                String firstName,
                String middleName,
                String lastName,
                String addressL1,
                String addressL2,
                String country,
                String state,
                String city,
                String email,
                String phoneNumber,
                String orgName,
                String orgAddressL1,
                String orgAddressL2
){
}