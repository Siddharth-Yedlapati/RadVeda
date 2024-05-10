package RadVeda.Radiologist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface RadiologistTestsRepository extends JpaRepository<RadiologistTests, Long> {

    @Query(value = "SELECT * FROM radiologisttests WHERE testid = :testID", nativeQuery = true)
    Optional<RadiologistTests> gettestbyid(String testID);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM radiologisttests WHERE testid = :testID", nativeQuery = true)
    void deleteTest(String testID);
}
