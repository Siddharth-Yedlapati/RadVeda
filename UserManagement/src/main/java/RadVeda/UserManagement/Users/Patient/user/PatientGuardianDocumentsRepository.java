package RadVeda.UserManagement.Users.Patient.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface PatientGuardianDocumentsRepository extends JpaRepository<PatientGuardianDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM patientguardiandocuments WHERE patientguardianID = :patientguardianID", nativeQuery = true)
    void delete(Long patientguardianID);
}
