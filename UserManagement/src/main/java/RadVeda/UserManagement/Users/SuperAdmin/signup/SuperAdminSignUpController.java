package radveda.usermanagement.Users.SuperAdmin.signup;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import radveda.usermanagement.Users.SuperAdmin.events.SuperAdminSignUpCompleteEvent;
import radveda.usermanagement.Users.SuperAdmin.signup.token.SuperAdminVerificationToken;
import radveda.usermanagement.Users.SuperAdmin.signup.token.SuperAdminVerificationTokenRepository;
import radveda.usermanagement.Users.SuperAdmin.user.SuperAdmin;
import radveda.usermanagement.Users.SuperAdmin.user.SuperAdminService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/superadminSignUp")
public class SuperAdminSignUpController {

    private final SuperAdminService superadminService;
    private final ApplicationEventPublisher publisher;
    private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @PostMapping
    public String registerSuperAdmin(@RequestBody SuperAdminSignUpRequest signUpRequest, final HttpServletRequest request) {
        SuperAdmin superadmin = superadminService.registerSuperAdmin(signUpRequest);
        publisher.publishEvent(new SuperAdminSignUpCompleteEvent(superadmin, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        SuperAdminVerificationToken theToken = superadminTokenRepository.findByToken(token);
        if (theToken.getSuperadmin().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = superadminService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
