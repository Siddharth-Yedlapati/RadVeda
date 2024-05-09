package RadVeda.Admin.AdminLabStaff;

import RadVeda.Admin.User;

import java.util.List;
import java.util.Optional;

public interface AdminLabStaffServiceInterface {
    String addLabStaffForAdmin(Long labStaffId, Long adminId);
    void deleteRecord(Long id);
    List<Long> getLabStaffsOfAdmin(Long adminID);
    Optional<AdminLabStaff> getLabStaffs(Long labstaffId);
    User authenticate(String authorizationHeader);
}
