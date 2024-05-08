package RadVeda.ConsentManagement.ConsentProviders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Modifying;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorProviderRepository extends JpaRepository<DoctorProvider, Long> {
    @Query(value = "SELECT dp.test_id FROM doctor_provider dp WHERE dp.consent_provider_id = :consentProviderId AND dp.consent_seeker_type = :consentSeekerType AND dp.consent_Seeker_id = :consentSeekerId AND dp.notes_allowed = :status", nativeQuery = true)
    List<Long> findTestIdsWithSomeConsentedResources(String consentSeekerType, String consentSeekerId, String consentProviderId, String status);

    Optional<DoctorProvider> findByConsentSeekerTypeAndConsentSeekerIdAndConsentProviderIdAndTestId(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);

    @Transactional
    @Modifying
    void deleteByConsentSeekerTypeAndConsentSeekerId(String consentSeekerType, String consentSeekerId);

    @Transactional
    @Modifying
    void deleteByConsentProviderId(String consentProviderId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE doctor_provider d SET d.notes_allowed = :notesAllowed " +
            "WHERE d.consent_seeker_type = :consentSeekerType " +
            "AND d.consent_seeker_id = :consentSeekerId " +
            "AND d.consent_provider_id = :consentProviderId " +
            "AND d.test_id = :testId", nativeQuery = true)
    int updateIfExists(String consentSeekerType,
                            String consentSeekerId,
                            String consentProviderId,
                            String testId,
                            String notesAllowed);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO doctor_provider (consent_seeker_type, consent_seeker_id, consent_provider_id, test_id, notes_allowed) " +
            "VALUES (:consentSeekerType, :consentSeekerId, :consentProviderId, :testId, :notesAllowed)", nativeQuery = true)
    void insertEntry(String consentSeekerType,
                           String consentSeekerId,
                           String consentProviderId,
                           String testId,
                           String notesAllowed);

}
