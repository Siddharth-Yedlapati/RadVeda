package RadVeda.LabStaff.LabStaff;

import RadVeda.LabStaff.LabStaff.LabStaff;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;


public interface LabStaffRepository extends JpaRepository<LabStaff, Long> {

    List<LabStaff> findAll();
    Optional<LabStaff> findById(Long Id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM lab_staff WHERE Id = :Id", nativeQuery = true)
    void deleteLabStaff(Long Id);

    @Query(value = "SELECT * FROM lab_staff WHERE available = :status", nativeQuery = true)
    List<LabStaff> availableLabStaff(String status);

}