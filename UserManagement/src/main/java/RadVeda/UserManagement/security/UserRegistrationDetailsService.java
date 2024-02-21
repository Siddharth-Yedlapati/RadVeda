package radveda.usermanagement.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import radveda.usermanagement.Users.Admin.user.AdminRepository;
import radveda.usermanagement.Users.Doctor.user.DoctorRepository;
import radveda.usermanagement.Users.LabStaff.user.LabStaffRepository;
import radveda.usermanagement.Users.Patient.user.PatientRepository;
import radveda.usermanagement.Users.Radiologist.user.RadiologistRepository;
import radveda.usermanagement.Users.SuperAdmin.user.SuperAdminRepository;

import javax.swing.text.html.Option;

@Service
@RequiredArgsConstructor
public class UserRegistrationDetailsService implements UserDetailsService {
    private final AdminRepository adminRepository;
    private final DoctorRepository doctorRepository;
    private final LabStaffRepository labStaffRepository;
    private final PatientRepository patientRepository;
    private final RadiologistRepository radiologistRepository;
    private final SuperAdminRepository superAdminRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {


        return adminRepository.findByEmail(email)
                .map(UserRegistrationDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
