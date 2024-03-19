package RadVeda.UserManagement.Users.Patient.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface PatientDocumentsRepository extends JpaRepository<PatientDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM patientdocuments WHERE patientid = :patientID", nativeQuery = true)
    void delete(Long patientID);
}
