package RadVeda.UserManagement.Users.LabStaff.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface LabStaffDocumentsRepository extends JpaRepository<LabStaffDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM labstaffdocuments WHERE labstaffid = :labstaffID", nativeQuery = true)
    void delete(Long labstaffID);
}
