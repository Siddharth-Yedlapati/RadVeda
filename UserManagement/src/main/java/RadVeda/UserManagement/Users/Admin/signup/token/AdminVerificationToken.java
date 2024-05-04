package RadVeda.UserManagement.Users.Admin.signup.token;

import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedLocalDateConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedStringConverter;
import RadVeda.UserManagement.security.StorageEncryption.Converters.EncryptedDateConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import RadVeda.UserManagement.Users.Admin.user.Admin;

import java.util.Calendar;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class AdminVerificationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Convert(converter = EncryptedStringConverter.class)
    private String token;

    @Convert(converter = EncryptedDateConverter.class)
    private Date expirationTime;

    private static final int EXPIRATION_TIME = 15;

    @OneToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    public AdminVerificationToken(String token, Admin admin) {
        super();
        this.token = token;
        this.admin = admin;
        this.expirationTime = this.getTokenExpirationTime();
    }

    public AdminVerificationToken(String token) {
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
