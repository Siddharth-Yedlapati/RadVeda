package RadVeda.Analytics.Statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface RequestsStatisticsRepository extends JpaRepository<RequestsStatistics, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE requests_statistics SET count = 0 WHERE temporal_scope = 'TODAY'", nativeQuery = true)
    void resetTodayRecords();

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
            value = "UPDATE requests_statistics " +
                    "SET count = :count " +
                    "WHERE requester_type = :requesterType " +
                    "AND request_type = :requestType " +
                    "AND temporal_scope = :temporalScope " +
                    "AND client_type = :clientType " +
                    "AND client_id = :clientId",
            nativeQuery = true
    )
    void updateIfExists(
            Long count,
            String requesterType,
            String requestType,
            String temporalScope,
            String clientType,
            Long clientId
    );

}