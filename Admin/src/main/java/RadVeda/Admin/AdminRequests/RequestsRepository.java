package RadVeda.Admin.AdminRequests;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;
public interface RequestsRepository  extends JpaRepository<Requests, Long> {

    @Query(value = "SELECT * FROM requests WHERE type_of_request = :type and admin_id = :adminId and status LIKE 'TBD' ORDER BY date_of_request desc", nativeQuery = true)
    List<Requests> getTypeRequests(Long adminId, String type);

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests SET status = 'ACCEPTED' WHERE id = :Id", nativeQuery = true)
    void updateStatusToAccept(Long Id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests SET status = 'DECLINED' WHERE id = :Id", nativeQuery = true)
    void updateStatusToDecline(Long Id);


}
