package RadVeda.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface ConsultedDoctorTestsRepository extends JpaRepository<ConsultedDoctorTests, Long> {

    @Query(value = "SELECT * FROM consulteddoctortests WHERE doctorID = :doctorID", nativeQuery = true)
    List<ConsultedDoctorTests> getConsultedTests(Long doctorID);

    @Query(value = "SELECT * FROM consulteddoctortests WHERE consulted_testid = :testID", nativeQuery = true)  // check why column name is different in SQL
    List<ConsultedDoctorTests> getConsultedDoctors(Long testID);
}
