package RadVeda.UserManagement.Users.Admin.user;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
    @NonNull Optional<Admin> findById(@NonNull Long id);

   Optional<Admin> findByOrgName(String orgName);

}
