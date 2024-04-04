package RadVeda.TestManagement;

import RadVeda.TestManagement.tests.TestRequest;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestHeader;

public interface TestServiceInterface {
    List<Test> getTests();

    Test prescribeTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, TestRequest request);

    Optional<Test> findById(Long testID);
    List<Test> findAllTests();
    List<Test> findAllTestsByUser(String userType, Long userID);
    List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID);
    List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID);   
    User authenticate(String authorizationHeader);
}
