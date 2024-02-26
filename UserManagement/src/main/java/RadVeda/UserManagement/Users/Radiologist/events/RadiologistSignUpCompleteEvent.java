package RadVeda.UserManagement.Users.Radiologist.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import RadVeda.UserManagement.Users.Radiologist.user.Radiologist;

@Getter
@Setter
public class RadiologistSignUpCompleteEvent extends ApplicationEvent {
    private Radiologist radiologist;
    private String applicationUrl;

    public RadiologistSignUpCompleteEvent(Radiologist radiologist, String applicationUrl) {
        super(radiologist);
        this.radiologist = radiologist;
        this.applicationUrl = applicationUrl;
    }
}
