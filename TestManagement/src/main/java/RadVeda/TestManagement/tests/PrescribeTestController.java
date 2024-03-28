package RadVeda.TestManagement.tests;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import RadVeda.TestManagement.TestService;
import RadVeda.TestManagement.exception.UnauthorisedUserException;
import RadVeda.TestManagement.User;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/prescribe-test")
public class PrescribeTestController {

    private final TestService testService;

    @PostMapping
    public String prescribeTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody TestRequest testRequest,
            final HttpServletRequest request) throws UnauthorisedUserException{

        User currentuser = testService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        testService.prescribeTest(testRequest);
        return "Success!! Test has been prescribed";
    }

    // public String applicationUrl(HttpServletRequest request) {
    //     return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    // }
}
