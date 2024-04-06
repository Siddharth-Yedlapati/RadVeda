package RadVeda.ImageManagement;

// import RadVeda.ImageManagement.tests.TestRequest;

import java.util.List;
import java.util.Optional;

public interface ImageServiceInterface {
    List<Image> findByIDOriginal(Long testID);
    List<ImageAnnotated> findByIDAnnotated(Long testID, Long radID);

    Image uploadImageOriginal(ImageRequest request);
    ImageAnnotated uploadImageAnnotated(ImageRequestAnnotated request);
    void deleteImageAnnotated(Long testID, Long radID);
    void deleteImageOriginal(Long testID);


    // Optional<Image> findById(Long testID);
    // List<Image> findAllTests();
    // List<Image> findAllTestsByUser(String userType, Long userID);
    // List<Image> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID);
    // List<Image> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID);   
    User authenticate(String authorizationHeader);
}
