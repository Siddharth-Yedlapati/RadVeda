package RadVeda.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findAll();

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM doctor WHERE doctorid = :doctorID", nativeQuery = true)
    void delete(Long doctorID);

}
