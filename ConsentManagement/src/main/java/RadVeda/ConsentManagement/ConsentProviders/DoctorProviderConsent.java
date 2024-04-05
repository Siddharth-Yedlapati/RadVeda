package RadVeda.ConsentManagement.ConsentProviders;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorProviderConsent {
    private String consentSeekerType;
    private Long consentSeekerId;
    private Long consentProviderId;
    private Long testId;
    private boolean notesAllowed;
}
