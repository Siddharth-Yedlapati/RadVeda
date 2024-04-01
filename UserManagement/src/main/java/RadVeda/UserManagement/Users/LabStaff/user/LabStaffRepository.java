package RadVeda.UserManagement.Users.LabStaff.user;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LabStaffRepository extends JpaRepository<LabStaff, Long> {
    Optional<LabStaff> findByEmail(String email);
    @NonNull Optional<LabStaff> findById(@NonNull Long id);
}
