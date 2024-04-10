package RadVeda.TestManagement;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import RadVeda.TestManagement.exception.InvalidInputFormatException;
import RadVeda.TestManagement.exception.UserNotFoundException;
import RadVeda.TestManagement.exception.UnauthorisedUserException;
// import RadVeda.TestManagement.security.UserManagementDetailsService;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/tests")
public class TestController {
    private final TestService testService;

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:9202" })
    @GetMapping("/{testID}/getTest")
    public Test getTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testID)
            throws InvalidInputFormatException, UserNotFoundException, UnauthorisedUserException {
        
        User currentuser = testService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Optional<Test> test = testService.findById(testID);
        if (test.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch test details");
        }

        return test.get();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getTests")
    public List<Test> getTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader) throws UserNotFoundException, UnauthorisedUserException {
        User currentuser = testService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }     
        List<Test> testlist = testService.findAllTests();
        if(testlist.isEmpty()){
            throw new UserNotFoundException("There are no tests currently prescribed");
        }
        return testlist;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{userType}/{userID}/getTests")
    public List<Test> getTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String userType, @PathVariable Long userID)
                throws UserNotFoundException, UnauthorisedUserException {
        User currentuser = testService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        } 
        List<Test> testlist = testService.findAllTestsByUser(userType, userID);
        if(testlist.isEmpty()){
            throw new UserNotFoundException("No tests found for the given ID");
        }
        return testlist;
    }

    // TODO: make this api accessible only to superadmins, and create a new api for users which doesnt take userID as a parameter
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{patientID}/{userType}/{userID}/getTests")
    public List<Test> getTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long patientID, @PathVariable String userType, @PathVariable Long userID)
            throws UserNotFoundException, UnauthorisedUserException {
        User currentuser = testService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        List<Test> testList = testService.findAllTestsByPatientAndUser(patientID, userType, userID);
        if(testList.isEmpty()){
            throw new UserNotFoundException("No tests found for the given Patient");
        }
        return testList;
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{patientID}/{userType}/{userID}/getConsultedTests")
    public List<Test> getConsultedTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long patientID, @PathVariable String userType, @PathVariable Long userID)
            throws UserNotFoundException, UnauthorisedUserException {
        User currentuser = testService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        List<Test> testList = testService.findConsultedTestsByPatientAndUser(patientID, userType, userID);
        if(testList.isEmpty()){
            throw new UserNotFoundException("No consulted tests found for the given Patient");
        }
        return testList;
    }

    @GetMapping("/{userType}/{userID}/getAllPrimaryandConsultedTests")
    public List<Test> getAllPrimaryandConsultedTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String userType, @PathVariable Long userID)
                throws UserNotFoundException, UnauthorisedUserException {
        User currentuser = testService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        } 
        List<Test> testlist = testService.findAllPrimaryAndConsultedTestsByUser(authorizationHeader ,userType, userID);
        if(testlist.isEmpty()){
            throw new UserNotFoundException("No tests found for the given ID");
        }
        return testlist;
    }

    
}
