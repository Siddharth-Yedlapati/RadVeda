package RadVeda.ConsentManagement;

import RadVeda.ConsentManagement.ConsentProviders.*;
import RadVeda.ConsentManagement.ConsentRequest.ConsentRequestForm;
import RadVeda.ConsentManagement.exception.InvalidUserException;
import RadVeda.ConsentManagement.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/consent")
public class ConsentController {
    private final ConsentService consentService;

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
    }

    @PostMapping("/setDoctorProviderDetails")
    public String setDoctorProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody DoctorProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @PostMapping("/setPatientProviderDetails")
    public String setPatientProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody PatientProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @PostMapping("/setRadiologistProviderDetails")
    public String setRadiologistProviderDetails(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RadiologistProviderConsentForm consentForm)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @DeleteMapping("/cleanByDeletedUser/{userType}/{userId}")
    public String cleanByDeletedUser(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String userType, @PathVariable Long userId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @GetMapping("/getDoctorProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public DoctorProviderConsent getDoctorProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @GetMapping("/getPatientProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public PatientProviderConsent getPatientProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }

    @GetMapping("/getRadiologistProviderConsent/{consentSeekerType}/{consentSeekerId}/{consentProviderId}/{testId}")
    public RadiologistProviderConsent getRadiologistProviderConsent(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable String consentSeekerType, @PathVariable Long consentSeekerId, @PathVariable Long consentProviderId, @PathVariable Long testId)
    {
        User currentUser = consentService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
    }
}
