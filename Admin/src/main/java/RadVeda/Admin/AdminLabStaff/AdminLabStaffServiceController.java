package RadVeda.Admin.AdminLabStaff;

import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin-labstaff")

public class AdminLabStaffServiceController {
    private final AdminLabStaffService adminLabStaffService;

    /* Call from Test Management Service after adding a new test*/
    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping("/addLabStaff")
    public String addLabStaffforAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                 @RequestBody AdminLabStaffRequest adminLabStaffRequest,
                                 final HttpServletRequest request)  throws UnauthorizedUserException {
        adminLabStaffService.addLabStaffforAdmin(adminLabStaffRequest);
        return "LabStaff successfully added";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @DeleteMapping("/{labstaffId}/deleteLabStaff")
    public String deleteLabStaff(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                            @PathVariable Long labstaffId) throws UnauthorizedUserException {
        adminLabStaffService.deleteRecord(labstaffId);
        return "Delete Successful!";
    }

    @GetMapping("/{adminID}/getLabStaffs")
    public List<Long> getLabStaffsOfAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                     @PathVariable Long adminID) {
        return adminLabStaffService.getLabStaffsOfAdmin(adminID);
    }
}