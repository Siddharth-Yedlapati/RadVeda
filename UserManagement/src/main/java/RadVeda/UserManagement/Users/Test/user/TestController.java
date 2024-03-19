package RadVeda.UserManagement.Users.Test.user;

import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import RadVeda.UserManagement.Users.User.User;
import RadVeda.UserManagement.exception.InvalidInputFormatException;
import RadVeda.UserManagement.exception.UserNotFoundException;
import RadVeda.UserManagement.security.UserManagementDetailsService;

import java.util.Optional;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tests")
public class TestController {
    private final TestService testService;

    @GetMapping("/{testID}/getTest")
    public Test getTest(@PathVariable Long testID)
            throws InvalidInputFormatException, UserNotFoundException {

        Optional<Test> test = testService.findById(testID);
        if (test.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch test details");
        }

        return test.get();
    }

    @GetMapping("/getTests")
    public List<Test> getTests() throws UserNotFoundException {
        List<Test> testlist = testService.findAllTests();
        if(testlist.isEmpty()){
            throw new UserNotFoundException("There are no tests currently prescribed");
        }
        return testlist;
    }

    @GetMapping("/{userType}/{userID}/getTests")
    public List<Test> getTests(@PathVariable String userType, @PathVariable Long userID)
                throws UserNotFoundException {
        List<Test> testlist = testService.findAllTestsByUser(userType, userID);
        if(testlist.isEmpty()){
            throw new UserNotFoundException("No tests found for the given ID");
        }
        return testlist;
    }

    @GetMapping("/{patientID}/{userType}/{userID}/getTests")
    public List<Test> getTests(@PathVariable Long patientID, @PathVariable String userType, @PathVariable Long userID)
            throws UserNotFoundException {
        List<Test> testList = testService.findAllTestsByPatientAndUser(patientID, userType, userID);
        if(testList.isEmpty()){
            throw new UserNotFoundException("No tests found for the given Patient");
        }
        return testList;
    }
    
    @GetMapping("/{patientID}/{userType}/{userID}/getConsultedTests")
    public List<Test> getConsultedTests(@PathVariable Long patientID, @PathVariable String userType, @PathVariable Long userID)
            throws UserNotFoundException {
        List<Test> testList = testService.findConsultedTestsByPatientAndUser(patientID, userType, userID);
        if(testList.isEmpty()){
            throw new UserNotFoundException("No tests found for the given Patient");
        }
        return testList;
    }
    
}
