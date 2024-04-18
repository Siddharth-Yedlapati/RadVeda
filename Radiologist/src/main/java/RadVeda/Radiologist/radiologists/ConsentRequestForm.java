package RadVeda.Radiologist.radiologists;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

public record ConsentRequestForm(
        String consentProviderType,
        Long consentProviderId,
        Long testId,
        String message,
        @JsonDeserialize(using = StringListDeserializer.class)
        List<String> consentSeekers
) {
}
