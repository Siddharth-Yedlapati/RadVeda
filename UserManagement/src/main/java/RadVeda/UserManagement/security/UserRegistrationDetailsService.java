package radveda.usermanagement.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.Doctor.user.DoctorRepository;

@Service
@RequiredArgsConstructor
public class UserRegistrationDetailsService implements UserDetailsService {
    private final DoctorRepository doctorRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return doctorRepository.findByEmail(email)
                .map(UserRegistrationDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
