package radveda.usermanagement.Users.Admin.events;

import com.dailycodework.sbemailverificationdemo.user.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

@Getter
@Setter
public class AdminSignUpCompleteEvent extends ApplicationEvent {
    private User user;
    private String applicationUrl;

    public AdminSignUpCompleteEvent(User user, String applicationUrl) {
        super(user);
        this.user = user;
        this.applicationUrl = applicationUrl;
    }
}
