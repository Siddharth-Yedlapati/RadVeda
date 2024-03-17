package RadVeda.UserManagement.Users.Radiologist.user;

import RadVeda.UserManagement.Users.Radiologist.signup.RadiologistSignUpRequest;

import java.util.List;
import java.util.Optional;

public interface RadiologistServiceInterface {
    List<Radiologist> getRadiologists();

    public void cleanUp();

    Radiologist registerRadiologist(RadiologistSignUpRequest request);

    Optional<Radiologist> findByEmail(String email);

    void saveRadiologistVerificationToken(Radiologist theRadiologist, String verificationToken);

    String validateToken(String theToken);
}
