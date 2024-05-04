package RadVeda.SuperAdmin.SuperAdmin;

import java.time.LocalDate;
import java.util.Date;

public record SuperAdminRequest(
        String firstName,
        String lastName,
        String email
) {

}
