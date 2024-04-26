package RadVeda.UserManagement.Users.Admin.user;

import RadVeda.UserManagement.Users.Admin.events.AdminSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Admin.signup.AdminSignUpRequest;
import jakarta.servlet.http.HttpServletRequest;
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
@RequestMapping("/admins")
public class AdminController {
    private final AdminService adminService;
    private static String delimiter = ":_:";



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
        return admin.isPresent() && admin.get().isEnabled();
    }

    @GetMapping("/getFirstAndLastNamesForAdminId/{id}")
    public String getFirstAndLastNamesForAdminId(@PathVariable Long id)
    {
        Optional<Admin> admin = adminService.findById(id);
        if(admin.isEmpty())
        {
            throw new UserNotFoundException("Invalid admin id!");
        }
        if(!admin.get().isEnabled())
        {
            throw new UserNotFoundException("Admin with given id is not yet enabled!");
        }

        return admin.get().getFirstName() + delimiter + admin.get().getLastName();
    }

    @GetMapping("/profile/{id}")
    //Called by super admin (maybe from frontend or from super admin service..TBD)
    public Optional<Admin> getProfileById(@PathVariable Long id)
            throws InvalidInputFormatException, UserNotFoundException {


        Optional<Admin> admin = adminService.findById(id);

        return admin;
    }

    @PostMapping
    //called by super admin from super admin service
    public String updateAdmin(@RequestBody AdminUpdateRequest updateRequest, final HttpServletRequest request) {
        Admin admin = adminService.updateAdmin(updateRequest);
        return "Details Updated !";
    }




}