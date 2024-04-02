package RadVeda.Patient.PatientTest;

import RadVeda.Patient.User;

import RadVeda.Patient.exceptions.UnauthorizedUserException;
import RadVeda.Patient.exceptions.UserNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/patient-test")
public class PatientTestServiceController {
    private final PatientTestService patientTestService;

    /* Call from Test Management Service after adding a new test*/
//    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping
    public PatientTest addTestForPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                     @RequestBody PatientTestRequest patientTestRequest,
                                     final HttpServletRequest request)  throws UnauthorizedUserException {

//        User user = patientTestService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }


        return patientTestService.addTestForPatient(patientTestRequest);
    }

    @PostMapping("/{patientTestID}/deletePatient")
    public String deletePatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                @PathVariable Long patientTestID) throws UnauthorizedUserException {

//         User user = patientTestService.authenticate(authorizationHeader);
//
//         if(user == null) {
//             throw new UnauthorizedUserException("Invalid User!");
//         }

        patientTestService.deleteRecord(patientTestID);
        return "Delete Successful!";
    }

    @GetMapping("/{patientID}/getTests")
    public List<Long> getTestsOfPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                        @PathVariable Long patientID) {
//        User user = patientTestService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        return patientTestService.getTestsOfPatient(patientID);
    }


}
