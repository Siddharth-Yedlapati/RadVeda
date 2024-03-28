package RadVeda.DoctorService;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import RadVeda.DoctorService.doctors.DoctorSignUpRequest;
import RadVeda.DoctorService.doctors.DoctorTestRequest;
import RadVeda.DoctorService.exception.InvalidInputFormatException;
import RadVeda.DoctorService.exception.UserNotFoundException;
import RadVeda.DoctorService.exception.UnauthorisedUserException;
// import RadVeda.TestManagement.security.UserManagementDetailsService;

import java.util.Optional;

import javax.print.Doc;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;



@RestController
@RequiredArgsConstructor
@RequestMapping("/doctor")
public class DoctorController {
    private final DoctorService doctorService;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("/addDoctor")
    public String addDoctor(@RequestBody DoctorSignUpRequest request) {
        doctorService.addDoctor(request);
        return "Success! Doctor has been added";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping("/prescribe-test")
    public String prescribeTest(@RequestBody DoctorTestRequest request)
        throws UnauthorisedUserException {
    
        doctorService.prescribeTest(request);

        return "Success!! Test has been prescribed";
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{doctorID}/getDoctor")
    public Doctor getDoctor(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long doctorID)
            throws UnauthorisedUserException, UserNotFoundException{
        User currentuser = doctorService.authenticate(authorizationHeader);
        if(currentuser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        Optional<Doctor> doctor = doctorService.getDoctor(doctorID);
        if(doctor.isEmpty()){
            throw new UserNotFoundException("Unable to fetch test details");
        }
        return doctor.get();
    }

    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/deleteDoctor/{id}")
    public String deleteDoctor(@PathVariable Long id)
    {
        doctorService.deleteDoctor(id);
        return "Doctor successfully deleted";
    }
    

}

