package RadVeda.UserManagement.Users.Patient.signup;

import RadVeda.UserManagement.Users.Patient.signup.token.PatientGuardianVerificationToken;
import RadVeda.UserManagement.Users.Patient.signup.token.PatientGuardianVerificationTokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.Users.Patient.events.PatientSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Patient.signup.token.PatientVerificationToken;
import RadVeda.UserManagement.Users.Patient.signup.token.PatientVerificationTokenRepository;
import RadVeda.UserManagement.Users.Patient.user.Patient;
import RadVeda.UserManagement.Users.Patient.user.PatientService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/patientSignUp")
public class PatientSignUpController {

    private final PatientService patientService;
    private final ApplicationEventPublisher publisher;
    private final PatientVerificationTokenRepository patientTokenRepository;
    private final PatientGuardianVerificationTokenRepository patientGuardianTokenRepository;

    @PostMapping
    public String registerPatient(@RequestBody PatientSignUpRequest signUpRequest, final HttpServletRequest request) {
        Patient patient = patientService.registerPatient(signUpRequest);
        publisher.publishEvent(new PatientSignUpCompleteEvent(patient, applicationUrl(request)));
        String returnMessage = "Success!! Please check your email to complete your registration";
        if(patient.getPatientguardian() != null)
        {
            returnMessage = "Success!! Please check your and your guardian's email to complete your registration";
        }
        return returnMessage;
    }

    @GetMapping("/verifyPatientEmail")
    public String verifyPatientEmail(@RequestParam("token") String token) {
        PatientVerificationToken theToken = patientTokenRepository.findByToken(token);
        if (theToken.getPatient().isEmailVerified()) {
            String returnMessage = "This account has already been verified. Please login!";
            if(theToken.getPatient().getPatientguardian() != null && !theToken.getPatient().getPatientguardian().isEmailVerified())
            {
                returnMessage = "Your email has already been verified! Waiting for your guardian's email verification.";
            }
            return returnMessage;
        }
        String verificationResult = patientService.validatePatientToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            String returnMessage = "Email verified successfully!! You can now login to your account.";
            if(theToken.getPatient().getPatientguardian() != null && !theToken.getPatient().getPatientguardian().isEmailVerified())
            {
                returnMessage = "Email verified successfully!! Waiting for your guardian's email verification.";
            }
            return returnMessage;
        }
        return "Invalid verification token";
    }

    @GetMapping("/verifyPatientGuardianEmail")
    public String verifyPatientGuardianEmail(@RequestParam("token") String token) {
        PatientGuardianVerificationToken theToken = patientGuardianTokenRepository.findByToken(token);
        if (theToken.getPatientguardian().isEmailVerified()) {
            return "Your email has already been verified!";
        }
        String verificationResult = patientService.validatePatientGuardianToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email verified successfully!!";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
