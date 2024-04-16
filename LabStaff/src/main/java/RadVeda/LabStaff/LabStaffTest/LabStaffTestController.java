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

    private final String umService = "http://localhost:9191";
    private final String testMngmentService = "http://localhost:9192";

    @CrossOrigin(origins = testMngmentService)
    @PostMapping("/addTest")
    public String addTestForPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                    @RequestBody LabStaffTestRequest labStaffTestRequest,
                                    final HttpServletRequest request)  throws UnauthorizedUserException {

//        User user = patientTestService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        labStaffTestService.addTestForPatient(labStaffTestRequest);

        return "Test Added Successfully !";
    }

    @DeleteMapping("{labstaffID}/deleteTest")
    public String deleteTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                             @PathVariable Long labstaffID)  throws UnauthorizedUserException {

//                User user = patientTestService.authenticate(authorizationHeader);
//
//                if(user == null) {
//                    throw new UnauthorizedUserException("Invalid User!");
//                }

        labStaffTestService.deleteTestsOfLabStaff(labstaffID);
        return "Test Deleted Successfully !";
    }

    @GetMapping("/{labstaffID}/getTests")
    public List<Long> getTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                               @PathVariable Long labstaffID)  throws UnauthorizedUserException {
//        User user = patientTestService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        return labStaffTestService.getTestsOfLabStaff(labstaffID);
    }

}
