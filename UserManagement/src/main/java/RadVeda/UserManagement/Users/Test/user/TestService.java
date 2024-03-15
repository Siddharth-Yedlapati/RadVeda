package RadVeda.UserManagement.Users.Test.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import RadVeda.UserManagement.exception.UserAlreadyExistsException;
// import RadVeda.UserManagement.Users.SuperAdmin.signup.SuperAdminSignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import RadVeda.UserManagement.Users.Test.tests.TestRequest;
import java.util.Calendar;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class TestService implements TestServiceInterface {
    private final TestRepository testRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    // private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @Override
    public List<Test> getTests() {
        return testRepository.findAll();
    }

    @Override
    public Test prescribeTest(TestRequest request) {
        Random random = new Random();
        int radID = random.nextInt(3) + 1;
        int labID = random.nextInt(3) + 1;

        var newTest = new Test();
        newTest.setTestType(request.TestType());
        newTest.setDatePrescribed(request.DatePrescribed());
        newTest.setPatientStatus(request.PatientStatus());
        newTest.setDoctorStatus(request.DoctorStatus());
        newTest.setRadiologistStatus(request.RadiologistStatus());
        newTest.setLabStaffStatus(request.LabStaffStatus());
        newTest.setDoctorsRemarksforPatient(request.DoctorsRemarksforPatient());
        newTest.setDoctorsRemarksforRadiologist(request.DoctorsRemarksforRadiologist());
        newTest.setDoctorID(request.doctorID());
        newTest.setPatientID(request.PatientID());
        newTest.setDoctorNotes(request.DoctorNotes());
        newTest.setOriginalImage(request.OriginalImage());
        newTest.setRadiologistID((long) radID);
        newTest.setLabStaffID((long) labID);

        return testRepository.save(newTest);
    }

    @Override
    public Optional<Test> findById(Long id){
        return testRepository.findById(id);
    }

    @Override
    public List<Test> findAllTests(){
        return testRepository.findAll();
    }

    @Override
    public List<Test> findAllTestsByUser(String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByDoctorID(userID);
        }
        else if("PATIENT".equals(userType)){
            return testRepository.findByPatientID(userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findByRadiologistID(userID);
        }
        else if("LABSTAFF".equals(userType)){
            return testRepository.findByLabStaffID(userID);
        }
        return new ArrayList<>();
    }

}
