package RadVeda.UserManagement.Users.LabStaff.signup;

import java.time.LocalDate;
import java.util.Date;

public record LabStaffRequest(
        String firstName,
        String lastName,
        String email,
        String orgName,
        Boolean availability
) {
}
