package RadVeda.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/getSignupRequests")
    public ResponseEntity<List<UserSignupRequest>> getSignupRequests() {
        List<UserSignupRequest> signupRequests = adminService.getSignupRequests();
        return new ResponseEntity<>(signupRequests, HttpStatus.OK);
    }

    @PostMapping("/{ID}/addSignupRequest")
    public ResponseEntity<String> addSignupRequest(@PathVariable("ID") Long adminId, @RequestBody UserSignupRequest signupRequest) {
        adminService.addSignupRequest(adminId, signupRequest);
        return new ResponseEntity<>("Signup request added successfully", HttpStatus.CREATED);
    }

    @GetMapping("/getDeletionRequests")
    public ResponseEntity<List<AccountDeletionRequest>> getDeletionRequests() {
        List<AccountDeletionRequest> deletionRequests = adminService.getDeletionRequests();
        return new ResponseEntity<>(deletionRequests, HttpStatus.OK);
    }

    @PostMapping("/{ID}/addDeleteRequest")
    public ResponseEntity<String> addDeleteRequest(@PathVariable("ID") Long adminId, @RequestBody AccountDeletionRequest deleteRequest) {
        adminService.addDeleteRequest(adminId, deleteRequest);
        return new ResponseEntity<>("Account deletion request added successfully", HttpStatus.CREATED);
    }

    @GetMapping("/getModificationRequests")
    public ResponseEntity<List<AccountModificationRequest>> getModificationRequests() {
        List<AccountModificationRequest> modificationRequests = adminService.getModificationRequests();
        return new ResponseEntity<>(modificationRequests, HttpStatus.OK);
    }

    @PostMapping("/{ID}/addModifyRequest")
    public ResponseEntity<String> addModifyRequest(@PathVariable("ID") Long adminId, @RequestBody AccountModificationRequest modifyRequest) {
        adminService.addModifyRequest(adminId, modifyRequest);
        return new ResponseEntity<>("Account modification request added successfully", HttpStatus.CREATED);
    }

    @GetMapping("/admin-list")
    public ResponseEntity<List<Admin>> getAdminList() {
        List<Admin> admins = adminService.getAllAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }
}
