package RadVeda.TestManagement;

import RadVeda.TestManagement.tests.TestRequest;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestHeader;

public interface TestServiceInterface {
    List<Test> getTests();

    Test prescribeTest(String authorizationHeader, TestRequest request);

    Test assignLab(Long testID, Long labStaff);
    Test assignRad(Long testID, Long radID);

    Optional<Test> findById(Long testID);
    List<Test> findAllTests();
    List<Test> findAllTestsByUser(String userType, Long userID);
    List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID);
    List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID);
    List<Test> findAllPrimaryAndConsultedTestsByUser(String authorizationHeader, String userType, Long userID);
    User authenticate(String authorizationHeader);
    List<User> getPeopleInvolvedForTest(String authorizationHeader, Long testID);
}
