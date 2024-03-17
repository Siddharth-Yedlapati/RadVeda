package RadVeda.UserManagement.Users.Patient.signup.token;

import RadVeda.UserManagement.Users.Patient.user.PatientGuardian;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Calendar;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class PatientGuardianVerificationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private Date expirationTime;
    private static final int EXPIRATION_TIME = 15;

    @OneToOne
    @JoinColumn(name = "patientguardian_id")
    private PatientGuardian patientguardian;

    public PatientGuardianVerificationToken(String token, PatientGuardian patientguardian) {
        super();
        this.token = token;
        this.patientguardian = patientguardian;
        this.expirationTime = this.getTokenExpirationTime();
    }

    public PatientGuardianVerificationToken(String token) {
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
