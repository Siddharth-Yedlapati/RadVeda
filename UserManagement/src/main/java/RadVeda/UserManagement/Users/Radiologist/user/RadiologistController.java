package radveda.usermanagement.Users.Radiologist.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/radiologists")
public class RadiologistController {
    private final RadiologistService radiologistService;

    @GetMapping
    public List<Radiologist> getRadiologists() {
        return radiologistService.getRadiologists();
    }
}
