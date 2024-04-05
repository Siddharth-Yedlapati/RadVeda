package RadVeda.ConsentManagement.ConsentProviders;

import RadVeda.ConsentManagement.StringListDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

//consentSeekerType<delimiter>consentSeekerId<delimiter>annotationsAllowed<delimiter>notesAllowed
public record RadiologistProviderConsentForm(
        Long consentRequestId,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> currentTest,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> otherTests) {
}
