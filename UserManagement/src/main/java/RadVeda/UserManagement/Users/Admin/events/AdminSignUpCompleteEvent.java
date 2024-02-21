package radveda.usermanagement.Users.Admin.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import radveda.usermanagement.Users.Admin.user.Admin;

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
