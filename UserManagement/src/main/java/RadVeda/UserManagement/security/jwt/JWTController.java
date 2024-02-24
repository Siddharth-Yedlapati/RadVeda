package radveda.usermanagement.security.jwt;

import radveda.usermanagement.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import radveda.usermanagement.security.UserManagementDetailsService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/authenticate")
public class JWTController {
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping
    public String getTokenForAuthenticatedUser(@RequestBody JWTAuthenticationRequest authRequest) {
        String roleEmail = authRequest.getUserRole() + UserManagementDetailsService.getDelimiter() + authRequest.getUserName();
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
