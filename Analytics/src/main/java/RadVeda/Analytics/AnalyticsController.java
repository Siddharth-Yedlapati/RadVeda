package RadVeda.Analytics;

import RadVeda.Analytics.Statistics.AccountStatisticsRequest;
import RadVeda.Analytics.Statistics.RequestsStatisticsRequest;
import RadVeda.Analytics.exception.InvalidRequestException;
import RadVeda.Analytics.exception.InvalidUserException;
import RadVeda.Analytics.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequiredArgsConstructor
@RequestMapping("/analytics")
public class AnalyticsController {
    private final AnalyticsService analyticsService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/incrementRequestsStatistics")
    public String incrementRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.requesterType(), "DOCTOR") || Objects.equals(request.requesterType(), "RADIOLOGIST") || Objects.equals(request.requesterType(), "LABSTAFF"))
        {
            if(!Objects.equals(currentUser.getType(), "ADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.requesterType(), "ADMIN"))
        {
            if(!Objects.equals(currentUser.getType(), "SUPERADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }

        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.requestType(), "SIGNUP") && !Objects.equals(request.requestType(), "ACCOUNT_MODIFICATION") && !Objects.equals(request.requestType(), "ACCOUNT_DELETION"))
        {
            throw new InvalidRequestException("Request type must be SIGNUP or ACCOUNT_MODIFICATION or ACCOUNT_DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF") && !Objects.equals(request.requesterType(), "ADMIN"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.incrementRequestsStatistics(request);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/decrementRequestsStatistics")
    public String decrementRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.requesterType(), "DOCTOR") || Objects.equals(request.requesterType(), "RADIOLOGIST") || Objects.equals(request.requesterType(), "LABSTAFF"))
        {
            if(!Objects.equals(currentUser.getType(), "ADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.requesterType(), "ADMIN"))
        {
            if(!Objects.equals(currentUser.getType(), "SUPERADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }

        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.requestType(), "SIGNUP") && !Objects.equals(request.requestType(), "ACCOUNT_MODIFICATION") && !Objects.equals(request.requestType(), "ACCOUNT_DELETION"))
        {
            throw new InvalidRequestException("Request type must be SIGNUP or ACCOUNT_MODIFICATION or ACCOUNT_DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF") && !Objects.equals(request.requesterType(), "ADMIN"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.decrementRequestsStatistics(request);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRequestsStatistics/{temporalScope}")
    public Long getRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request, @PathVariable String temporalScope)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.clientType(), "SUPERADMIN") && !Objects.equals(currentUser.getType(), request.clientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(Objects.equals(request.clientType(), "ADMIN"))
        {
            if(!request.clientType().equals(currentUser.getType()) || !Objects.equals(request.clientId(), currentUser.getId()))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }

        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.requestType(), "SIGNUP") && !Objects.equals(request.requestType(), "ACCOUNT_MODIFICATION") && !Objects.equals(request.requestType(), "ACCOUNT_DELETION"))
        {
            throw new InvalidRequestException("Request type must be SIGNUP or ACCOUNT_MODIFICATION or ACCOUNT_DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF") && !Objects.equals(request.requesterType(), "ADMIN"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.requesterType(), "DOCTOR") && !Objects.equals(request.requesterType(), "RADIOLOGIST") && !Objects.equals(request.requesterType(), "LABSTAFF"))
            {
                throw new InvalidUserException("Requester type must be DOCTOR or RADIOLOGIST or LABSTAFF for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.getRequestsStatistics(request, temporalScope);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/incrementAccountStatistics")
    public String incrementAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.accountHolderType(), "DOCTOR") || Objects.equals(request.accountHolderType(), "RADIOLOGIST") || Objects.equals(request.accountHolderType(), "LABSTAFF"))
        {
            if(!Objects.equals(currentUser.getType(), "ADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.accountHolderType(), "ADMIN"))
        {
            if(!Objects.equals(currentUser.getType(), "SUPERADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.accountHolderType(), "PATIENT"))
        {
            if(!Objects.equals(currentUser.getType(), "PATIENT"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }


        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.accountOperationType(), "REGISTRATION") && !Objects.equals(request.accountOperationType(), "MODIFICATION") && !Objects.equals(request.accountOperationType(), "DELETION"))
        {
            throw new InvalidRequestException("Account operation type must be REGISTRATION OR MODIFICATION OR DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "ADMIN") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.incrementAccountStatistics(request);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/decrementAccountStatistics")
    public String decrementAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.accountHolderType(), "DOCTOR") || Objects.equals(request.accountHolderType(), "RADIOLOGIST") || Objects.equals(request.accountHolderType(), "LABSTAFF"))
        {
            if(!Objects.equals(currentUser.getType(), "ADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.accountHolderType(), "ADMIN"))
        {
            if(!Objects.equals(currentUser.getType(), "SUPERADMIN"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }
        else if(Objects.equals(request.accountHolderType(), "PATIENT"))
        {
            if(!Objects.equals(currentUser.getType(), "PATIENT"))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }

        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.accountOperationType(), "REGISTRATION") && !Objects.equals(request.accountOperationType(), "MODIFICATION") && !Objects.equals(request.accountOperationType(), "DELETION"))
        {
            throw new InvalidRequestException("Account operation type must be REGISTRATION OR MODIFICATION OR DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "ADMIN") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.decrementAccountStatistics(request);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAccountStatistics/{temporalScope}")
    public Long getAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request, @PathVariable String temporalScope)
    {
        analyticsService.updateAnalyticsDatabase();

        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

        if(Objects.equals(request.clientType(), "SUPERADMIN") && !Objects.equals(currentUser.getType(), request.clientType()))
        {
            throw new UnauthorisedUserException("Permission denied!");
        }
        if(Objects.equals(request.clientType(), "ADMIN"))
        {
            if(!request.clientType().equals(currentUser.getType()) || !Objects.equals(request.clientId(), currentUser.getId()))
            {
                throw new UnauthorisedUserException("Permission denied!");
            }
        }

        if(!Objects.equals(request.clientType(), "ADMIN") && !Objects.equals(request.clientType(), "SUPERADMIN"))
        {
            throw new InvalidUserException("Stats client type must be either ADMIN or SUPERADMIN");
        }

        if(!Objects.equals(request.accountOperationType(), "REGISTRATION") && !Objects.equals(request.accountOperationType(), "MODIFICATION") && !Objects.equals(request.accountOperationType(), "DELETION"))
        {
            throw new InvalidRequestException("Account operation type must be REGISTRATION OR MODIFICATION OR DELETION");
        }

        if(request.clientType().equals("SUPERADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "ADMIN") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT or ADMIN for stats client of type SUPERADMIN");
            }
        }
        else if(request.clientType().equals("ADMIN"))
        {
            if (!Objects.equals(request.accountHolderType(), "DOCTOR") && !Objects.equals(request.accountHolderType(), "RADIOLOGIST") && !Objects.equals(request.accountHolderType(), "LABSTAFF") && !Objects.equals(request.accountHolderType(), "PATIENT"))
            {
                throw new InvalidUserException("Account holder type must be DOCTOR or RADIOLOGIST or LABSTAFF or PATIENT for stats client of type ADMIN");
            }
        }

        if(!Objects.equals(request.clientType(), "SUPERADMIN") && !analyticsService.isUserValid(request.clientType(), request.clientId(), authorizationHeader))
        {
            throw new InvalidUserException("Invalid stats client!");
        }

        return analyticsService.getAccountStatistics(request, temporalScope);

    }
}
