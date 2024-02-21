package radveda.usermanagement.Users.SuperAdmin.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import radveda.usermanagement.Users.SuperAdmin.user.SuperAdmin;

@Getter
@Setter
public class SuperAdminSignUpCompleteEvent extends ApplicationEvent {
    private SuperAdmin superadmin;
    private String applicationUrl;

    public SuperAdminSignUpCompleteEvent(SuperAdmin superadmin, String applicationUrl) {
        super(superadmin);
        this.superadmin = superadmin;
        this.applicationUrl = applicationUrl;
    }
}
