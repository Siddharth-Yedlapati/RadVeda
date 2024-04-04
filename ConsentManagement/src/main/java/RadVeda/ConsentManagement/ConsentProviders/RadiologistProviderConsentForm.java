package RadVeda.ConsentManagement.ConsentProviders;

import RadVeda.ConsentManagement.StringListDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

//seekerType<delimiter>SeekerId<delimiter>AnnotationsAllowed<delimiter>NotesAllowed
public record RadiologistProviderConsentForm(
        Long consentRequestId,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> currentTest,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> otherTests) {
}
