package RadVeda.Admin.Admin;

import java.time.LocalDate;
import java.util.Date;

public record AdminRequest (
        Long Id,
        String firstName,
        String lastName,
        String email)
{

}