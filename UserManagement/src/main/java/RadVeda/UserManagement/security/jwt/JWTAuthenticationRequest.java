package radveda.usermanagement.security.jwt;

import lombok.Data;

@Data
public class JWTAuthenticationRequest {
    private String userName;
    private String password;
    private String userRole;
}
