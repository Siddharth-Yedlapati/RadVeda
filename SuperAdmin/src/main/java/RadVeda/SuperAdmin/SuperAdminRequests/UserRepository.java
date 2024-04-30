package RadVeda.SuperAdmin.SuperAdminRequests;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<UserDetails, Long> {


}