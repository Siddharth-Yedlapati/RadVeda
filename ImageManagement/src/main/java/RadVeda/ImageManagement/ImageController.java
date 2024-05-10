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
    @GetMapping("/{testID}/getImageOriginal")
    public List<Image> getImages(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                 @PathVariable Long testID)
            throws InvalidInputFormatException, UserNotFoundException, UnauthorisedUserException {


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
                                    @RequestBody ImageRequest imgRequest,
            final HttpServletRequest request) throws UnauthorisedUserException{


        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.uploadImageOriginal(imgRequest);
        return "Success!! Image has been uploaded";
    }

    @DeleteMapping("/{testID}/deleteOriginalImage")
    public String deleteImgOriginal(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                    @PathVariable Long testID,

            final HttpServletRequest request) throws UnauthorisedUserException{


        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.deleteImageOriginal(testID);
        return "Success!! Original Image has been deleted";
    }

    //Get and Post for annotated images
    @GetMapping("/{testID}/{radID}/getImageAnnotated")
    public List<ImageAnnotated> getImagesAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testID,
                                                   @PathVariable Long radID)
            throws InvalidInputFormatException, UserNotFoundException, UnauthorisedUserException {

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
    public String uploadImgAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                     @RequestBody ImageRequestAnnotated imgRequestAnnotated,
            final HttpServletRequest request) throws UnauthorisedUserException{


        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.uploadImageAnnotated(imgRequestAnnotated);
        return "Success!! Annotated Image has been uploaded";
    }



    @DeleteMapping("/{testID}/{radID}/deleteAnnotatedImage")
    public String deleteImgAnnotated(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testID,
    @PathVariable Long radID) throws UnauthorisedUserException{


        User currentuser = ImageService.authenticate(authorizationHeader);

        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        ImageService.deleteImageAnnotated(testID, radID);
        return "Success!! Annotated Image has been Deleted";
    }
    
}
