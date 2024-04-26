package RadVeda.SuperAdmin.SuperAdminRequests;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;
public interface RequestsRepository  extends JpaRepository<Requests, Long> {

    @Query(value = "SELECT * FROM requests WHERE type_of_request = :type and status = false ORDER BY date_of_request", nativeQuery = true)
    List<Requests> getTypeRequests(String type);

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests SET status = true WHERE id = :Id", nativeQuery = true)
    void updateStatus(Long Id);





}
