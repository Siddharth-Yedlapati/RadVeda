package RadVeda.UserManagement.Users.Admin.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import RadVeda.UserManagement.Users.Admin.user.Admin;

@Getter
@Setter
public class AdminSignUpCompleteEvent extends ApplicationEvent {
    private Admin admin;
    private String applicationUrl;

    public AdminSignUpCompleteEvent(Admin admin, String applicationUrl) {
        super(admin);
        this.admin = admin;
        this.applicationUrl = applicationUrl;
    }
}
