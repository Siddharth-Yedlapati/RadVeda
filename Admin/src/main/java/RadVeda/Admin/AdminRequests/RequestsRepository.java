package RadVeda.Admin.AdminRequests;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;
public interface RequestsRepository  extends JpaRepository<Requests, Long> {

    @Query(value = "SELECT * FROM requests WHERE type_of_request = :type and admin_id = :adminId and status LIKE :status ORDER BY date_of_request desc", nativeQuery = true)
    List<Requests> getTypeRequests(String adminId, String type, String status);

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests SET status = :status WHERE id = :Id", nativeQuery = true)
    void updateStatusToAccept(Long Id, String status);

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests SET status = :status WHERE id = :Id", nativeQuery = true)
    void updateStatusToDecline(Long Id, String status);


}
