package RadVeda.ConsentManagement;

import RadVeda.ConsentManagement.ConsentProviders.*;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequest;

import java.util.List;
import java.util.Optional;

public interface ConsentServiceInterface {
    List<Long> getTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, String consentProviderType, Long consentProviderId);
    Optional<ConsentRequest> findConsentRequestById(Long consentRequestId);
    String sendConsentRequest(String consentProviderType, Long consentProviderId, Long testId, String message, List<User> consentSeekers, String authorizationHeader);
    String setDoctorProviderDetails(User currentUser, DoctorProviderConsentForm consentForm, String authorizationHeader);
    String setPatientProviderDetails(User currentUser, PatientProviderConsentForm consentForm, String authorizationHeader);
    String setRadiologistProviderDetails(User currentUser, RadiologistProviderConsentForm consentForm, String authorizationHeader);
    String cleanByDeletedUser(String userType, Long userId);
    DoctorProviderConsent getDoctorProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    PatientProviderConsent getPatientProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    RadiologistProviderConsent getRadiologistProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    User authenticate(String authorizationHeader);
    boolean isUserValid(String userType, Long userId, String authorizationHeader);
    boolean isTestValid(Long testId, String authorizationHeader);
    List<User> parseConsentSeekersList(List<String> consentSeekers);
    List<DoctorProviderConsent> parseDoctorProviderConsentForm(User currentUser, DoctorProviderConsentForm consentForm, String authorizationHeader);
    List<PatientProviderConsent> parsePatientProviderConsentForm(User currentUser, PatientProviderConsentForm consentForm, String authorizationHeader);
    List<RadiologistProviderConsent> parseRadiologistProviderConsentForm(User currentUser, RadiologistProviderConsentForm consentForm, String authorizationHeader);
}
