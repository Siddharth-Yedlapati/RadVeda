package RadVeda.Admin.AdminLabStaff;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AdminLabStaffRepository extends JpaRepository<AdminLabStaff, Long> {
    List<AdminLabStaff> findAll();
    Optional<AdminLabStaff> findById(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admin_lab_staff WHERE id = :id", nativeQuery = true)
    void deleteAdminLabStaff(Long id);

    @Query(value = "SELECT labstaff_id FROM admin_lab_staff WHERE admin_id = :admin_id", nativeQuery = true)
    List<Long> getAdminLabStaff(Long admin_id);
}
