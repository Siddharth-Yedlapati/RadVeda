package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RadiologistProviderRepository extends JpaRepository<RadiologistProvider, Long> {
    @Query(value = "SELECT rp.testId FROM RadiologistProvider rp WHERE rp.consentProviderId = :consentProviderId AND rp.consentSeekerType = :consentSeekerType AND rp.consentSeekerId = :consentSeekerid AND (rp.annotationsAllowed = true OR rp.notesAllowed = true)", nativeQuery = true)
    List<Long> findTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, Long consentProviderId);

    Optional<RadiologistProvider> findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);

    void deleteByConsentSeekerTypeAndConsentSeekerId(String consentSeekerType, Long consentSeekerId);

    void deleteByConsentProviderId(Long consentProviderId);
}
