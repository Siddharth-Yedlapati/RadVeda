package RadVeda.TestManagement;

import RadVeda.TestManagement.tests.TestRequest;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestHeader;

public interface TestServiceInterface {

    String sendTestVerificationOTP(Long patientId, Long doctorId, String authorizationHeader);
    String validateTestVerificationOTP(Long patientId, Long doctorId, Long otp, String authorizationHeader);

    List<Test> getTests();

    Test prescribeTest(String authorizationHeader, TestRequest request);

    Test assignLab(String authorizationHeader, Long testID, Long labStaff, long patientID);
    Test assignRad(String authorizationHeader, Long testID, Long radID);

    Optional<Test> findById(Long testID);
    List<Test> findAllTests();
    List<Test> findAllTestsByUser(String userType, Long userID);
    List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID);
    List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID);
    List<Test> findAllPrimaryAndConsultedTestsByUser(String authorizationHeader, String userType, Long userID);
    List<Test> findAllConsultedTestsByUser(String authorizationHeader, String userType, Long userID);
    boolean isUserValid(String userType, Long userId, String authorizationHeader);
    User authenticate(String authorizationHeader);
    List<User> getPeopleInvolvedForTest(String authorizationHeader, Long testID);
}
