package RadVeda.Patient.Patient;

import RadVeda.Patient.Patient.Patient;
import RadVeda.Patient.Patient.PatientRequest;
import RadVeda.Patient.Patient.PatientService;
import RadVeda.Patient.exceptions.UnauthorizedUserException;
import RadVeda.Patient.User;

import RadVeda.Patient.transitEncryption.EncryptionManager;
import RadVeda.Patient.transitEncryption.EncryptionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.Id;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import java.util.Arrays;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor

@RequestMapping("/patient")
public class PatientServiceController {

    private final PatientService patientService;
    private final EncryptionRepository encryptionRepository;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("{service}/addPatient")
    public String addPatient(@RequestBody String patientRequestStr, @PathVariable String service, final HttpServletRequest request)  throws UnauthorizedUserException{

        EncryptionManager encryptionManager = new EncryptionManager(service, encryptionRepository);
        PatientRequest patientRequest;
        ObjectMapper objectmapper = new ObjectMapper();

        try {
            patientRequestStr = encryptionManager.decryptMessage(patientRequestStr);
            patientRequest = objectmapper.readValue(patientRequestStr, PatientRequest.class);
        }
        catch (Exception e) {
            return "Fail\n"+e.getMessage();
        }

        patientService.addPatient(patientRequest);
        return "Success! Patient has been added";
    }

    @CrossOrigin(origins = "http://localhost:3000")
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


    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/{patientID}/deletePatient")
    public String deletePatient(@PathVariable Long patientID) throws UnauthorizedUserException {

//         User user = patientService.authenticate(authorizationHeader);
//
//         if(user == null) {
//             throw new UnauthorizedUserException("Invalid User!");
//         }

        patientService.deletePatient(patientID);
        return "Patient Successfully Deleted";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getPatients/{patientIDs}")
    public List<Patient> getPatients(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable("patientIDs") String patientIDs) throws UnauthorizedUserException{
        User user = patientService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }
        List<Long> ids = Arrays.stream(patientIDs.split(","))
        .map(Long::parseLong)
        .collect(Collectors.toList());

        return patientService.getPatients(ids);
    }



}
