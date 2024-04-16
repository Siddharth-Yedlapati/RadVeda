package RadVeda.Admin.Admin;
import RadVeda.Admin.User;
import java.util.List;
import java.util.Optional;
public interface AdminServiceInterface {
    Admin addAdmin(AdminRequest request);
    Optional<Admin> findById(Long Id);
    void deleteAdmins(Long Id);
    User authenticate(String AuthorizationHeader);
    List<Admin> getAdmins( List<Long> AdminIDs);
}

