package radveda.usermanagement.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
@EnableWebSecurity
public class UserRegistrationSecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        authorizationManagerRequestMatcherRegistry -> authorizationManagerRequestMatcherRegistry
                                .requestMatchers("/adminSignUp/**").permitAll()
                                .requestMatchers("/admins/**").hasAnyAuthority("ADMIN")
                                .requestMatchers("/superadminSignUp/**").permitAll()
                                .requestMatchers("/superadmins/**").hasAnyAuthority("SUPERADMIN")
                                .requestMatchers("/doctorSignUp/**").permitAll()
                                .requestMatchers("/doctors/**").hasAnyAuthority("DOCTOR")
                                .requestMatchers("/patientSignUp/**").permitAll()
                                .requestMatchers("/patients/**").hasAnyAuthority("PATIENT")
                                .requestMatchers("/radiologistSignUp/**").permitAll()
                                .requestMatchers("/radiologists/**").hasAnyAuthority("RADIOLOGIST")
                                .requestMatchers("/labstaffSignUp/**").permitAll()
                                .requestMatchers("/labstaffs/**").hasAnyAuthority("LABSTAFF")
                                .anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

}
