package RadVeda.SuperAdmin.SuperAdmin;

import java.util.Date;

public record SuperAdminRequest(
        String firstName,
        String lastName,
        String email,
        String gender,
        Date DOB
) {

}
