package RadVeda.UserManagement.Users.Admin.signup;

import java.util.Date;

public record AdminServiceRequest(Long Id,
                                  String firstName,
                                  String lastName,
                                  String email
) {
}
