package RadVeda.SuperAdmin.SuperAdmin;

import RadVeda.SuperAdmin.User;
import java.util.List;

import java.util.Optional;

public interface SuperAdminServiceInterface {

    SuperAdmin addSuperAdmin(SuperAdminRequest request);
    Optional<SuperAdmin> findById(Long Id);

    void deleteSuperAdmin(Long Id);

    User authenticate(String AuthorizationHeader);
    List<SuperAdmin> getSuperAdmins( List<Long> SuperAdminIDs);

}
