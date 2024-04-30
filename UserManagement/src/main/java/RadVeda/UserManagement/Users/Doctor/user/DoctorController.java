package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Admin.user.AdminUpdateAcceptance;
import RadVeda.UserManagement.Users.User.UserUpdateAcceptance;
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
@RequestMapping("/doctors")
public class DoctorController {
    private final DoctorService doctorService;
    private static String delimiter = ":_:";

    @GetMapping("/profile")
    public Doctor getProfile(@AuthenticationPrincipal UserDetails userDetails)
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

        Optional<Doctor> doctor = doctorService.findByEmail(email);
        if (doctor.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch user details");
        }

        return doctor.get();
    }

    @GetMapping("/validateDoctorId/{id}")
    public boolean validateDoctorId(@PathVariable Long id)
    {
        Optional<Doctor> doctor = doctorService.findById(id);
        return doctor.isPresent() && doctor.get().isEnabled();
    }

    @GetMapping("/getFirstAndLastNamesForDoctorId/{id}")
    public String getFirstAndLastNamesForDoctorId(@PathVariable Long id)
    {
        Optional<Doctor> doctor = doctorService.findById(id);
        if(doctor.isEmpty())
        {
            throw new UserNotFoundException("Invalid doctor id!");
        }
        if(!doctor.get().isEnabled())
        {
            throw new UserNotFoundException("Doctor with given id is not yet enabled!");
        }

        return doctor.get().getFirstName() + delimiter + doctor.get().getLastName();
    }

    @GetMapping("/profile/{id}")
    //Called by super admin (maybe from frontend or from super admin service..TBD)
    public Optional<Doctor> getProfileById(@PathVariable Long id)
            throws InvalidInputFormatException, UserNotFoundException {


        Optional<Doctor> doctor = doctorService.findById(id);

        return doctor;
    }

    @PostMapping("/update")
    public String updateDoc(@RequestBody UserUpdateAcceptance updateRequest, final HttpServletRequest request) {
        System.out.println("22");
        return doctorService.updateDoctor(updateRequest);
    }

    @PostMapping("/acceptSignUp/{Id}")
    public String acceptSignUp(@PathVariable Long Id)
            throws UserNotFoundException {
        String res = doctorService.adminAcceptedSignUp(Id);
        if(res.equalsIgnoreCase("success")) {
            return "Success";
        }
        return "Failed";
    }

    @PostMapping("/declineSignUp/{Id}")
    public String declineSignUp(@PathVariable Long Id)throws UserNotFoundException {
        String res = doctorService.adminDeclinedSignUp(Id);
        if(res.equalsIgnoreCase("deleted")) {
            return "Success";
        }
        return "Failed";
    }

}