package RadVeda.UserManagement.Users.LabStaff.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import RadVeda.UserManagement.exception.InvalidInputFormatException;
import RadVeda.UserManagement.exception.UserNotFoundException;
import RadVeda.UserManagement.security.UserManagementDetailsService;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/labstaffs")
public class LabStaffController {
    private final LabStaffService labStaffService;

    @GetMapping("/profile")
    public LabStaff getProfile(@AuthenticationPrincipal UserDetails userDetails)
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

        Optional<LabStaff> labstaff = labStaffService.findByEmail(email);
        if (labstaff.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch user details");
        }

        return labstaff.get();
    }
}
