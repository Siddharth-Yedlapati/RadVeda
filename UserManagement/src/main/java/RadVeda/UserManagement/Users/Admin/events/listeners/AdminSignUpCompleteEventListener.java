package radveda.usermanagement.Users.Admin.events.listeners;

import radveda.usermanagement.Users.Admin.events.AdminSignUpCompleteEvent;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import radveda.usermanagement.Users.Admin.user.Admin;
import radveda.usermanagement.Users.Admin.user.AdminService;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class AdminSignUpCompleteEventListener implements ApplicationListener<AdminSignUpCompleteEvent> {
    private final AdminService adminService;

    private final JavaMailSender mailSender;
    private Admin theAdmin;

    @Override
    public void onApplicationEvent(AdminSignUpCompleteEvent event) {
        // 1. Get the newly registered admin
        theAdmin = event.getAdmin();
        // 2. Create a verification token for the admin
        String verificationToken = UUID.randomUUID().toString();
        // 3. Save the verification token for the admin
        adminService.saveAdminVerificationToken(theAdmin, verificationToken);
        // 4 Build the verification url to be sent to the admin
        String url = event.getApplicationUrl() + "/adminSignUp/verifyEmail?token=" + verificationToken;
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
        String mailContent = "<p> Hi " + theAdmin.getFirstName() + ", </p>" +
                "<p>Thank you for registering with us." + " " +
                "Please follow the link below to complete your registration.</p>" +
                "<a href=\"" + url + "\">Verify your email to activate your account</a>" +
                "<p>Thank you,<br>RadVeda Support Team";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("RadVeda.Team@gmail.com", senderName);
        messageHelper.setTo(theAdmin.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }
}
