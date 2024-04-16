package RadVeda.Admin.Admin;

import RadVeda.Admin.User;
import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor

@RequestMapping("/admin")

public class AdminServiceController {
    private final AdminService adminService;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("/addAdmins")
    public String addAdmins(@RequestBody AdminRequest adminRequest, final HttpServletRequest request)  throws UnauthorizedUserException{
        adminService.addAdmin(adminRequest);
        return "Success! Admin has been added";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{adminID}/adminDetails")
    public Admin getAdmins(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                              @PathVariable Long adminID) throws UnauthorizedUserException {
        return adminService.findById(adminID).get();
    }


    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/{adminID}/deleteAdmins")
    public String deleteAdmins(@PathVariable Long adminID) throws UnauthorizedUserException {
        adminService.deleteAdmins(adminID);
        return "Admin Successfully Deleted";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAdmins/{adminIDs}")
    public List<Admin> getAdmins(@RequestHeader(value = "Authorization", required = false) String authorizationHeader, @PathVariable("adminIDs") String adminIDs) throws UnauthorizedUserException{
        User user = adminService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }
        List<Long> ids = Arrays.stream(adminIDs.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        return adminService.getAdmins(ids);
    }
}
