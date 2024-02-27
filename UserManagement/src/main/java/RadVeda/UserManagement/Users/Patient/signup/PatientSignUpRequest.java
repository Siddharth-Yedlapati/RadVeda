package RadVeda.UserManagement.Users.Patient.signup;

public record PatientSignUpRequest(
        String firstName,
        String middleName,
        String lastName,
        String addressL1,
        String addressL2,
        String country,
        String state,
        String city,
        String email,
        String password,
        String phoneNumber,
        String dateOfBirth,
        String gender,
        String ethnicity,
        String maritalStatus,
        String race,
        String guardianName,
        String guardianRelationship,
        String guardianPhoneNumber,
        String guardianEmailAddress) {
}
