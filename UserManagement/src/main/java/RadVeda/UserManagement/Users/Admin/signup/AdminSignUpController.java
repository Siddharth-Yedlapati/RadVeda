package RadVeda.UserManagement.Users.Admin.signup;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.Users.Admin.events.AdminSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationToken;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationTokenRepository;
import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Admin.user.AdminService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/adminSignUp")
public class AdminSignUpController {

    private final AdminService adminService;
    private final ApplicationEventPublisher publisher;
    private final AdminVerificationTokenRepository adminTokenRepository;

    @PostMapping
    public String registerAdmin(@RequestBody AdminSignUpRequest signUpRequest, final HttpServletRequest request) {
        Admin admin = adminService.registerAdmin(signUpRequest);
        publisher.publishEvent(new AdminSignUpCompleteEvent(admin, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        AdminVerificationToken theToken = adminTokenRepository.findByToken(token);
        if (theToken.getAdmin().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = adminService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
