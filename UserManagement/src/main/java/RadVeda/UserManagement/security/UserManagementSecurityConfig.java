package RadVeda.UserManagement.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import RadVeda.UserManagement.security.jwt.JWTAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class UserManagementSecurityConfig {

    @Autowired
    private JWTAuthenticationFilter authenticationFilter;

    @Autowired
    private UserManagementDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        var authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        authorizationManagerRequestMatcherRegistry -> authorizationManagerRequestMatcherRegistry
                                .requestMatchers("/authenticate/**").permitAll()
                                .requestMatchers("/adminSignUp/**").permitAll()
                                .requestMatchers("/admins/**").hasAnyAuthority("ADMIN")
                                .requestMatchers("/admins/validateAdminId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF")
                                .requestMatchers("/superadminSignUp/**").permitAll()
                                .requestMatchers("/superadmins/**").hasAnyAuthority("SUPERADMIN")
                                .requestMatchers("/superadmins/validateSuperAdminId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF")
                                .requestMatchers("/doctorSignUp/**").permitAll()
                                .requestMatchers("/doctors/**").hasAnyAuthority("DOCTOR")
                                .requestMatchers("/doctors/validateDoctorId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF")
                                .requestMatchers("/patientSignUp/**").permitAll()
                                .requestMatchers("/patients/**").hasAnyAuthority("PATIENT")
                                .requestMatchers("/patients/validatePatientId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF")
                                .requestMatchers("/radiologistSignUp/**").permitAll()
                                .requestMatchers("/radiologists/**").hasAnyAuthority("RADIOLOGIST")
                                .requestMatchers("/radiologists/validateRadiologistId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF")
                                .requestMatchers("/labstaffSignUp/**").permitAll()
                                .requestMatchers("/labstaffs/**").hasAnyAuthority("LABSTAFF")
                                .requestMatchers("/labstaffs/validateLabStaffId/{id}").hasAnyAuthority("ADMIN", "SUPERADMIN", "DOCTOR", "PATIENT", "RADIOLOGIST", "LABSTAFF").anyRequest()
                                .authenticated())
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

}
