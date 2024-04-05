package RadVeda.ConsentManagement.ConsentProviders;

import RadVeda.ConsentManagement.StringListDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

//consentSeekerType<delimiter>consentSeekerId<delimiter>notesAllowed
public record DoctorProviderConsentForm(
        Long consentRequestId,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> currentTest,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> otherTests) {
}
