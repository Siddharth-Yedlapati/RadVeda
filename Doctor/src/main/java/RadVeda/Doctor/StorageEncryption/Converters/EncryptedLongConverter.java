package RadVeda.Doctor.StorageEncryption.Converters;

import RadVeda.Doctor.StorageEncryption.EncryptionUtility;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class EncryptedLongConverter implements AttributeConverter<Long, String> {

    @Override
    public String convertToDatabaseColumn(Long attribute) {
        return attribute == null ? null : EncryptionUtility.encrypt(attribute);
    }

    @Override
    public Long convertToEntityAttribute(String dbData) {
        return dbData == null ? null : EncryptionUtility.decryptLong(dbData);
    }
}
