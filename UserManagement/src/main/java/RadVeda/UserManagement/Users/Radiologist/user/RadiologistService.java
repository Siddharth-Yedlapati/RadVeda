package radveda.usermanagement.Users.Radiologist.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import radveda.usermanagement.exception.UserAlreadyExistsException;
import radveda.usermanagement.Users.Radiologist.signup.RadiologistSignUpRequest;
import radveda.usermanagement.Users.Radiologist.signup.token.RadiologistVerificationToken;
import radveda.usermanagement.Users.Radiologist.signup.token.RadiologistVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.Radiologist.signup.RadiologistSignUpRequest;
import radveda.usermanagement.Users.Radiologist.signup.token.RadiologistVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RadiologistService implements RadiologistServiceInterface {
    private final RadiologistRepository radiologistRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RadiologistVerificationTokenRepository radiologistTokenRepository;

    @Override
    public List<Radiologist> getRadiologists() {
        return radiologistRepository.findAll();
    }

    @Override
    public Radiologist registerRadiologist(RadiologistSignUpRequest request) {
        Optional<Radiologist> radiologist = this.findByEmail(request.email());
        if (radiologist.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Radiologist with email " + request.email() + " already exists");
        }

        var newRadiologist = new Radiologist();
        newRadiologist.setFirstName(request.firstName());
        newRadiologist.setMiddleName(request.middleName());
        newRadiologist.setLastName(request.lastName());
        newRadiologist.setAddressL1(request.addressL1());
        newRadiologist.setAddressL2(request.addressL2());
        newRadiologist.setCountry(request.country());
        newRadiologist.setState(request.state());
        newRadiologist.setCity(request.city());
        newRadiologist.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newRadiologist.setPassword(encodedPassword);

        newRadiologist.setPhoneNumber(request.phoneNumber());
        newRadiologist.setOrgName(request.orgName());
        newRadiologist.setOrgAddressL1(request.orgAddressL1());
        newRadiologist.setOrgAddressL2(request.orgAddressL2());

        return radiologistRepository.save(newRadiologist);
    }

    @Override
    public Optional<Radiologist> findByEmail(String email) {
        return radiologistRepository.findByEmail(email);
    }

    @Override
    public void saveRadiologistVerificationToken(Radiologist theRadiologist, String token) {
        var verificationToken = new RadiologistVerificationToken(token, theRadiologist);
        radiologistTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        RadiologistVerificationToken token = radiologistTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Radiologist radiologist = token.getRadiologist();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            radiologistTokenRepository.delete(token);
            return "Token already expired";
        }
        radiologist.setEnabled(true);
        radiologistRepository.save(radiologist);
        return "valid";
    }
}
