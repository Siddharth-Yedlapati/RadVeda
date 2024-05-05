package RadVeda.Analytics.ChatGPT;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.client.RestTemplate;

import javax.crypto.spec.SecretKeySpec;

@Configuration
public class OpenAIRestTemplateConfig {

    private static final String openaiApiKey;

    static {
        try {
            openaiApiKey = System.getenv("OPENAI_API_KEY");
        } catch (Exception e) {
            throw new RuntimeException("Error extracting OpenAI API Key", e);
        }
    }

    @Bean
    @Qualifier("openaiRestTemplate")
    public RestTemplate openaiRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().add("Authorization", "Bearer " + openaiApiKey);
            return execution.execute(request, body);
        });
        return restTemplate;
    }
}