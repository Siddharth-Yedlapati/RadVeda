package RadVeda.Analytics.Statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface AccountStatisticsRepository extends JpaRepository<AccountStatistics, Long> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE account_statistics SET count = 0 WHERE temporal_scope = 'TODAY'", nativeQuery = true)
    void resetTodayRecords();

    Optional<AccountStatistics> findByAccountHolderTypeAndAccountOperationTypeAndTemporalScopeAndClientTypeAndClientId(
            String accountHolderType,
            String accountOperationType,
            String temporalScope,
            String clientType,
            Long clientId
    );

    @Modifying
    @Transactional
    @Query(
            value = "UPDATE account_statistics " +
                    "SET count = :count " +
                    "WHERE account_holder_type = :accountHolderType " +
                    "AND account_operation_type = :accountOperationType " +
                    "AND temporal_scope = :temporalScope " +
                    "AND client_type = :clientType " +
                    "AND client_id = :clientId",
            nativeQuery = true
    )
    void updateIfExists(
            Long count,
            String accountHolderType,
            String accountOperationType,
            String temporalScope,
            String clientType,
            Long clientId
    );

}


