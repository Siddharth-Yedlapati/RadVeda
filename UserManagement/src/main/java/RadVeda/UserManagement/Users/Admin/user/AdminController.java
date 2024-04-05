package RadVeda.UserManagement.Users.Admin.user;

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
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9193", "http://localhost:9192", "http://localhost:9194"})
@RequestMapping("/admins")
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/profile")
    public Admin getProfile(@AuthenticationPrincipal UserDetails userDetails)
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

        Optional<Admin> admin = adminService.findByEmail(email);
        if (admin.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch user details");
        }

        return admin.get();
    }

    @GetMapping("/validateAdminId/{id}")
    public boolean validateAdminId(@PathVariable Long id)
    {
        Optional<Admin> admin = adminService.findById(id);
        return admin.isPresent();
    }

}