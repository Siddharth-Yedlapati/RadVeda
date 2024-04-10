package RadVeda.UserManagement.Users.SuperAdmin.user;

import RadVeda.UserManagement.Users.Radiologist.user.Radiologist;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.exception.InvalidInputFormatException;
import RadVeda.UserManagement.exception.UserNotFoundException;
import RadVeda.UserManagement.security.UserManagementDetailsService;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9193", "http://localhost:9192", "http://localhost:9194", "http://localhost:9195", "http://localhost:9196", "http://localhost:9197", "http://localhost:9198", "http://localhost:9199", "http://localhost:9200", "http://localhost:9201", "http://localhost:9202"})
@RequestMapping("/superadmins")
public class SuperAdminController {
    private final SuperAdminService superAdminService;

    @GetMapping("/profile")
    public SuperAdmin getProfile(@AuthenticationPrincipal UserDetails userDetails)
            throws InvalidInputFormatException, UserNotFoundException {
        String roleEmail = userDetails.getUsername();

        // Splitting the string based on the leftmost occurrence of the delimiter
        String[] parts = roleEmail.split(UserManagementDetailsService.getDelimiter(), 2);

        String email = "";

        if (parts.length == 2) {
            email = parts[1];
        } else {
            throw new InvalidInputFormatException("Can't extract role and email");
        }

        Optional<SuperAdmin> superadmin = superAdminService.findByEmail(email);
        if (superadmin.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch user details");
        }

        return superadmin.get();
    }

    @GetMapping("/validateSuperAdminId/{id}")
    public boolean validateSuperAdminId(@PathVariable Long id)
    {
        Optional<SuperAdmin> superAdmin = superAdminService.findById(id);
        return superAdmin.isPresent() && superAdmin.get().isEnabled();
    }
}
