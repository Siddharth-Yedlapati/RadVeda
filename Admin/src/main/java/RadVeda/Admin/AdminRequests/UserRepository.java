package RadVeda.Admin.AdminRequests;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<UserDetails, Long> {


}