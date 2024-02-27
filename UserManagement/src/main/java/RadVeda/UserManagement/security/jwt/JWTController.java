package RadVeda.UserManagement.security.jwt;

import RadVeda.UserManagement.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import RadVeda.UserManagement.security.UserManagementDetailsService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/authenticate")
public class JWTController {
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping
    public String getTokenForAuthenticatedUser(@RequestBody JWTAuthenticationRequest authRequest) {
        System.out.println("Authenticating...");
        String roleEmail = authRequest.getUserRole() + UserManagementDetailsService.getDelimiter()
                + authRequest.getUserName();
        Authentication authentication = authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(roleEmail, authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(roleEmail);
        } else {
            throw new UserNotFoundException("Invalid user credentials");
        }
    }
}
