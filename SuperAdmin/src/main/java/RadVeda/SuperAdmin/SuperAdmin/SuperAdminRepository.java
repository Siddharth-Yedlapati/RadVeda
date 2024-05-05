package RadVeda.SuperAdmin.SuperAdmin;

import RadVeda.SuperAdmin.SuperAdmin.SuperAdmin;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;


public interface SuperAdminRepository extends JpaRepository<SuperAdmin, Long> {

    List<SuperAdmin> findAll();
    Optional<SuperAdmin> findById(Long Id);

    @Query(value = "SELECT * FROM super_admin WHERE Id IN (:ids)", nativeQuery = true)
    List<SuperAdmin> getSuperAdmins(@Param("ids") List<Long> ids);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM super_admin WHERE Id = :Id", nativeQuery = true)
    void deleteSuperAdmin(Long Id);

}