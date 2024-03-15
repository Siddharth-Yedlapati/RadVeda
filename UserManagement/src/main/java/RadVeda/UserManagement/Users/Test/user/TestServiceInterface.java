package RadVeda.UserManagement.Users.Test.user;

import RadVeda.UserManagement.Users.Test.tests.TestRequest;

import java.util.List;
import java.util.Optional;

public interface TestServiceInterface {
    List<Test> getTests();

    Test prescribeTest(TestRequest request);

    Optional<Test> findById(Long testID);
    List<Test> findAllTests();
    List<Test> findAllTestsByUser(String userType, Long userID);
    
}
