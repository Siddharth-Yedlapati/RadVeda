package RadVeda.UserManagement.Users.Doctor.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface DoctorDocumentsRepository extends JpaRepository<DoctorDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM doctordocuments WHERE doctorid = :doctorID", nativeQuery = true)
    void delete(Long doctorID);
}
