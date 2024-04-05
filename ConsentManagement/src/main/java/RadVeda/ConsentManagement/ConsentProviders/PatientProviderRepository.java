package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientProviderRepository {
    @Query(value = "SELECT pp.testId FROM PatientProvider pp WHERE pp.consentProviderId = :consentProviderId AND pp.imagesAllowed = false", nativeQuery = true)
    List<Long> findTestIdsByConsentProviderIdAndImagesAllowedIsFalse(Long consentProviderId);
}
