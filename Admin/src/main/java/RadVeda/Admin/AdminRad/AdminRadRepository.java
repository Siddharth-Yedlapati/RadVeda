package RadVeda.Admin.AdminRad;;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface AdminRadRepository extends JpaRepository<AdminRad, Long> {
    List<AdminRad> findAll();
    Optional<AdminRad> findById(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admin_rad WHERE id = :id", nativeQuery = true)
    void deleteAdminRad(Long id);

    @Query(value = "SELECT rad_id FROM admin_rad WHERE admin_id = :admin_id", nativeQuery = true)
    List<Long> getAdminRad(Long admin_id);
}
