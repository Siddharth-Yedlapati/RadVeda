package RadVeda.Admin.SignupRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

public interface SignupRequestRepository extends JpaRepository<SignupRequest, Long> {
    List<SignupRequest> findAll();
    Optional<SignupRequest> findById(Long id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM signup_request WHERE id = :id", nativeQuery = true)
    void deleteSignupRequest(Long id);

    @Query(value = "SELECT user_id FROM signup_request WHERE admin_id = :admin_id", nativeQuery = true)
    List<Long> getSignupRequestsByAdminId(Long admin_id);
}
