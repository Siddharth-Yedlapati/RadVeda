package RadVeda.LabStaff.LabStaff;

import RadVeda.LabStaff.exceptions.UnauthorizedUserException;
import RadVeda.LabStaff.User;
import RadVeda.LabStaff.exceptions.UserNotFoundException;
import jakarta.persistence.Id;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/labstaff")
public class LabStaffController {

    private final LabStaffService labStaffService;

    private final String frontend = "http://localhost:3000";
    private final String umService = "http://localhost:9191";
    private final String testMngmentService = "http://localhost:9192";
    private final String adminService = "http://localhost:9197";

    @CrossOrigin(origins = umService)
    @PostMapping("/addLabStaff")
    public String addLabStaff(@RequestBody LabStaffRequest labStaffRequest, final HttpServletRequest request)  throws UnauthorizedUserException {

//        User user = labStaffService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        labStaffService.addLabStaff(labStaffRequest);

        return "Lab Staff is registered successfully!";

    }

    @CrossOrigin(origins = umService)
    @GetMapping("/{labStaffID}/labStaffDetails")
    public LabStaff getLabStaff(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                @PathVariable Long labStaffID) throws UnauthorizedUserException {

        User user = labStaffService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        Optional<LabStaff> labStaff = labStaffService.findLabStaff(labStaffID);
        if(labStaff.isEmpty()){
            throw new UserNotFoundException("Lab Staff doesn't exist with given ID");
        }

        return labStaff.get();
    }

    @CrossOrigin(origins = adminService)
    @DeleteMapping("/{labStaffID}/deleteLabStaff")
    public String deleteLabStaff(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                               @PathVariable Long labStaffID) throws UnauthorizedUserException  {
        User user = labStaffService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        Optional<LabStaff> labStaff = labStaffService.findLabStaff(labStaffID);
        if(labStaff.isEmpty()){
            throw new UserNotFoundException("Lab Staff doesn't exist with given ID");
        }

        labStaffService.deleteLabStaff(labStaffID);

        return "Lab Staff deleted successfully!";
    }

    /*Returning list of IDs of lab staff. Subject to change*/
    @CrossOrigin(origins = frontend)
    @GetMapping("/availableLabStaff")
    public List<LabStaff> availableLabStaff(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
                                        throws UnauthorizedUserException {

        User user = labStaffService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return labStaffService.availableLabStaff();

    }




}
