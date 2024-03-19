package RadVeda.UserManagement.Users.Admin.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;


public interface AdminDocumentsRepository extends JpaRepository<AdminDocuments, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admindocuments WHERE adminid = :adminID", nativeQuery = true)
    void delete(Long adminID);
}
