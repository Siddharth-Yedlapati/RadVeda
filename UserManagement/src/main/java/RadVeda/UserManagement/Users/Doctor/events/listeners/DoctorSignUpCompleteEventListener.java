package radveda.usermanagement.Users.Doctor.events.listeners;

import radveda.usermanagement.Users.Doctor.events.DoctorSignUpCompleteEvent;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import radveda.usermanagement.Users.Doctor.user.Doctor;
import radveda.usermanagement.Users.Doctor.user.DoctorService;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class DoctorSignUpCompleteEventListener implements ApplicationListener<DoctorSignUpCompleteEvent> {
    private final DoctorService doctorService;

    private final JavaMailSender mailSender;
    private Doctor theDoctor;

    @Override
    public void onApplicationEvent(DoctorSignUpCompleteEvent event) {
        // 1. Get the newly registered doctor
        theDoctor = event.getDoctor();
        // 2. Create a verification token for the doctor
        String verificationToken = UUID.randomUUID().toString();
        // 3. Save the verification token for the doctor
        doctorService.saveDoctorVerificationToken(theDoctor, verificationToken);
        // 4 Build the verification url to be sent to the doctor
        String url = event.getApplicationUrl() + "/doctorSignUp/verifyEmail?token=" + verificationToken;
        // 5. Send the email.
        try {
            sendVerificationEmail(url);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        //log.info("Click the link to verify your registration :  {}", url);
    }

    public void sendVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Email Verification";
        String senderName = "RadVeda";
        String mailContent = "<p> Hi " + theDoctor.getFirstName() + ", </p>" +
                "<p>Thank you for registering with us." + " " +
                "Please follow the link below to complete your registration.</p>" +
                "<a href=\"" + url + "\">Verify your email to activate your account</a>" +
                "<p>Thank you,<br>RadVeda Support Team";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("RadVeda.Team@gmail.com", senderName);
        messageHelper.setTo(theDoctor.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }
}
