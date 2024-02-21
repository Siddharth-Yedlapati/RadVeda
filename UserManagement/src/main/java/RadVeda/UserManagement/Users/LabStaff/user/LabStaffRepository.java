package radveda.usermanagement.Users.LabStaff.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LabStaffRepository extends JpaRepository<LabStaff, Long> {
    Optional<LabStaff> findByEmail(String email);
}
