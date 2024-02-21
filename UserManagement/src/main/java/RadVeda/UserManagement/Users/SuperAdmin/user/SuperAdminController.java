package radveda.usermanagement.Users.SuperAdmin.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/superadmins")
public class SuperAdminController {
    private final SuperAdminService superadminService;

    @GetMapping
    public List<SuperAdmin> getSuperAdmins() {
        return superadminService.getSuperAdmins();
    }
}
