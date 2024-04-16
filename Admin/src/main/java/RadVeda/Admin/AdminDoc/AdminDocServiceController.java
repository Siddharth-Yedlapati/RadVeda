package RadVeda.Admin.AdminDoc;

import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin-doc")
public class AdminDocServiceController {
private final AdminDocService adminDocService;

    /* Call from Test Management Service after adding a new test*/
    @CrossOrigin(origins = "http://localhost:9192")
    @PostMapping("/addDoc")
    public String addDocforAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                    @RequestBody AdminDocRequest adminDocRequest,
                                    final HttpServletRequest request)  throws UnauthorizedUserException {

//        User user = adminDocService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }


        adminDocService.addDocforAdmin(adminDocRequest);
        return "Doc successfully added";
    }

    @CrossOrigin(origins = "http://localhost:9192")
    @DeleteMapping("/{docId}/deleteDoc")
    public String deleteDoc(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                @PathVariable Long docId) throws UnauthorizedUserException {

//        User user = adminDocService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        adminDocService.deleteRecord(docId);
        return "Delete Successful!";
    }

    @GetMapping("/{adminID}/getDocs")
    public List<Long> getDocsOfAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                        @PathVariable Long adminID) {
//        User user = patientTestService.authenticate(authorizationHeader);
//
//        if(user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }

        return adminDocService.getDocsOfAdmin(adminID);
    }
}

//package RadVeda.Admin.AdminDoc;
//
//import RadVeda.Admin.User;
//import RadVeda.Admin.exceptions.UnauthorizedUserException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.List;
//
//@RestController
//@RequestMapping("/admin-doc")
//public class AdminDocServiceController {
//
//    @Autowired
//    private AdminDocService adminDocService;
//
//    @CrossOrigin(origins = "http://localhost:9192")
//    @PostMapping("/addDoc")
//    public String addDocforAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
//                                 @RequestBody AdminDocRequest adminDocRequest,
//                                 final HttpServletRequest request) throws UnauthorizedUserException {
//
//        User user = adminDocService.authenticate(authorizationHeader);
//
//        if (user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }
//
//        adminDocService.addDocforAdmin(adminDocRequest);
//        return "Document successfully added";
//    }
//
//    @CrossOrigin(origins = "http://localhost:9192")
//    @DeleteMapping("/{docId}/deleteDoc")
//    public String deleteDoc(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
//                            @PathVariable Long docId) throws UnauthorizedUserException {
//
//        User user = adminDocService.authenticate(authorizationHeader);
//
//        if (user == null) {
//            throw new UnauthorizedUserException("Invalid User!");
//        }
//
//        adminDocService.deleteRecord(docId);
//        return "Delete Successful!";
//    }
//
//    @GetMapping("/{docId}/getDocs")
//    public List<Long> getDocsOfAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
//                                     @PathVariable Long docId) {
//        return adminDocService.getDocsOfAdmin(docId);
//    }
//}
