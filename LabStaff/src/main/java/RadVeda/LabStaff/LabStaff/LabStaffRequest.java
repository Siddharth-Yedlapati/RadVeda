package RadVeda.LabStaff.LabStaff;

import java.time.LocalDate;
import java.util.Date;

public record LabStaffRequest(
        String firstName,
        String lastName,
        String email,
        Date DOB,
        String language,
        Boolean availability
) {
}
