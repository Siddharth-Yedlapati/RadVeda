package RadVeda.UserManagement.Users.SuperAdmin.signup.token;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedDateConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import RadVeda.UserManagement.Users.SuperAdmin.user.SuperAdmin;

import java.util.Calendar;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class SuperAdminVerificationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String token;

    @Convert(converter = EncryptedDateConverter.class)
    private Date expirationTime;

    private static final int EXPIRATION_TIME = 15;

    @OneToOne
    @JoinColumn(name = "superadmin_id")
    private SuperAdmin superadmin;

    public SuperAdminVerificationToken(String token, SuperAdmin superadmin) {
        super();
        this.token = token;
        this.superadmin = superadmin;
        this.expirationTime = this.getTokenExpirationTime();
    }

    public SuperAdminVerificationToken(String token) {
        super();
        this.token = token;
        this.expirationTime = this.getTokenExpirationTime();
    }

    public Date getTokenExpirationTime() {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(new Date().getTime());
        calendar.add(Calendar.MINUTE, EXPIRATION_TIME);
        return new Date(calendar.getTime().getTime());
    }
}
