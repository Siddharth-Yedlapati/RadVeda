package RadVeda.LabStaff.LabStaffTest;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LabStaffTestRepository extends JpaRepository<LabStaffTest, Long> {
    List<LabStaffTest> findAll();
    Optional<LabStaffTest> findById(Long Id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM lab_staff_test WHERE Id = :Id", nativeQuery = true)
    void deleteLabStaffTest(Long Id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM lab_staff_test WHERE lab_staff_id = :Id", nativeQuery = true)
    void deleteTestsOfLabStaff(Long Id);

    @Query(value = "SELECT test_id FROM lab_staff_test WHERE lab_staff_id=:labStaffID", nativeQuery = true)
    List<Long> getTests(Long labStaffID);

}