package RadVeda.Admin.AdminRad;

import RadVeda.Admin.User;

import java.util.List;
import java.util.Optional;
public interface AdminRadServiceInterface {

    String addRadForAdmin(Long radId, Long adminId);
    void deleteRecord(Long id);
    List<Long> getRadsOfAdmin(Long adminID);
    Optional<AdminRad> getRads(Long radId);
    User authenticate(String authorizationHeader);
}
