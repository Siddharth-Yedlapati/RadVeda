package RadVeda.LabStaff.LabStaffTest;

import RadVeda.LabStaff.User;
import RadVeda.LabStaff.exceptions.UnauthorizedUserException;
import RadVeda.LabStaff.exceptions.UserNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/labstaff-test")
public class LabStaffTestController {

    private final LabStaffTestService labStaffTestService;

    private final String frontend = "http://localhost:3000";
    private final String umService = "http://localhost:9191";
    private final String testMngmentService = "http://localhost:9192";

    @CrossOrigin(origins = frontend)
    @PostMapping("{labID}/addTest/{testID}")
    public Boolean addTestForPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                    @PathVariable Long testID, @PathVariable Long labID,
                                    final HttpServletRequest request)  throws UnauthorizedUserException {

        User user = labStaffTestService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        labStaffTestService.addTestForPatient(labID, testID);

        return Boolean.TRUE;
    }

    @DeleteMapping("{labstaffID}/deleteTest")
    public String deleteTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                             @PathVariable Long labstaffID)  throws UnauthorizedUserException {

        User user = labStaffTestService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        labStaffTestService.deleteTestsOfLabStaff(labstaffID);
        return "Test Deleted Successfully !";
    }

    @GetMapping("/{labstaffID}/getTests")
    public List<Long> getTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                               @PathVariable Long labstaffID)  throws UnauthorizedUserException {
        User user = labStaffTestService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return labStaffTestService.getTestsOfLabStaff(labstaffID);
    }

}
