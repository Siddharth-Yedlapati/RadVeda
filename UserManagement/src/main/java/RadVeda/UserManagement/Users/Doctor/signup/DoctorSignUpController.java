package RadVeda.UserManagement.Users.Doctor.signup;

import RadVeda.UserManagement.Users.Admin.events.AdminSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Admin.signup.token.AdminVerificationToken;
import RadVeda.UserManagement.Users.Admin.user.Admin;
import RadVeda.UserManagement.Users.Doctor.user.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.Users.Doctor.events.DoctorSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationToken;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationTokenRepository;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/doctorSignUp")
public class DoctorSignUpController {

    private final DoctorService doctorService;
    private final ApplicationEventPublisher publisher;
    private final DoctorVerificationTokenRepository doctorTokenRepository;
    private final DoctorDocumentsRepository doctorDocumentsRepository;
    private final DoctorRepository doctorRepository;
    
    
    @PostMapping
    public String registerDoctor(@RequestBody DoctorSignUpRequest signUpRequest, final HttpServletRequest request) {
        Doctor doctor = doctorService.registerDoctor(signUpRequest);
        String res = doctorService.requestSignUp(doctor);

        if(res.equalsIgnoreCase("success")) {
            publisher.publishEvent(new DoctorSignUpCompleteEvent(doctor, applicationUrl(request)));
            return "Success!! Please check your email to complete your registration";
        }
        doctorTokenRepository.deleteByDocId(doctor.getId());
        doctorDocumentsRepository.delete(doctor.getId());
        doctorRepository.deleteById(doctor.getId());
        return "Failed to register!" + res;
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token) {
        DoctorVerificationToken theToken = doctorTokenRepository.findByToken(token);
        if (theToken.getDoctor().isEnabled()) {
            return "This account has already been verified. Please login!";
        }
        String verificationResult = doctorService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("success")) {
            if (theToken.getDoctor().isEnabled()) return "Email verified successfully!! You can now login to your account.";
            else return "Email verified successfully! Please wait for the approval from Admin";
        }
        return "Please signUp again";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
