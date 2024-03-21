package RadVeda.TestManagement.tests;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import RadVeda.TestManagement.TestService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/prescribe-test")
public class PrescribeTestController {

    private final TestService testService;

    @PostMapping
    public String prescribeTest(@RequestBody TestRequest testRequest,
            final HttpServletRequest request) {
        System.out.println("Request accessed..........");
        testService.prescribeTest(testRequest);
        return "Success!! Test has been prescribed";
    }

    // public String applicationUrl(HttpServletRequest request) {
    //     return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    // }
}
