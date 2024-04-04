package RadVeda.Radiologist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface RadiologistRepository extends JpaRepository<Radiologist, Long> {
    List<Radiologist> findAll();

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM radiologist WHERE id = :radiologistID", nativeQuery = true)
    void delete(Long radiologistID);

}
