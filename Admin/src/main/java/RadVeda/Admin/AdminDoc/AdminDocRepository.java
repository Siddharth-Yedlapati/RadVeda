//package RadVeda.Admin.AdminDoc;
//import jakarta.transaction.Transactional;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface AdminDocRepository extends JpaRepository<AdminDoc, Long> {
//    List<AdminDoc> findAll();
//    Optional<AdminDoc> findById(Long Id);
//
//    @Modifying
//    @Transactional
//    @Query(value = "DELETE FROM admin_doc WHERE Id = :Id", nativeQuery = true)
//    void deleteAdminDoc(Long Id);
//
//    @Query(value = "SELECT doc_id FROM admin_doc WHERE doc_id=:DocId", nativeQuery = true)
//    List<Long> getAdminDoc(Long DocId);
//
//}

package RadVeda.Admin.AdminDoc;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AdminDocRepository extends JpaRepository<AdminDoc, Long> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM admin_doc WHERE doc_id = :doc_id", nativeQuery = true)
    void deleteAdminDoc(Long doc_id);

    @Query(value = "SELECT doc_id FROM admin_doc WHERE admin_id = :admin_id", nativeQuery = true)
    List<Long> getAdminDoc(Long admin_id);

    @Query(value = "SELECT admin_id from admin_doc WHERE doc_id = :doc_id", nativeQuery = true)
    List<Long> getAdmin(Long doc_id);
}
