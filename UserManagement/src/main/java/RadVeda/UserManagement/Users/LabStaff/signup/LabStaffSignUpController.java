package radveda.usermanagement.Users.LabStaff.signup;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import radveda.usermanagement.Users.LabStaff.events.LabStaffSignUpCompleteEvent;
import radveda.usermanagement.Users.LabStaff.signup.token.LabStaffVerificationToken;
import radveda.usermanagement.Users.LabStaff.signup.token.LabStaffVerificationTokenRepository;
import radveda.usermanagement.Users.LabStaff.user.LabStaff;
import radveda.usermanagement.Users.LabStaff.user.LabStaffService;

@RestController
@RequiredArgsConstructor
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
        if (theToken.getLabStaff().isEnabled()) {
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
