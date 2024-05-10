package RadVeda.ImageManagement;

import java.util.ArrayList;
import java.util.List;

import RadVeda.ImageManagement.transitEncryption.EncryptionManager;
import RadVeda.ImageManagement.transitEncryption.EncryptionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import RadVeda.ImageManagement.exception.InvalidInputFormatException;
import RadVeda.ImageManagement.exception.UserNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import RadVeda.ImageManagement.exception.UnauthorisedUserException;
// import RadVeda.ImageManagement.security.UserManagementDetailsService;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/images")
public class ImageController {
    private final ImageService ImageService;
    private final EncryptionRepository encryptionRepository;

    //Get and Post for Original Images
    @GetMapping("/{testIDStr}/getImageOriginal")
    public List<Image> getImages(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                 @PathVariable String testIDStr, @PathVariable String service)
            throws InvalidInputFormatException, UserNotFoundException, UnauthorisedUserException {

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        long testID;

        try {
            testID = Long.parseLong(encryptionManager.decryptMessage(testIDStr));
        }
        catch (Exception e) {
            return new ArrayList<>();
        }
        
        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        List<Image> imgs = ImageService.findByIDOriginal(testID);
        // if (imgs.isEmpty()) {
        //     throw new UserNotFoundException("Unable to fetch image details");
        // }

        return imgs;
    }

    @PostMapping("/addOriginalImage")
    public String uploadImgOriginal(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                    @RequestBody String imgRequestStr, @PathVariable String service,
            final HttpServletRequest request) throws UnauthorisedUserException{

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        ImageRequest imgRequest;
        ObjectMapper objectmapper = new ObjectMapper();

        try {
            imgRequestStr = encryptionManager.decryptMessage(imgRequestStr);
            imgRequest = objectmapper.readValue(imgRequestStr, ImageRequest.class);
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }

        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.uploadImageOriginal(imgRequest);
        return "Success!! Image has been uploaded";
    }

    @DeleteMapping("/{testIDStr}/deleteOriginalImage")
    public String deleteImgOriginal(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String testIDStr,
            @PathVariable String service,
            final HttpServletRequest request) throws UnauthorisedUserException{

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        long testID;

        try {
            testID = Long.parseLong(encryptionManager.decryptMessage(testIDStr));
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }

        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.deleteImageOriginal(testID);
        return "Success!! Original Image has been deleted";
    }

    //Get and Post for annotated images
    @GetMapping("/{testIDStr}/{radIDStr}/getImageAnnotated")
    public List<ImageAnnotated> getImagesAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String testIDStr,
                                                   @PathVariable String radIDStr, @PathVariable String service)
            throws InvalidInputFormatException, UserNotFoundException, UnauthorisedUserException {

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        long testID, radID;

        try {
            testID = Long.parseLong(encryptionManager.decryptMessage(testIDStr));
            radID = Long.parseLong(encryptionManager.decryptMessage(radIDStr));
        }
        catch (Exception e) {
            return new ArrayList<>();
        }
        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        List<ImageAnnotated> imgs = ImageService.findByIDAnnotated(testID, radID);
        if (imgs.isEmpty()) {
            throw new UserNotFoundException("Unable to fetch image details");
        }

        return imgs;
    }

    @PostMapping("/addAnnotatedImage")
    public String uploadImgAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody String imgRequestAnnotatedStr,
            @PathVariable String  service,
            final HttpServletRequest request) throws UnauthorisedUserException{

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        ImageRequestAnnotated imgRequestAnnotated;
        ObjectMapper objectmapper = new ObjectMapper();

        try {
            imgRequestAnnotatedStr = encryptionManager.decryptMessage(imgRequestAnnotatedStr);
            imgRequestAnnotated = objectmapper.readValue(imgRequestAnnotatedStr, ImageRequestAnnotated.class);
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }

        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.uploadImageAnnotated(imgRequestAnnotated);
        return "Success!! Annotated Image has been uploaded";
    }



    @DeleteMapping("/{testIDStr}/{radIDStr}/deleteAnnotatedImage")
    public String deleteImgAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String testIDStr,
    @PathVariable String radIDStr, @PathVariable String service) throws UnauthorisedUserException{

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        long testID, radID;

        try {
            testID = Long.parseLong(encryptionManager.decryptMessage(testIDStr));
            radID = Long.parseLong(encryptionManager.decryptMessage(radIDStr));
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }

        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.deleteImageAnnotated(testID, radID);
        return "Success!! Annotated Image has been Deleted";
    }
    
}
