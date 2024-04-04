package RadVeda.UserManagement.Users.Patient.signup;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;

public record PatientServiceRequest(
    String firstName,
    String lastName,
    String email,
    String gender) {
}
