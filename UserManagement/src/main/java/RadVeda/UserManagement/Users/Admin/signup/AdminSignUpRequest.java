package RadVeda.UserManagement.Users.Admin.signup;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;
import java.util.List;

public record AdminSignUpRequest(
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
