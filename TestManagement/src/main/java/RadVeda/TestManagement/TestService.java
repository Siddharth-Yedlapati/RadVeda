package RadVeda.TestManagement;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import RadVeda.TestManagement.tests.TestRequest;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.Random;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class TestService implements TestServiceInterface {
    private final TestRepository testRepository;
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

        String dateString = LocalDate.now( ZoneId.of( "Asia/Kolkata" ) )
         .toString();
        String[] parts = dateString.split("-");

         // Reorder the parts to form the output string in "dd/MM/yyyy" format
        String outputDateString = parts[2] + "/" + parts[1] + "/" + parts[0];
 

        var newTest = new Test();
        newTest.setTestType(request.TestType());
        newTest.setDatePrescribed(outputDateString);
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

    @Override
    public List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByPatientAndDocID(patientID, userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findAllTestsByPatientAndRadID(patientID, userID);
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findConsultedByPatientAndDocID(patientID, userID);
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findConsultedTestsByPatientAndRadID(patientID, userID);
        }
        return new ArrayList<>();
    }

}
