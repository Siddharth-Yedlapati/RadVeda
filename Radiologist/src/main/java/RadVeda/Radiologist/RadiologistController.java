package RadVeda.Radiologist;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import RadVeda.Radiologist.radiologists.RadiologistSignUpRequest;
import RadVeda.Radiologist.radiologists.RadiologistTestRequest;
import RadVeda.Radiologist.Radiologist;
import RadVeda.Radiologist.exception.InvalidInputFormatException;
import RadVeda.Radiologist.exception.UserNotFoundException;
import RadVeda.Radiologist.exception.UnauthorisedUserException;
// import RadVeda.TestManagement.security.UserManagementDetailsService;

import java.util.Optional;

import javax.print.Doc;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import RadVeda.Radiologist.NotesRequest;



@RestController
@RequiredArgsConstructor
@RequestMapping("/radiologist")
public class RadiologistController {
    private final RadiologistService radiologistService;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("/addRadiologist")
    public String addRadiologist(@RequestBody RadiologistSignUpRequest request) {
        radiologistService.addRadiologist(request);
        return "Success! Radiologist has been added";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping("/prescribe-test")
    public String prescribeTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RadiologistTestRequest request)
        throws UnauthorisedUserException {
    
        User user = radiologistService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }
        radiologistService.prescribeTest(request);

        return "Success!! Test has been prescribed";
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{radiologistID}/getRadiologist")
    public Radiologist getRadiologist(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long radiologistID)
            throws UnauthorisedUserException, UserNotFoundException{
        User currentuser = radiologistService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Optional<Radiologist> radiologist = radiologistService.getRadiologist(radiologistID);
        if(radiologist.isEmpty()){
            throw new UserNotFoundException("Unable to fetch test details");
        }
        return radiologist.get();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}/addNotes")
    public String addNotes(@PathVariable Long id, @RequestBody NotesRequest notes){
        radiologistService.addNotes(id, notes);
        return "Notes successfully updated";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}/getNotes")
    public String getNotes(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long id){
        User currentuser = radiologistService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        return radiologistService.getNotes(id);   
    }

    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/deleteRadiologist/{id}")
    public String deleteRadiologist(@PathVariable Long id)
    {
        radiologistService.deleteRadiologist(id);
        return "Radiologist successfully deleted";
    }
    
    @CrossOrigin(origins = "http://localhost:9192")
    @DeleteMapping("/deleteTest/{testID}")
    public String deleteTest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testID){

        User user = radiologistService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }
        radiologistService.deleteTest(testID);
        return "Test successfully deleted";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @GetMapping("/getConsultedTests/{radiologistID}")
    public List<ConsultedRadiologistTests> getConsultedTests(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long radiologistID){
        User user = radiologistService.authenticate(authorizationHeader);
        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }
        return radiologistService.getConsultedTests(radiologistID);
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @GetMapping("/getConsultedRadiologists/{testID}")
    public List<ConsultedRadiologistTests> getConsultedRadiologists(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long testID){
        User user = radiologistService.authenticate(authorizationHeader);
        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }
        return radiologistService.getConsultedRadiologists(testID);
    }

    @CrossOrigin(origins = "http://localhost:9199")
    @GetMapping("/availableRadiologists")
    public List<Long> availableRads(@RequestHeader(value = "Authorization", required = false) String authorizationHeader)
            throws UnauthorisedUserException {

        User user = radiologistService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }

        return radiologistService.availableRadiologists();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/assignRadiologist/{patId}/{testId}")
    public void assignRad(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                          @PathVariable Long patId, @PathVariable Long testId)
            throws UnauthorisedUserException {
        User user = radiologistService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorisedUserException("Invalid User!");
        }

        radiologistService.assignRadiologist(authorizationHeader, patId, testId);

    }

}

