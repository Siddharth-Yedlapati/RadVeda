package RadVeda.Analytics.Statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface RequestsStatisticsRepository extends JpaRepository<RequestsStatistics, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests_statistics rs SET rs.count = :resetCountTo WHERE rs.temporal_scope = :temporalScope", nativeQuery = true)
    void resetTodayRecords(String resetCountTo, String temporalScope);

    Optional<RequestsStatistics> findByRequesterTypeAndRequestTypeAndTemporalScopeAndClientTypeAndClientId(
            String requesterType,
            String requestType,
            String temporalScope,
            String clientType,
            Long clientId
    );

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE requests_statistics rs " +
                    "SET rs.count = :count " +
                    "WHERE rs.requester_type = :requesterType " +
                    "AND rs.request_type = :requestType " +
                    "AND rs.temporal_scope = :temporalScope " +
                    "AND rs.client_type = :clientType " +
                    "AND rs.client_id = :clientId",
            nativeQuery = true
    )
    void updateIfExists(
            String count,
            String requesterType,
            String requestType,
            String temporalScope,
            String clientType,
            String clientId
    );

}