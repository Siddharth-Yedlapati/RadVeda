package RadVeda.Patient.Patient;

import RadVeda.Patient.Patient.Patient;
import RadVeda.Patient.Patient.PatientRequest;
import RadVeda.Patient.Patient.PatientService;
import RadVeda.Patient.exceptions.UnauthorizedUserException;

import jakarta.persistence.Id;
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
    public Patient addPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody PatientRequest patientRequest,
                             final HttpServletRequest request)  throws UnauthorizedUserException{

//        User user = patientService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }


        Patient patient = patientService.addPatient(patientRequest);
        return patient;
    }

     @GetMapping("/{patientID}/patientDetails")
    public Patient getPatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable Long patientID) throws UnauthorizedUserException {

//         User user = patientService.authenticate(authorizationHeader);
//         User user = patientService.authenticate(authorizationHeader);
//
//         if(user == null) {
//             throw new UnauthorizedUserException("Invalid User!");
//         }



         return patientService.findById(patientID).get();
     }


    @PostMapping("/{patientID}/deletePatient")
    public String deletePatient(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable Long patientID) throws UnauthorizedUserException {

//         User user = patientService.authenticate(authorizationHeader);
//
//         if(user == null) {
//             throw new UnauthorizedUserException("Invalid User!");
//         }

        patientService.deletePatient(patientID);
        return "Delete Successful!";
    }




}
