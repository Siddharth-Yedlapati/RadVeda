package radveda.usermanagement.Users.LabStaff.events;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import radveda.usermanagement.Users.LabStaff.user.LabStaff;

@Getter
@Setter
public class LabStaffSignUpCompleteEvent extends ApplicationEvent {
    private LabStaff labstaff;
    private String applicationUrl;

    public LabStaffSignUpCompleteEvent(LabStaff labstaff, String applicationUrl) {
        super(labstaff);
        this.labstaff = labstaff;
        this.applicationUrl = applicationUrl;
    }
}
