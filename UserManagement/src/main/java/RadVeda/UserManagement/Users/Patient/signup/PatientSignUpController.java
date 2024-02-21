package radveda.usermanagement.Users.Patient.signup;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import radveda.usermanagement.Users.Patient.events.PatientSignUpCompleteEvent;
import radveda.usermanagement.Users.Patient.signup.token.PatientVerificationToken;
import radveda.usermanagement.Users.Patient.signup.token.PatientVerificationTokenRepository;
import radveda.usermanagement.Users.Patient.user.Patient;
import radveda.usermanagement.Users.Patient.user.PatientService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/patientSignUp")
public class PatientSignUpController {

    private final PatientService patientService;
    private final ApplicationEventPublisher publisher;
    private final PatientVerificationTokenRepository patientTokenRepository;

    @PostMapping
    public String registerPatient(@RequestBody PatientSignUpRequest signUpRequest, final HttpServletRequest request) {
        Patient patient = patientService.registerPatient(signUpRequest);
        publisher.publishEvent(new PatientSignUpCompleteEvent(patient, applicationUrl(request)));
        return "Success!! Please check your email to complete your registration";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        PatientVerificationToken theToken = patientTokenRepository.findByToken(token);
        if (theToken.getPatient().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = patientService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!! You can now login to your account.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
