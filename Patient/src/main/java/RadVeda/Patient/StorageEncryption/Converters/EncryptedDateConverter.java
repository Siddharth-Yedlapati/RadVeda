package RadVeda.Patient.StorageEncryption.Converters;

import RadVeda.Patient.StorageEncryption.EncryptionUtility;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.Date;

@Converter
public class EncryptedDateConverter implements AttributeConverter<Date, String> {

    @Override
    public String convertToDatabaseColumn(Date attribute) {
        return attribute == null ? null : EncryptionUtility.encrypt(attribute);
    }

    @Override
    public Date convertToEntityAttribute(String dbData) {
        return dbData == null ? null : EncryptionUtility.decryptDate(dbData);
    }
}