package RadVeda.Admin.AdminRequests;

import java.util.*;

public record RequestsRecord(
        Long id,
    String firstName, 
    String role,
    Date dateOfRequest
) {
    
}
