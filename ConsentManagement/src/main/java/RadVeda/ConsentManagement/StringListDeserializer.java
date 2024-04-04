package RadVeda.ConsentManagement;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class StringListDeserializer extends StdDeserializer<List<String>> {
    public StringListDeserializer() {
        this(null);
    }

    public StringListDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public List<String> deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException {
        JsonNode node = jp.getCodec().readTree(jp);
        List<String> strings = new ArrayList<>();
        for (JsonNode jsonNode : node) {
            strings.add(jsonNode.asText());
        }
        return strings;
    }
}