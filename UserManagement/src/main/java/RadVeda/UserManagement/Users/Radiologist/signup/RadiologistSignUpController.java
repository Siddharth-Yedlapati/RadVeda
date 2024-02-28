package RadVeda.UserManagement.Users.Radiologist.signup;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.Users.Radiologist.events.RadiologistSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Radiologist.signup.token.RadiologistVerificationToken;
import RadVeda.UserManagement.Users.Radiologist.signup.token.RadiologistVerificationTokenRepository;
import RadVeda.UserManagement.Users.Radiologist.user.Radiologist;
import RadVeda.UserManagement.Users.Radiologist.user.RadiologistService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/radiologistSignUp")
public class RadiologistSignUpController {

    private final RadiologistService radiologistService;
    private final ApplicationEventPublisher publisher;
    private final RadiologistVerificationTokenRepository radiologistTokenRepository;

    @PostMapping
    public String registerRadiologist(@RequestBody RadiologistSignUpRequest signUpRequest,
            final HttpServletRequest request) {
        Radiologist radiologist = radiologistService.registerRadiologist(signUpRequest);
        publisher.publishEvent(new RadiologistSignUpCompleteEvent(radiologist, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        RadiologistVerificationToken theToken = radiologistTokenRepository.findByToken(token);
        if (theToken.getRadiologist().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = radiologistService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
