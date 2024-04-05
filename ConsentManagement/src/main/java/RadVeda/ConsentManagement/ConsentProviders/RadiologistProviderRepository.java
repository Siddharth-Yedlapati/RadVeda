package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RadiologistProviderRepository {
    @Query(value = "SELECT rp.testId FROM RadiologistProvider rp WHERE rp.consentProviderId = :providerId AND rp.annotationsAllowed = false AND rp.notesAllowed = false", nativeQuery = true)
    List<Long> findTestIdByConsentProviderIdAndAnnotationsAndNotesAllowedIsFalse(Long providerId);
}
