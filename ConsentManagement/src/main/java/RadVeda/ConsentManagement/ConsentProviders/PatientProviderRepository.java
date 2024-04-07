package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PatientProviderRepository extends JpaRepository<PatientProvider, Long> {
    @Query(value = "SELECT pp.testId FROM PatientProvider pp WHERE pp.consentProviderId = :consentProviderId AND pp.consentSeekerType = :consentSeekerType AND pp.consentSeekerId = :consentSeekerId AND (pp.imagesAllowed = true OR pp.reportAllowed = true)", nativeQuery = true)
    List<Long> findTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, Long consentProviderId);

    Optional<PatientProvider> findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);

    void deleteByConsentSeekerTypeAndConsentSeekerId(String consentSeekerType, Long consentSeekerId);

    void deleteByConsentProviderId(Long consentProviderId);
}
