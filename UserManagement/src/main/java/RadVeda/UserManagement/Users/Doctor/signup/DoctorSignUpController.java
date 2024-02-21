package radveda.usermanagement.Users.Doctor.signup;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import radveda.usermanagement.Users.Doctor.events.DoctorSignUpCompleteEvent;
import radveda.usermanagement.Users.Doctor.signup.token.DoctorVerificationToken;
import radveda.usermanagement.Users.Doctor.signup.token.DoctorVerificationTokenRepository;
import radveda.usermanagement.Users.Doctor.user.Doctor;
import radveda.usermanagement.Users.Doctor.user.DoctorService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/doctorSignUp")
public class DoctorSignUpController {

    private final DoctorService doctorService;
    private final ApplicationEventPublisher publisher;
    private final DoctorVerificationTokenRepository doctorTokenRepository;

    @PostMapping
    public String registerDoctor(@RequestBody DoctorSignUpRequest signUpRequest, final HttpServletRequest request) {
        Doctor doctor = doctorService.registerDoctor(signUpRequest);
        publisher.publishEvent(new DoctorSignUpCompleteEvent(doctor, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        DoctorVerificationToken theToken = doctorTokenRepository.findByToken(token);
        if (theToken.getDoctor().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = doctorService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
