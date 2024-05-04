package RadVeda.Analytics;

import RadVeda.Analytics.Statistics.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.Date;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final AccountStatisticsRepository accountStatisticsRepository;
    private final RequestsStatisticsRepository requestsStatisticsRepository;
    private final LastUpdateRepository lastUpdateRepository;

    public String incrementRequestsStatistics(RequestsStatisticsRequest request)
    {
        List<String> temporalScopes = List.of("TODAY", "SO_FAR");
        for(String temporalScope: temporalScopes)
        {
            Optional<RequestsStatistics> optionalRequestsStatistics = requestsStatisticsRepository.findByRequesterTypeAndRequestTypeAndTemporalScopeAndClientTypeAndClientId(request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            if(optionalRequestsStatistics.isEmpty())
            {
                Long count = 0L;
                count++;
                requestsStatisticsRepository.updateIfExists(count, request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            }
            else
            {
                Long count = optionalRequestsStatistics.get().getCount();
                count++;
                requestsStatisticsRepository.updateIfExists(count, request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            }
        }

        return "Successfully incremented stats!";
    }

    public String decrementRequestsStatistics(RequestsStatisticsRequest request)
    {
        List<String> temporalScopes = List.of("TODAY", "SO_FAR");
        for(String temporalScope: temporalScopes)
        {
            Optional<RequestsStatistics> optionalRequestsStatistics = requestsStatisticsRepository.findByRequesterTypeAndRequestTypeAndTemporalScopeAndClientTypeAndClientId(request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            if(optionalRequestsStatistics.isEmpty())
            {
                Long count = 0L;
                count--;
                requestsStatisticsRepository.updateIfExists(count, request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            }
            else
            {
                Long count = optionalRequestsStatistics.get().getCount();
                count--;
                requestsStatisticsRepository.updateIfExists(count, request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
            }
        }

        return "Successfully decremented stats!";
    }

    public Long getRequestsStatistics(RequestsStatisticsRequest request, String temporalScope)
    {
        Optional<RequestsStatistics> optionalRequestsStatistics = requestsStatisticsRepository.findByRequesterTypeAndRequestTypeAndTemporalScopeAndClientTypeAndClientId(request.requesterType(), request.requestType(), temporalScope, request.clientType(), request.clientId());
        if(optionalRequestsStatistics.isEmpty())
        {
            return 0L;
        }
        else
        {
            return optionalRequestsStatistics.get().getCount();
        }
    }

    public String incrementAccountStatistics(AccountStatisticsRequest request)
    {
        List<String> temporalScopes = List.of("TODAY", "SO_FAR");
        for(String temporalScope: temporalScopes)
        {
            Optional<AccountStatistics> optionalAccountStatistics = accountStatisticsRepository.findByAccountHolderTypeAndAccountOperationTypeAndTemporalScopeAndClientTypeAndClientId(request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            if(optionalAccountStatistics.isEmpty())
            {
                Long count = 0L;
                count++;
                accountStatisticsRepository.updateIfExists(count, request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            }
            else
            {
                Long count = optionalAccountStatistics.get().getCount();
                count++;
                accountStatisticsRepository.updateIfExists(count, request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            }
        }

        return "Successfully incremented stats!";
    }

    public String decrementAccountStatistics(AccountStatisticsRequest request)
    {
        List<String> temporalScopes = List.of("TODAY", "SO_FAR");
        for(String temporalScope: temporalScopes)
        {
            Optional<AccountStatistics> optionalAccountStatistics = accountStatisticsRepository.findByAccountHolderTypeAndAccountOperationTypeAndTemporalScopeAndClientTypeAndClientId(request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            if(optionalAccountStatistics.isEmpty())
            {
                Long count = 0L;
                count--;
                accountStatisticsRepository.updateIfExists(count, request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            }
            else
            {
                Long count = optionalAccountStatistics.get().getCount();
                count--;
                accountStatisticsRepository.updateIfExists(count, request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
            }
        }

        return "Successfully decremented stats!";
    }

    public Long getAccountStatistics(AccountStatisticsRequest request, String temporalScope)
    {
        Optional<AccountStatistics> optionalAccountStatistics = accountStatisticsRepository.findByAccountHolderTypeAndAccountOperationTypeAndTemporalScopeAndClientTypeAndClientId(request.accountHolderType(), request.accountOperationType(), temporalScope, request.clientType(), request.clientId());
        if(optionalAccountStatistics.isEmpty())
        {
            return 0L;
        }
        else
        {
            return optionalAccountStatistics.get().getCount();
        }
    }

    public void updateAnalyticsDatabase()
    {
        LocalDate currentDate = LocalDate.now();

        Optional<LastUpdate> optionalLastUpdate = lastUpdateRepository.findById(1L);
        if(optionalLastUpdate.isEmpty())
        {
            LastUpdate lastUpdate = new LastUpdate();
            lastUpdate.setDate(currentDate);
            lastUpdateRepository.save(lastUpdate);
        }
        else
        {
            LastUpdate lastUpdate = optionalLastUpdate.get();

            if(!Objects.equals(lastUpdate.getDate(), currentDate))
            {
                lastUpdateRepository.updateDateById(1L, currentDate);

                //reset all stats with temporalScope="TODAY" to 0:
                accountStatisticsRepository.resetTodayRecords();
                requestsStatisticsRepository.resetTodayRecords();
            }
        }
    }

    public User authenticate(String authorizationHeader)
    { // NOTE: This function is different from authenticate functions in other services
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }
        else
        {
            // Handling the case where the Authorization header is missing or empty
            return null;
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        List<String> userTypes = new ArrayList<>();
        userTypes.add("ADMIN");
        userTypes.add("DOCTOR");
        userTypes.add("LABSTAFF");
        userTypes.add("PATIENT");
        userTypes.add("RADIOLOGIST");
        userTypes.add("SUPERADMIN");

        List<String> authUrls = new ArrayList<>();
        authUrls.add("http://localhost:9191/admins/profile");
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/labstaffs/profile");
        authUrls.add("http://localhost:9191/patients/profile");
        authUrls.add("http://localhost:9191/radiologists/profile");
        authUrls.add("http://localhost:9191/superadmins/profile");

        User currentUser = null;

        for(int i=0;i<userTypes.size();i++)
        {
            // Sending a GET request to the user management service with the JWT token in the headers
            ResponseEntity<String> responseEntity;
            try{
                responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);
            } catch (HttpClientErrorException.Forbidden ex){
                continue;
            }
            // Checking if the response status is OK (200)
            if (responseEntity.getStatusCode() == HttpStatus.OK)
            {
                // Creating a new User object
                User user = new User();
                user.setType(userTypes.get(i));

                // Extracting user profile JSON from the response body
                String userProfileJson = responseEntity.getBody();

                // Parsing JSON using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    // Reading JSON as a tree
                    JsonNode rootNode = objectMapper.readTree(userProfileJson);

                    // Extracting user ID from the JSON
                    Long userId = rootNode.path("id").asLong();
                    user.setId(userId);

                    // Extracting firstName and lastName from the JSON
                    String firstName = rootNode.path("firstName").asText();
                    String lastName = rootNode.path("lastName").asText();
                    user.setFirstName(firstName);
                    user.setLastName(lastName);

                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }

    public boolean isUserValid(String userType, Long userId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        HashMap<String, String> urlMap = new HashMap<>();
        urlMap.put("ADMIN", "http://localhost:9191/admins/validateAdminId/"+userId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/validateDoctorId/"+userId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/validateLabStaffId/"+userId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/validatePatientId/"+userId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/validateRadiologistId/"+userId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/validateSuperAdminId/"+userId);

        String url = urlMap.get(userType);

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return false;
        }
        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody();
            return Boolean.parseBoolean(responseBody);
        }

        return false;
    }
}
