package RadVeda.SuperAdmin.SuperAdmin;

import RadVeda.SuperAdmin.SuperAdmin.SuperAdmin;
import RadVeda.SuperAdmin.exceptions.*;
import RadVeda.SuperAdmin.User;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import java.util.Arrays;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor

@RequestMapping("/super-admin")
public class SuperAdminController {

    private final SuperAdminService SuperAdminService;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("/addSuperAdmin")
    public String addSuperAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                @RequestBody SuperAdminRequest superAdminRequest, final HttpServletRequest request)
            throws UnauthorizedUserException{

        User user = SuperAdminService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid UserDetails!");
        }


        SuperAdminService.addSuperAdmin(superAdminRequest);
        return "Success! SuperAdmin has been added";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{SuperAdminID}/superAdminDetails")
    public SuperAdmin getSuperAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable Long SuperAdminID) throws UnauthorizedUserException {

         User user = SuperAdminService.authenticate(authorizationHeader);

         if(user == null) {
             throw new UnauthorizedUserException("Invalid UserDetails!");
         }

         return SuperAdminService.findById(SuperAdminID).get();
     }


    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/{SuperAdminID}/deleteSuperAdmin")
    public String deleteSuperAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                   @PathVariable Long SuperAdminID) throws UnauthorizedUserException {

         User user = SuperAdminService.authenticate(authorizationHeader);

         if(user == null) {
             throw new UnauthorizedUserException("Invalid UserDetails!");
         }

        SuperAdminService.deleteSuperAdmin(SuperAdminID);
        return "SuperAdmin Successfully Deleted";
    }


}
