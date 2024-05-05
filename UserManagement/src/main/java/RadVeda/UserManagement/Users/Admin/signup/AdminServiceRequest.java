package RadVeda.UserManagement.Users.Admin.signup;

import java.time.LocalDate;
import java.util.Date;

public record AdminServiceRequest(Long Id,
                                  String firstName,
                                  String lastName,
                                  String email
) {
}
