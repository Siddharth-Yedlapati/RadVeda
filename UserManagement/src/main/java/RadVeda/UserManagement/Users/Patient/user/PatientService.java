package radveda.usermanagement.Users.Patient.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import radveda.usermanagement.exception.UserAlreadyExistsException;
import radveda.usermanagement.Users.Patient.signup.PatientSignUpRequest;
import radveda.usermanagement.Users.Patient.signup.token.PatientVerificationToken;
import radveda.usermanagement.Users.Patient.signup.token.PatientVerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.Patient.signup.PatientSignUpRequest;
import radveda.usermanagement.Users.Patient.signup.token.PatientVerificationTokenRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PatientService implements PatientServiceInterface {
    private final PatientRepository patientRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PatientVerificationTokenRepository patientTokenRepository;

    @Override
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient registerPatient(PatientSignUpRequest request) {
        Optional<Patient> patient = this.findByEmail(request.email());
        if (patient.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Patient with email " + request.email() + " already exists");
        }

        var newPatient = new Patient();
        newPatient.setFirstName(request.firstName());
        newPatient.setMiddleName(request.middleName());
        newPatient.setLastName(request.lastName());
        newPatient.setAddressL1(request.addressL1());
        newPatient.setAddressL2(request.addressL2());
        newPatient.setCountry(request.country());
        newPatient.setState(request.state());
        newPatient.setCity(request.city());
        newPatient.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newPatient.setPassword(encodedPassword);

        newPatient.setPhoneNumber(request.phoneNumber());
        newPatient.setOrgName(request.orgName());
        newPatient.setOrgAddressL1(request.orgAddressL1());
        newPatient.setOrgAddressL2(request.orgAddressL2());

        return patientRepository.save(newPatient);
    }

    @Override
    public Optional<Patient> findByEmail(String email) {
        return patientRepository.findByEmail(email);
    }

    @Override
    public void savePatientVerificationToken(Patient thePatient, String token) {
        var verificationToken = new PatientVerificationToken(token, thePatient);
        patientTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        PatientVerificationToken token = patientTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Patient patient = token.getPatient();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            patientTokenRepository.delete(token);
            return "Token already expired";
        }
        patient.setEnabled(true);
        patientRepository.save(patient);
        return "valid";
    }
}
