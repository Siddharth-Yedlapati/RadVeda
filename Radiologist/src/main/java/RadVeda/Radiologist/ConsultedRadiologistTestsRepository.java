package RadVeda.Radiologist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface ConsultedRadiologistTestsRepository extends JpaRepository<ConsultedRadiologistTests, Long> {


}
