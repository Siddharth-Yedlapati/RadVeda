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
import radveda.usermanagement.exception.InvalidInputFormatException;


@Service
@RequiredArgsConstructor
public class UserManagementDetailsService implements UserDetailsService {
    private final AdminRepository adminRepository;
    private final DoctorRepository doctorRepository;
    private final LabStaffRepository labStaffRepository;
    private final PatientRepository patientRepository;
    private final RadiologistRepository radiologistRepository;
    private final SuperAdminRepository superAdminRepository;

    private static String delimiter = ":_:";

    public static String getDelimiter()
    {
        return UserManagementDetailsService.delimiter;
    }

    @Override
    public UserDetails loadUserByUsername(String roleEmail) throws UsernameNotFoundException, InvalidInputFormatException {

        //Splitting the string based on the leftmost occurrence of the delimiter
        String[] parts = roleEmail.split(UserManagementDetailsService.delimiter, 2);

        String role = "";
        String email = "";

        if(parts.length == 2)
        {
            role = parts[0];
            email = parts[1];
        }
        else
        {
            throw new InvalidInputFormatException("Can't extract role and email");
        }


        if(role.equals("ADMIN"))
        {
            return adminRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else if(role.equals("DOCTOR"))
        {
            return doctorRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else if(role.equals("LABSTAFF"))
        {
            return labStaffRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else if(role.equals("PATIENT"))
        {
            return patientRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else if(role.equals("RADIOLOGIST"))
        {
            return radiologistRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else if(role.equals("SUPERADMIN"))
        {
            return superAdminRepository.findByEmail(email)
                    .map(UserManagementDetails::new)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        }
        else
        {
            throw new UsernameNotFoundException("Invalid role");
        }

    }
}
