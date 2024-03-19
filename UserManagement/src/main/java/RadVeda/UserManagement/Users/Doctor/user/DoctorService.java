package RadVeda.UserManagement.Users.Doctor.user;

import RadVeda.UserManagement.Users.Doctor.signup.DoctorSignUpRequest;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationToken;
import RadVeda.UserManagement.Users.Doctor.signup.token.DoctorVerificationTokenRepository;
import RadVeda.UserManagement.Users.Patient.user.PatientDocuments;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorService implements DoctorServiceInterface {
    private final DoctorRepository doctorRepository;
    private final DoctorDocumentsRepository doctordocumentsrepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final DoctorVerificationTokenRepository doctorTokenRepository;

    @Override
    public List<Doctor> getDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public void cleanUp() {
        List<Doctor> allDoctors = getDoctors();

        for (Doctor doctor : allDoctors) {
            if (!doctor.isEnabled()) {
                DoctorVerificationToken token = doctorTokenRepository.findByDoctor_id(doctor.getId());
                Calendar calendar = Calendar.getInstance();
                if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
                    doctorTokenRepository.delete(token);
                    doctordocumentsrepository.delete(doctor.getId());
                    doctorRepository.delete(doctor);
                }
            }
        }
    }

    @Override
    public Doctor registerDoctor(DoctorSignUpRequest request) {
        cleanUp(); //Cleaning up the Doctor and DoctorVerificationToken tables before a new signup
        Optional<Doctor> doctor = this.findByEmail(request.email());
        if (doctor.isPresent()) {
            throw new UserAlreadyExistsException(
                    "Doctor with email " + request.email() + " already exists");
        }

        var newDoctor = new Doctor();
        newDoctor.setFirstName(request.firstName());
        newDoctor.setMiddleName(request.middleName());
        newDoctor.setLastName(request.lastName());
        newDoctor.setAddressL1(request.addressL1());
        newDoctor.setAddressL2(request.addressL2());
        newDoctor.setCountry(request.country());
        newDoctor.setState(request.state());
        newDoctor.setCity(request.city());
        newDoctor.setEmail(request.email());

        String encodedPassword = passwordEncoder.encode(request.password());
        newDoctor.setPassword(encodedPassword);

        newDoctor.setPhoneNumber(request.phoneNumber());
        newDoctor.setOrgName(request.orgName());
        newDoctor.setOrgAddressL1(request.orgAddressL1());
        newDoctor.setOrgAddressL2(request.orgAddressL2());
        for (String document : request.Documents()){
            var newDocument = new DoctorDocuments();
            newDocument.setDocuments(document);
            newDocument.setDoctor(newDoctor); 
            doctordocumentsrepository.save(newDocument);
        }

        return doctorRepository.save(newDoctor);
    }

    @Override
    public Optional<Doctor> findByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }

    @Override
    public void saveDoctorVerificationToken(Doctor theDoctor, String token) {
        var verificationToken = new DoctorVerificationToken(token, theDoctor);
        doctorTokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        DoctorVerificationToken token = doctorTokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        Doctor doctor = token.getDoctor();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            doctorTokenRepository.delete(token);
            doctordocumentsrepository.delete(doctor.getId());
            doctorRepository.delete(doctor);
            return "Token already expired";
        }
        doctor.setEnabled(true);
        doctorRepository.save(doctor);
        return "valid";
    }
}
