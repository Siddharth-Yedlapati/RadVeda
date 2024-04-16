package RadVeda.Admin.SignupRequest;

import RadVeda.Admin.exceptions.UnauthorizedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/signup-requests")
public class SignupRequestController {

    private final SignupRequestService signupRequestService;

    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping("/add")
    public String addSignupRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                   @RequestBody SignupRequestRequest signupRequestRequest,
                                   final HttpServletRequest request) throws UnauthorizedUserException {

        signupRequestService.addSignupRequest(signupRequestRequest);
        return "Signup request successfully added";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @DeleteMapping("/{signupRequestId}/delete")
    public String deleteSignupRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                      @PathVariable Long signupRequestId) throws UnauthorizedUserException {

        signupRequestService.deleteSignupRequest(signupRequestId);
        return "Signup request successfully deleted";
    }

    @GetMapping("/{adminId}/getRequests")
    public List<Long> getSignupRequestsOfAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                               @PathVariable Long adminId) {

        return signupRequestService.getSignupRequestsOfAdmin(adminId);


    }
}
