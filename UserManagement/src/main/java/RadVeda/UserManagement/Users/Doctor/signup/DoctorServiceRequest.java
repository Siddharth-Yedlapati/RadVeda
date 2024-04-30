package RadVeda.UserManagement.Users.Doctor.signup;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import RadVeda.UserManagement.Users.User.StringListDeserializer;

public record DoctorServiceRequest(
        Long Id,
        String firstName,
        String lastName,
        String email

   ) {
}
