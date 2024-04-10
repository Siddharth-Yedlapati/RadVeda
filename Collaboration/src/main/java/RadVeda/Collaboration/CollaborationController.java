package RadVeda.Collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/collaboration")
public class CollaborationController {
    private final CollaborationService collaborationService;
}
