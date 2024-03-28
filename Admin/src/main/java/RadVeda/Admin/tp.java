package RadVeda.Admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tests")
public class tp {
        @GetMapping("/hello")
        public String t() {
            return "Hello, World!";
        }
    }

