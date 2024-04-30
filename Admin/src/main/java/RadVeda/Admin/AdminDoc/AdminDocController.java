package RadVeda.Admin.AdminDoc;

import RadVeda.Admin.User;
import RadVeda.Admin.exceptions.UnauthorizedUserException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin-doc")
public class AdminDocController {
    private final AdminDocService adminDocService;

    @CrossOrigin(origins = "http://localhost:9191")
    @PostMapping("/addDoc/{adminId}/{docId}")
    public String addDocforAdmin(@PathVariable Long adminId, @PathVariable Long docId,
                                 final HttpServletRequest request) throws UnauthorizedUserException {


        return adminDocService.addDocforAdmin(adminId, docId);

    }

    @CrossOrigin(origins = "http://localhost:9191")
    @DeleteMapping("/deleteDoc/{docId}")
    public String deleteDoc(@PathVariable Long docId,
                                 final HttpServletRequest request) throws UnauthorizedUserException {


        return adminDocService.deleteDoc(docId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{adminId}")
    public List<Long> addDocForAdmin(@RequestHeader(value = "Authorization", required = false) String authorizationHeader,
                                     @PathVariable Long adminId,
                                 final HttpServletRequest request) throws UnauthorizedUserException {

        User user = adminDocService.authenticate(authorizationHeader);

        if(user == null) {
            throw new UnauthorizedUserException("Invalid User!");
        }

        return adminDocService.getDocsOfAdmin(adminId);

    }


}
