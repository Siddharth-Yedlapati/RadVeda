package RadVeda.Collaboration.Messages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface MessageVisibilityRepository extends JpaRepository<MessageVisibility, Long> {

    Optional<MessageVisibility> findByMessageTypeAndMessageIdAndUserTypeAndUserId(String messageType,  Long messageId,  String userType,  Long userId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE message_visibility mv SET mv.visible = :visible " +
            "WHERE mv.message_type = :messageType " +
            "AND mv.message_id = :messageId " +
            "AND mv.user_type = :userType " +
            "AND mv.user_id = :userId ", nativeQuery = true)
    int updateIfExists(String messageType, Long messageId, String userType, Long userId, boolean visible);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO message_visibility (message_type, message_id, user_type, user_id, visible) " +
            "VALUES (:messageType, :messageId, :userType, :userId, :visible)", nativeQuery = true)
    void insertEntry(String messageType, Long messageId, String userType, Long userId, boolean visible);

}
