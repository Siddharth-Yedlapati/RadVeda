package RadVeda.Admin.AdminRequests;

import RadVeda.Admin.Admin.Admin;
import RadVeda.Admin.Admin.AdminRepository;
import RadVeda.Admin.AdminDoc.AdminDoc;
import RadVeda.Admin.AdminDoc.AdminDocRepository;
import RadVeda.Admin.AdminDoc.AdminDocService;
import RadVeda.Admin.AdminLabStaff.AdminLabStaff;
import RadVeda.Admin.AdminLabStaff.AdminLabStaffService;
import RadVeda.Admin.AdminRad.AdminRadService;
import RadVeda.Admin.StorageEncryption.EncryptionUtility;
import RadVeda.Admin.User;
import RadVeda.Admin.exceptions.UserNotFoundException;
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
    private final AdminDocRepository adminDocRepository;
    private final AdminRepository adminRepository;
    private final AdminDocService adminDocService;
    private final AdminRadService adminRadService;
    private final AdminLabStaffService adminLabStaffService;

    @Override
    public String addUser(UserRequest request, Long adminId) {

        Optional<Admin> adminRec = adminRepository.findById(adminId);
        if(adminRec.isEmpty() && adminId != 0) {
            return "Invalid admin ID";
        }

        Requests requests = new Requests();
        requests.setTypeOfRequest(request.type());
        requests.setRemarks(request.remarks());
        requests.setRole(request.role());
        requests.setAdminId(adminId);

        if(adminId == 0) {
            adminId = adminDocRepository.getAdmin(EncryptionUtility.encrypt(request.userId())).get(0);
            requests.setAdminId(adminId);
        }


        requestsRepository.save(requests);

        UserDetails user = new UserDetails();
        user.setId(requests.getId());
        user.setUserId(request.userId());
        user.setFirstName(request.firstName());
        user.setMiddleName(request.middleName());
        user.setLastName(request.lastName());
        user.setAddressL1(request.addressL1());
        user.setAddressL2(request.addressL2());
        user.setCountry(request.country());
        user.setState(request.state());
        user.setCity(request.city());
        user.setEmail(request.email());
        user.setPhoneNumber(request.phoneNumber());
        user.setOrgName(request.orgName());
        user.setOrgAddressL1(request.orgAddressL1());
        user.setOrgAddressL2(request.orgAddressL2());
        user.setRole(request.role());
        userRepository.save(user);



        return "Success";

    }
    @Override
    public UserDetails userInfo(Long req_Id) throws UserNotFoundException {

        Optional<UserDetails> changedUserRec = userRepository.findById(req_Id);

        UserDetails changedUser = changedUserRec.orElseThrow(() -> new UserNotFoundException("Invalid request Id"));

        return changedUser;
    }

    @Override
    public List<RequestsRecord> getRequest(Long adminId, String type) {
        System.out.println(type);
        List<Requests> req = requestsRepository.getTypeRequests(EncryptionUtility.encrypt(adminId), EncryptionUtility.encrypt(type), EncryptionUtility.encrypt("TBD"));
        List<RequestsRecord> reqs = new ArrayList<>();
        for(Requests r: req) {
            long id = r.getId();
            UserDetails u = userInfo(id);
            RequestsRecord rec = new RequestsRecord(u.getFirstName(), r.getRole(), r.getDateOfRequest());
            reqs.add(rec);
        }
        return reqs;
    }

    @Override
    public String accept(String authHeader, Long req_id, Long aId) throws UserNotFoundException{
        Optional<Requests> reqRec = requestsRepository.findById(req_id);
        Requests req = reqRec.orElseThrow(() -> new UserNotFoundException("Request not found"));
        if(req.getTypeOfRequest().equalsIgnoreCase("signup")) {
            return acceptSignUp(authHeader, req_id, aId);
        }
        if(req.getTypeOfRequest().equalsIgnoreCase("update")) {
            return acceptUpdate(authHeader, req_id, aId);
        }

        return " ";
    }

    @Override
    public String decline(String authHeader, Long req_id, Long aId) throws UserNotFoundException {
        Optional<Requests> reqRec = requestsRepository.findById(req_id);
        Requests req = reqRec.orElseThrow(() -> new UserNotFoundException("Request not found"));
        if(req.getTypeOfRequest().equalsIgnoreCase("signup")) {
            return declineSignUp(authHeader, req_id, aId);
        }
        return " ";
    }


    public String acceptSignUp(String authorizationHeader, Long req_id, Long aId) {

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


        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        String requestBody = "";

        UserDetails user = userInfo(req_id);
        String userRole = user.getRole().toLowerCase();

        try {
            responseEntity = restTemplate.exchange("http://localhost:9191/"+userRole+"s/acceptSignUp/"+user.getUserId(),
                    HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);

            if(responseEntity.getBody()!= null && responseEntity.getBody().equalsIgnoreCase("success")){
                if(userRole.equalsIgnoreCase("doctor")) adminDocService.addDocforAdmin(user.getUserId(), aId);
                if(userRole.equalsIgnoreCase("radiologist")) adminRadService.addRadForAdmin(user.getUserId(), aId);
                if(userRole.equalsIgnoreCase("labstaff")) adminLabStaffService.addLabStaffForAdmin(user.getUserId(), aId);
                requestsRepository.updateStatusToAccept(req_id, EncryptionUtility.encrypt("ACCEPTED"));
            }
        }
        catch (RuntimeException e) {
            e.printStackTrace();
            return "Failed to Accept";
        }

        return responseEntity.getBody();


    }

    public String declineSignUp(String authorizationHeader, Long req_id, Long aId) {
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


        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        String requestBody = "";

        UserDetails user = userInfo(req_id);
        String userRole = user.getRole().toLowerCase();

        try {
            responseEntity = restTemplate.exchange("http://localhost:9191/"+userRole+"s/declineSignUp/"+user.getUserId(),
                    HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);

            if(responseEntity.getBody()!= null && responseEntity.getBody().equalsIgnoreCase("success")) {
                requestsRepository.updateStatusToDecline(req_id, EncryptionUtility.encrypt("DECLINED"));
            }

        }
        catch (RuntimeException e) {
            e.printStackTrace();
            return "Failed to Decline";
        }

        return responseEntity.getBody();
    }

    public String acceptUpdate(String authorizationHeader, Long req_id, Long aId) {

        UserDetails user = userInfo(req_id);


        String requestBody = "";

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


        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        AceeptRecord rec = new AceeptRecord(
                user.getUserId(),
                user.getFirstName(),
                user.getMiddleName(),
                user.getLastName(),
                user.getAddressL1(),
                user.getAddressL2(),
                user.getCountry(),
                user.getState(),
                user.getCity(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getRole(),
                user.getOrgName(),
                user.getOrgAddressL1(),
                user.getOrgAddressL2()
        );

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(rec);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        try {
            responseEntity = restTemplate.exchange("http://localhost:9191/"+ user.getRole().toLowerCase() +"s/update",
                    HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);

            if(responseEntity.getBody()!= null && responseEntity.getBody().equalsIgnoreCase("success")){
                requestsRepository.updateStatusToAccept(req_id, EncryptionUtility.encrypt("ACCEPTED"));
            }
        }
        catch (RuntimeException e) {
            e.printStackTrace();
            return "Failed to Accept";
        }


        return responseEntity.getBody();

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
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/admins/profile");
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
                // Creating a new doctor object
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
