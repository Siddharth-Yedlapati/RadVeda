package RadVeda.Admin.Admin;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    List<Admin> findAll();
    Optional<Admin> findById(Long Id);

    @Query(value = "SELECT * FROM admin WHERE Id IN (:ids)", nativeQuery = true)
    List<Admin> getAdmins(@Param("ids") List<Long> ids);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admin WHERE Id = :Id", nativeQuery = true)
    void deleteAdmins(@Param("Id") Long Id);
}
