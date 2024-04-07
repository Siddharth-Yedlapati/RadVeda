package RadVeda.LabStaff.LabStaff;

import RadVeda.LabStaff.LabStaff.LabStaff;
import RadVeda.LabStaff.LabStaff.LabStaffRequest;
import RadVeda.LabStaff.User;

import java.util.List;
import java.util.Optional;

public interface LabStaffServiceInterface {
    LabStaff addLabStaff(LabStaffRequest request);
    Optional<LabStaff> findLabStaff(Long Id);

    void deleteLabStaff(Long Id);
    List<Long> availableLabStaff();

    User authenticate(String AuthorizationHeader);
}
