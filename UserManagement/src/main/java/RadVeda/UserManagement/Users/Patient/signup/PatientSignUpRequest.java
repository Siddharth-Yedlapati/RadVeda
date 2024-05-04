package RadVeda.UserManagement.Users.Patient.signup;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;

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
                @JsonDeserialize(using = StringListDeserializer.class)
                List<String> Documents,
                String guardianFirstName,
                String guardianMiddleName,
                String guardianLastName,
                String guardianAddressL1,
                String guardianAddressL2,
                String guardianCountry,
                String guardianState,
                String guardianCity,
                String guardianEmail,
                Date guardianDOB,
                String guardianGender,
                String guardianRelationshipToPatient,
                String guardianPhoneNumber,
                @JsonDeserialize(using = StringListDeserializer.class)
                List<String> guardianDocuments) {
}
