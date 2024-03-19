package RadVeda.UserManagement.Users.Radiologist.signup;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;

public record RadiologistSignUpRequest(
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
                String orgName,
                String orgAddressL1,
                String orgAddressL2,
                @JsonDeserialize(using = StringListDeserializer.class)
                List<String> Documents) {
}
