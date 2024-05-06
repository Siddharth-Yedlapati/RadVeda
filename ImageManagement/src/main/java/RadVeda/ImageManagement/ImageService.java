package RadVeda.ImageManagement;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import RadVeda.ImageManagement.StorageEncryption.EncryptionUtility;



import java.util.List;
import java.util.ArrayList;


@Service
@RequiredArgsConstructor
public class ImageService implements ImageServiceInterface {
    private final ImageRepository ImageRepository;
    private final ImageRepositoryAnnotated ImageRepositoryAnnotated;
    // private final SuperAdminVerificationTokenRepository superadminTokenRepository;

    @Override
    public List<Image> findByIDOriginal(Long testID) {
        return ImageRepository.findAllImages(EncryptionUtility.encrypt(testID));
    }

    
    @Override
    public Image uploadImageOriginal(ImageRequest request) {

        var newImage = new Image();
        newImage.setTestID(request.testID());
        newImage.setImageURL(request.imageURL());


        Image savedImg = ImageRepository.save(newImage);
        
        return savedImg;
    }

    @Override
    public void deleteImageOriginal(Long testID) {
        
        ImageRepository.deleteImageOriginal(EncryptionUtility.encrypt(testID));
    }

    
    @Override
    public ImageAnnotated uploadImageAnnotated(ImageRequestAnnotated request) {

        var newImage = new ImageAnnotated();
        newImage.setTestID(request.testID());
        newImage.setRadID(request.radID());
        newImage.setImageURL(request.imageURL());

        ImageAnnotated savedImg = ImageRepositoryAnnotated.save(newImage);
        
        return savedImg;
    }

    @Override
    public List<ImageAnnotated> findByIDAnnotated(Long testID, Long radID) {

        return ImageRepositoryAnnotated.findAllImagesAnnotated(EncryptionUtility.encrypt(testID), EncryptionUtility.encrypt(radID));
    }

    @Override
    public void deleteImageAnnotated(Long testID, Long radID) {

        ImageRepositoryAnnotated.deleteImageAnnotated(EncryptionUtility.encrypt(testID), EncryptionUtility.encrypt(radID));
    }

   

    @Override
    public User authenticate(String authorizationHeader)
    {
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }
        else
        {
            // Handling the case where the Authorization header is missing or empty
            return null;
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        List<String> userTypes = new ArrayList<>();
        userTypes.add("ADMIN");
        userTypes.add("DOCTOR");
        userTypes.add("LABSTAFF");
        userTypes.add("PATIENT");
        userTypes.add("RADIOLOGIST");
        userTypes.add("SUPERADMIN");

        List<String> authUrls = new ArrayList<>();
        authUrls.add("http://localhost:9191/admins/profile");
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/labstaffs/profile");
        authUrls.add("http://localhost:9191/patients/profile");
        authUrls.add("http://localhost:9191/radiologists/profile");
        authUrls.add("http://localhost:9191/superadmins/profile");

        User currentUser = null;

        for(int i=0;i<userTypes.size();i++)
        {
       
            // Sending a GET request to the user management service with the JWT token in the headers
            ResponseEntity<String> responseEntity;
            try{
            responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);
            } catch (HttpClientErrorException.Forbidden ex){
                continue;
            }
            // Checking if the response status is OK (200)
            if (responseEntity.getStatusCode() == HttpStatus.OK)
            {
                // Creating a new User object
                User user = new User();
                user.setType(userTypes.get(i));

                // Extracting user profile JSON from the response body
                String userProfileJson = responseEntity.getBody();

                // Parsing JSON using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    // Reading JSON as a tree
                    JsonNode rootNode = objectMapper.readTree(userProfileJson);

                    // Extracting user ID from the JSON
                    Long userId = rootNode.path("id").asLong();
                    user.setId(userId);
                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }

}
