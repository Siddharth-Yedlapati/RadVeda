package RadVeda.ConsentManagement.StorageEncryption.Converters;

import RadVeda.ConsentManagement.StorageEncryption.EncryptionUtility;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class EncryptedBooleanConverter implements AttributeConverter<Boolean, String> {

    @Override
    public String convertToDatabaseColumn(Boolean attribute) {
        return attribute == null ? null : EncryptionUtility.encrypt(attribute);
    }

    @Override
    public Boolean convertToEntityAttribute(String dbData) {
        return dbData == null ? null : EncryptionUtility.decryptBoolean(dbData);
    }
}
