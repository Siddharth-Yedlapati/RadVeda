package radveda.usermanagement.Users.Doctor.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import radveda.usermanagement.Users.Doctor.user.Doctor;

@Getter
@Setter
public class DoctorSignUpCompleteEvent extends ApplicationEvent {
    private Doctor doctor;
    private String applicationUrl;

    public DoctorSignUpCompleteEvent(Doctor doctor, String applicationUrl) {
        super(doctor);
        this.doctor = doctor;
        this.applicationUrl = applicationUrl;
    }
}
