package RadVeda.TestManagement;

import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedDateConverter;
import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedLongConverter;
import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedStringConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Calendar;
import java.util.Date;

@Getter
@Setter
@Entity
public class TestVerificationOTP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedLongConverter.class)
    private Long otp;

    @Convert(converter = EncryptedLongConverter.class)
    private Long patientId;

    @Convert(converter = EncryptedLongConverter.class)
    private Long doctorId;

    @Convert(converter = EncryptedDateConverter.class)
    private Date expirationTime;

    private static final int EXPIRATION_TIME = 5; //OTP expires in 5 minutes

    public TestVerificationOTP()
    {
        this.expirationTime = this.getOTPExpirationTime();
    }

    public Date getOTPExpirationTime() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(new Date().getTime());
        calendar.add(Calendar.MINUTE, EXPIRATION_TIME);
        return new Date(calendar.getTime().getTime());
    }
}
