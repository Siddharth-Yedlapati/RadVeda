package RadVeda.Admin.AdminRequests;

import RadVeda.Admin.User;
import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.persistence.Id;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import java.util.Arrays;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor

@RequestMapping("/requests")
public class RequestsController {

    private final RequestsService requestsService;
    @CrossOrigin(origins = {"http://localhost:9197", "http://localhost:9191"})
    @PostMapping("/makeSignUpRequest/{adminId}")
    public String addSignUpRequest(@RequestBody UserRequest userRequest, @PathVariable Long adminId)
        throws UnauthorizedUserException {

         return requestsService.addUser(userRequest, adminId);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/makeUpdateRequest")
    public String addUpdateRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                   @RequestBody UserRequest userRequest)
            throws UnauthorizedUserException {

        User user = requestsService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }


        return requestsService.addUser(userRequest, 0L);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/userInfo/{id}")
    public UserDetails userInfo(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                         @PathVariable Long id)
        throws UnauthorizedUserException {

        User user = requestsService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }
        System.out.print(id);
        return requestsService.userInfo(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("{adminId}/getRequests/{type}")
    List<RequestsRecord> getRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable Long adminId,
                              @PathVariable String type)
            throws UnauthorizedUserException {

        User user = requestsService.authenticate(authorizationHeader);

        if (user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return requestsService.getRequest(adminId, type);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("{aId}/accept/{id}")
    String acceptRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                         @PathVariable Long id, @PathVariable Long aId)
            throws UnauthorizedUserException {

        User user = requestsService.authenticate(authorizationHeader);

        if (user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return requestsService.accept(authorizationHeader, id, aId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("{aId}/decline/{id}")
    String declineRequest(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                          @PathVariable Long id, @PathVariable Long aId)
            throws UnauthorizedUserException {
        User user = requestsService.authenticate(authorizationHeader);

        if (user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return requestsService.decline(authorizationHeader, id, aId);
    }


}
