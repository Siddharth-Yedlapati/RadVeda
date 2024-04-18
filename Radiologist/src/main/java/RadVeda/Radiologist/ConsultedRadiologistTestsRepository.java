package RadVeda.Radiologist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface ConsultedRadiologistTestsRepository extends JpaRepository<ConsultedRadiologistTests, Long> {

    @Query(value = "SELECT * FROM consultedradiologisttests WHERE radiologistID = :radiologistID", nativeQuery = true)
    List<ConsultedRadiologistTests> getConsultedTests(Long radiologistID);

    @Query(value = "SELECT * FROM consultedradiologisttests WHERE consulted_testid = :testID", nativeQuery = true)
    List<ConsultedRadiologistTests> getConsultedRadiologists(Long testID);
}
