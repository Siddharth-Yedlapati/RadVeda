package RadVeda.Analytics.Statistics;

import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

public interface LastUpdateRepository extends JpaRepository<LastUpdate, Long> {

    @NonNull Optional<LastUpdate> findById(@NonNull Long id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE last_update lu SET lu.date = :newDate WHERE lu.id = :id", nativeQuery = true)
    void updateDateById(Long id, LocalDate newDate);
}
