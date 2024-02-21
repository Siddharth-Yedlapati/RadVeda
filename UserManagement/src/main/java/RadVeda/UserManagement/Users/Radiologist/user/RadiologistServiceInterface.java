package radveda.usermanagement.Users.Radiologist.user;

import radveda.usermanagement.Users.Radiologist.signup.RadiologistSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface RadiologistServiceInterface {
    List<Radiologist> getRadiologists();

    Radiologist registerRadiologist(RadiologistSignUpRequest request);

    Optional<Radiologist> findByEmail(String email);

    void saveRadiologistVerificationToken(Radiologist theRadiologist, String verificationToken);

    String validateToken(String theToken);
}
