package RadVeda.ConsentManagement;

import RadVeda.ConsentManagement.ConsentProviders.*;

import java.util.List;

public interface ConsentServiceInterface {
    List<Long> getTestIdsWithSomeConsentedResources(String consentSeekerType, Long consentSeekerId, String consentProviderType, Long consentProviderId);
    String sendConsentRequest(String consentProviderType, Long consentProviderId, Long testId, String message, List<User> consentSeekers, String authorizationHeader);
    String setDoctorProviderDetails(DoctorProviderConsentForm consentForm, String authorizationHeader);
    String setPatientProviderDetails(PatientProviderConsentForm consentForm, String authorizationHeader);
    String setRadiologistProviderDetails(RadiologistProviderConsentForm consentForm, String authorizationHeader);
    String cleanByDeletedUser(String userType, Long userId);
    DoctorProviderConsent getDoctorProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    PatientProviderConsent getPatientProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    RadiologistProviderConsent getRadiologistProviderConsent(String consentSeekerType, Long consentSeekerId, Long consentProviderId, Long testId);
    User authenticate(String authorizationHeader);
    boolean isUserValid(String userType, Long userId, String authorizationHeader);
    boolean isTestValid(Long testId, String authorizationHeader);
    List<User> parseConsentSeekersList(List<String> consentSeekers);
    List<DoctorProviderConsent> parseDoctorProviderConsentForm(DoctorProviderConsentForm consentForm, String authorizationHeader);
    List<PatientProviderConsent> parsePatientProviderConsentForm(PatientProviderConsentForm consentForm, String authorizationHeader);
    List<RadiologistProviderConsent> parseRadiologistProviderConsentForm(RadiologistProviderConsentForm consentForm, String authorizationHeader);
}
