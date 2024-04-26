package RadVeda.SuperAdmin.SuperAdminRequests;

import RadVeda.SuperAdmin.User;
import RadVeda.SuperAdmin.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RequestsService implements RequestsServiceInterface {
    private final RequestsRepository requestsRepository;
    private final UserRepository userRepository;

    @Override
    public String addUser(UserRequest request) {

        UserDetails admin = new UserDetails();
        admin.setAdminId(request.adminId());
        admin.setFirstName(request.firstName());
        admin.setMiddleName(request.middleName());
        admin.setLastName(request.lastName());
        admin.setAddressL1(request.addressL1());
        admin.setAddressL2(request.addressL2());
        admin.setCountry(request.country());
        admin.setState(request.state());
        admin.setCity(request.city());
        admin.setEmail(request.email());
        admin.setPhoneNumber(request.phoneNumber());
        admin.setOrgName(request.orgName());
        admin.setOrgAddressL1(request.orgAddressL1());
        admin.setOrgAddressL2(request.orgAddressL2());
        admin.setRole(request.role());

        Requests requests = new Requests();
        requests.setTypeOfRequest(request.type());
        requests.setRemarks(request.remarks());

        userRepository.save(admin);
        requestsRepository.save(requests);

        return "Request is sent for approval";

    }
    @Override
    public UserDetails userInfo(Long req_Id) throws UserNotFoundException {

        Optional<UserDetails> changedUserRec = userRepository.findById(req_Id);

        UserDetails changedUser = changedUserRec.orElseThrow(() -> new UserNotFoundException("Invalid request Id"));

        return changedUser;
    }

    @Override
    public List<Requests> getRequest(String type) {
        return requestsRepository.getTypeRequests(type);
    }

    public String accept(String authHeader, Long req_id) {

        UserDetails admin = userInfo(req_id);


        String requestBody = "";

        String jwtToken = authHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        AceeptRecord rec = new AceeptRecord(
                admin.getAdminId(),
                admin.getFirstName(),
                admin.getMiddleName(),
                admin.getLastName(),
                admin.getAddressL1(),
                admin.getAddressL2(),
                admin.getCountry(),
                admin.getState(),
                admin.getCity(),
                admin.getEmail(),
                admin.getPhoneNumber(),
                admin.getRole(),
                admin.getOrgName(),
                admin.getOrgAddressL1(),
                admin.getOrgAddressL2()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(rec);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        try {
            responseEntity = restTemplate.exchange("http://localhost:9191/consent/sendConsentRequest",
                    HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);

            requestsRepository.updateStatus(req_id);
        }
        catch (RuntimeException e) {
            e.printStackTrace();
        }


        return responseEntity.getBody();

    }

    public void decline(Long req_id) {

    }
    @Override
    public User authenticate(String authorizationHeader)
    {
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
                // Creating a new Admin object
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
                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }

}
