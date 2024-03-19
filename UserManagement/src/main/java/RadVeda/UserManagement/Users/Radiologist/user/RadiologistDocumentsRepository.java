package RadVeda.UserManagement.Users.Radiologist.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface RadiologistDocumentsRepository extends JpaRepository<RadiologistDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM radiologistdocuments WHERE radiologistid = :radiologistID", nativeQuery = true)
    void delete(Long radiologistID);
}
