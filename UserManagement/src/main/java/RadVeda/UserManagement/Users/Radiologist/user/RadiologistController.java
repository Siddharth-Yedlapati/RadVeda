package RadVeda.UserManagement.Users.Radiologist.user;

import RadVeda.UserManagement.Users.Patient.user.Patient;
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
@RequestMapping("/radiologists")
public class RadiologistController {
    private final RadiologistService radiologistService;
    private static String delimiter = ":_:";

    @GetMapping("/profile")
    public Radiologist getProfile(@AuthenticationPrincipal UserDetails userDetails)
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

        Optional<Radiologist> radiologist = radiologistService.findByEmail(email);
        if (radiologist.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch user details");
        }

        return radiologist.get();
    }

    @GetMapping("/validateRadiologistId/{id}")
    public boolean validateRadiologistId(@PathVariable Long id)
    {
        Optional<Radiologist> radiologist = radiologistService.findById(id);
        return radiologist.isPresent() && radiologist.get().isEnabled();
    }

    @GetMapping("/getFirstAndLastNamesForRadiologistId/{id}")
    public String getFirstAndLastNamesForRadiologistId(@PathVariable Long id)
    {
        Optional<Radiologist> radiologist = radiologistService.findById(id);
        if(radiologist.isEmpty())
        {
            throw new UserNotFoundException("Invalid radiologist id!");
        }
        if(!radiologist.get().isEnabled())
        {
            throw new UserNotFoundException("Radiologist with given id is not yet enabled!");
        }

        return radiologist.get().getFirstName() + delimiter + radiologist.get().getLastName();
    }
}