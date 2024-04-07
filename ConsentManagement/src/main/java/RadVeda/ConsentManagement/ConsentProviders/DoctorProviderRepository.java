package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DoctorProviderRepository extends JpaRepository<DoctorProvider, Long> {
    @Query(value = "SELECT dp.testId FROM DoctorProvider dp WHERE dp.consentProviderId = :consentProviderId AND dp.consentSeekerType = :consentSeekerType AND dp.consentSeekerId = :consentSeekerId AND dp.notesAllowed = true", nativeQuery = true)
    List<Long> findTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, Long consentProviderId);

    Optional<DoctorProvider> findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);

    void deleteByConsentSeekerTypeAndConsentSeekerId(String consentSeekerType, Long consentSeekerId);

    void deleteByConsentProviderId(Long consentProviderId);
}
