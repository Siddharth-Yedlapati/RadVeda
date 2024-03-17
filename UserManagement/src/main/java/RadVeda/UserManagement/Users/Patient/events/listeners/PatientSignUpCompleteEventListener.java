package RadVeda.UserManagement.Users.Patient.events.listeners;

import RadVeda.UserManagement.Users.Patient.events.PatientSignUpCompleteEvent;
import RadVeda.UserManagement.Users.Patient.user.PatientGuardian;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import RadVeda.UserManagement.Users.Patient.user.Patient;
import RadVeda.UserManagement.Users.Patient.user.PatientService;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class PatientSignUpCompleteEventListener implements ApplicationListener<PatientSignUpCompleteEvent> {
    private final PatientService patientService;

    private final JavaMailSender mailSender;
    private Patient thePatient;

    private PatientGuardian thePatientGuardian;

    @Override
    public void onApplicationEvent(PatientSignUpCompleteEvent event) {
        // 1. Get the newly registered patient
        thePatient = event.getPatient();
        // 2. Get the patient's guardian
        thePatientGuardian = thePatient.getPatientguardian();

        // 3. Create a verification token for the patient
        String patientVerificationToken = UUID.randomUUID().toString();
        // 4. Save the verification token for the patient
        patientService.savePatientVerificationToken(thePatient, patientVerificationToken);
        // 5 Build the verification url to be sent to the patient
        String patientUrl = event.getApplicationUrl() + "/patientSignUp/verifyPatientEmail?token=" + patientVerificationToken;
        // 6. Send the email to the patient's email
        try {
            sendPatientVerificationEmail(patientUrl);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        if(thePatientGuardian != null)
        {
            // 7. Create a verification token for the patient's guardian
            String patientGuardianVerificationToken = UUID.randomUUID().toString();
            // 8. Save the verification token for the patient's guardian
            patientService.savePatientGuardianVerificationToken(thePatientGuardian, patientGuardianVerificationToken);
            // 9 Build the verification url to be sent to the patient's guardian
            String patientGuardianUrl = event.getApplicationUrl() + "/patientSignUp/verifyPatientGuardianEmail?token=" + patientGuardianVerificationToken;
            // 10. Send the email to the patient's guardian's email
            try {
                sendPatientGuardianVerificationEmail(patientGuardianUrl);
            } catch (MessagingException | UnsupportedEncodingException e) {
                throw new RuntimeException(e);
            }
        }

    }

    public void sendPatientVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Email Verification";
        String senderName = "RadVeda";
        String mailContent = "<p> Hi " + thePatient.getFirstName() + ", </p>" +
                "<p>Thank you for registering with us." + " " +
                "Please follow the link below to complete your registration.</p>" +
                "<a href=\"" + url + "\">Verify your email to activate your account</a>" +
                "<p>Thank you,<br>RadVeda Support Team";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("RadVeda.Team@gmail.com", senderName);
        messageHelper.setTo(thePatient.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }

    public void sendPatientGuardianVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Email Verification";
        String senderName = "RadVeda";
        String mailContent = "<p> Hi " + thePatientGuardian.getFirstName() + ", </p>" +
                "<p>A registration request has been initiated by " + thePatient.getFirstName() + " for a patient's account on RadVeda, and your details have been provided as the guardian. To complete the registration process and activate the account, we need to verify your email address.</p>" +
                "<p>Please follow the link below to verify your email address and confirm your guardianship for " + thePatient.getFirstName() + "'s account:</p>" +
                "<a href=\"" + url + "\">Verify your email to confirm your guardianship</a>" +
                "<p>If you are not the guardian of " + thePatient.getFirstName() + ", please ignore this email.</p>" +
                "<p>Thank you,<br>RadVeda Support Team";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("RadVeda.Team@gmail.com", senderName);
        messageHelper.setTo(thePatientGuardian.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }
}
