package RadVeda.Patient;

import RadVeda.Patient.Patient.Patient;
import RadVeda.Patient.exceptions.UnauthorizedUserException;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/patient")
public class PatientServiceController {

    private final PatientService patientService;
    @PostMapping
    public String addPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody PatientRequest patientRequest,
                             final HttpServletRequest request)  throws UnauthorizedUserException{

//        User user = patientService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }


        patientService.addPatient(patientRequest);
        return "Success!!";
    }

     @GetMapping("/{patientID}/patientDetails")
    public Patient getPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable long patientID) throws UnauthorizedUserException {

//         User user = patientService.authenticate(authorizationHeader);
//
//         if(user == null) {
//             throw new UnauthorizedUserException("Invalid User!");
//         }

         return patientService.findById(patientID).get();
     }





}
