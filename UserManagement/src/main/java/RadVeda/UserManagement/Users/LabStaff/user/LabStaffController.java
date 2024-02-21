package radveda.usermanagement.Users.LabStaff.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/labstaffs")
public class LabStaffController {
    private final LabStaffService labstaffService;

    @GetMapping
    public List<LabStaff> getLabStaffs() {
        return labstaffService.getLabStaffs();
    }
}
