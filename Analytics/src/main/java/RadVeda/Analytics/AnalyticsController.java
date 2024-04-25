package RadVeda.Analytics;

import RadVeda.Analytics.Statistics.AccountStatisticsRequest;
import RadVeda.Analytics.Statistics.RequestsStatisticsRequest;
import RadVeda.Analytics.exception.UnauthorisedUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/analytics")
public class AnalyticsController {
    private final AnalyticsService analyticsService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/incrementRequestsStatistics")
    public String incrementRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/decrementRequestsStatistics")
    public String decrementRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRequestsStatistics")
    public Long getRequestsStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody RequestsStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/incrementAccountStatistics")
    public String incrementAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/decrementAccountStatistics")
    public String decrementAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAccountStatistics")
    public Long getAccountStatistics(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @RequestBody AccountStatisticsRequest request)
    {
        User currentUser = analyticsService.authenticate(authorizationHeader);

        if(currentUser == null)
        {
            throw new UnauthorisedUserException("Permission denied!");
        }

    }
}
