package RadVeda.UserManagement.Users.LabStaff.signup;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.Users.LabStaff.events.LabStaffSignUpCompleteEvent;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationToken;
import RadVeda.UserManagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;
import RadVeda.UserManagement.Users.LabStaff.user.LabStaff;
import RadVeda.UserManagement.Users.LabStaff.user.LabStaffService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/labstaffSignUp")
public class LabStaffSignUpController {

    private final LabStaffService labstaffService;
    private final ApplicationEventPublisher publisher;
    private final LabStaffVerificationTokenRepository labstaffTokenRepository;

    @PostMapping
    public String registerLabStaff(@RequestBody LabStaffSignUpRequest signUpRequest, final HttpServletRequest request) {
        LabStaff labstaff = labstaffService.registerLabStaff(signUpRequest);
        publisher.publishEvent(new LabStaffSignUpCompleteEvent(labstaff, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        LabStaffVerificationToken theToken = labstaffTokenRepository.findByToken(token);
        if (theToken.getLabstaff().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = labstaffService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
