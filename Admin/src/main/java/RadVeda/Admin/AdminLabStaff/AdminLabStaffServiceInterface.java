package RadVeda.Admin.AdminLabStaff;

import RadVeda.Admin.User;

import java.util.List;
import java.util.Optional;

public interface AdminLabStaffServiceInterface {
    AdminLabStaff addLabStaffforAdmin(AdminLabStaffRequest request);
    void deleteRecord(Long id);
    List<Long> getLabStaffsOfAdmin(Long adminID);
    Optional<AdminLabStaff> getLabStaffs(Long labstaffId);
    User authenticate(String authorizationHeader);
}
