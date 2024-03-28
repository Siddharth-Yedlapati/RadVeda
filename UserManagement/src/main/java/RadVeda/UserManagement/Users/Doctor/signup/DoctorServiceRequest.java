package RadVeda.UserManagement.Users.Doctor.signup;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;

public record DoctorServiceRequest(
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
    String orgAddressL2) {
}
