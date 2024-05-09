package RadVeda.Admin.AdminRad;

import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin-rad")
public class AdminRadServiceController {
    private final AdminRadService adminRadService;

    /* Call from Test Management Service after adding a new test*/
//    @CrossOrigin(origins = "http://localhost:9192")
//    @PostMapping("/addRad")
//    public String addRadforAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
//                                 @RequestBody AdminRadRequest adminRadRequest,
//                                 final HttpServletRequest request)  throws UnauthorizedUserException {
//
//        adminRadService.addRadforAdmin(adminRadRequest);
//        return "Radiologist successfully added";
//    }

    @CrossOrigin(origins = "http://localhost:9192")
    @DeleteMapping("/{radId}/deleteRad")
    public String deleteRad(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                            @PathVariable Long radId) throws UnauthorizedUserException {


        adminRadService.deleteRecord(radId);
        return "Delete Successful!";
    }

    @GetMapping("/{adminID}/getRads")
    public List<Long> getRadsOfAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                     @PathVariable Long adminID) {

        return adminRadService.getRadsOfAdmin(adminID);
    }
}
