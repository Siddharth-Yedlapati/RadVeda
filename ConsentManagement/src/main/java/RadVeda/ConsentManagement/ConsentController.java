package RadVeda.ConsentManagement;

import RadVeda.ConsentManagement.ConsentProviders.*;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequest;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequestForm;
import RadVeda.ConsentManagement.exception.InvalidTestException;
import RadVeda.ConsentManagement.exception.InvalidUserException;
import RadVeda.ConsentManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/consent")
public class ConsentController {
    private final ConsentService consentService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/sendConsentRequest")
    public String sendConsentRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody ConsentRequestForm requestForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        //Validate fields in the requestForm
        if(!consentService.isUserValid(requestForm.consentProviderType(), requestForm.consentProviderId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid consent provider!");
        }
        if(!consentService.isTestValid(requestForm.testId(), authorizationHeader))
        {
            throw new InvalidTestException("Invalid test id!" + requestForm.testId());
        }

        List<User> consentSeekers = consentService.parseConsentSeekersList(requestForm.consentSeekers());
        for(User consentSeeker : consentSeekers)
        {
            if(!consentService.isUserValid(consentSeeker.getType(), consentSeeker.getId(), authorizationHeader))
            {
                throw new InvalidUserException("One or more consent seekers are invalid!");
            }
        }

        return consentService.sendConsentRequest(requestForm.consentProviderType(), requestForm.consentProviderId(), requestForm.testId(), requestForm.message(), consentSeekers, authorizationHeader);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/setDoctorProviderDetails")
    public String setDoctorProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody DoctorProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.setDoctorProviderDetails(currentUser, consentForm, authorizationHeader);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/setPatientProviderDetails")
    public String setPatientProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody PatientProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.setPatientProviderDetails(currentUser, consentForm, authorizationHeader);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/setRadiologistProviderDetails")
    public String setRadiologistProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RadiologistProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.setRadiologistProviderDetails(currentUser, consentForm, authorizationHeader);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/cleanByDeletedUser/{userType}/{userId}")
    public String cleanByDeletedUser(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String userType, @PathVariable Long userId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(consentService.isUserValid(userType, userId, authorizationHeader))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.cleanByDeletedUser(userType, userId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getDoctorProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public DoctorProviderConsent getDoctorProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!currentUser.getType().equals(consentSeekerType) || !Objects.equals(currentUser.getId(), consentSeekerId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.getDoctorProviderConsent(consentSeekerType, consentSeekerId, consentProviderId, testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getPatientProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public PatientProviderConsent getPatientProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!currentUser.getType().equals(consentSeekerType) || !Objects.equals(currentUser.getId(), consentSeekerId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.getPatientProviderConsent(consentSeekerType, consentSeekerId, consentProviderId, testId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRadiologistProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public RadiologistProviderConsent getRadiologistProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(!currentUser.getType().equals(consentSeekerType) || !Objects.equals(currentUser.getId(), consentSeekerId))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        return consentService.getRadiologistProviderConsent(consentSeekerType, consentSeekerId, consentProviderId, testId);
    }

    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:9193"})
    @GetMapping("/validateConsentRequestById/{consentRequestId}")
    public boolean validateConsentRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable Long consentRequestId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        Optional<ConsentRequest> consentRequest = consentService.findConsentRequestById(consentRequestId);
        return consentRequest.isPresent();
    }
}
