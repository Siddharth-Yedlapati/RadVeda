package RadVeda.UserManagement.Users.Patient.signup;

import java.sql.Date;

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
                Date DOB,
                String gender,
                String race,
                String ethnicity,
                String maritalStatus,
                String Documents) {
}
