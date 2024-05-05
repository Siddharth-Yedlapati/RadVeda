package RadVeda.UserManagement.Users.Admin.signup;

import RadVeda.UserManagement.Users.Admin.user.AdminDocumentsRepository;
import RadVeda.UserManagement.Users.Admin.user.AdminRepository;
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
    private final AdminDocumentsRepository adminDocumentsRepository;
    private final AdminRepository adminRepository;
    private final AdminVerificationTokenRepository adminTokenRepository;

    @PostMapping
    public String registerAdmin(@RequestBody AdminSignUpRequest signUpRequest, final HttpServletRequest request) {
        Admin admin = adminService.registerAdmin(signUpRequest);
        String res = adminService.requestSignUp(admin);

        if(res.equalsIgnoreCase("success")) {

            publisher.publishEvent(new AdminSignUpCompleteEvent(admin, applicationUrl(request)));
            return "Success!! Please check your email to complete your registration";
        }
        adminTokenRepository.deleteByAdminId(admin.getId());
        adminDocumentsRepository.delete(admin.getId());
        adminRepository.deleteById(admin.getId());
        return "Failed to register!";

    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        AdminVerificationToken theToken = adminTokenRepository.findByToken(token);
        if (theToken.getAdmin().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = adminService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("success")) {
            if (theToken.getAdmin().isEnabled()) return "Email verified successfully!! You can now login to your account.";
            else return "Email verified successfully! Please wait for the approval from team RadVeda.";
        }
        return "Please signUp again";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
