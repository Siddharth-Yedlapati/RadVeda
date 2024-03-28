package RadVeda.DoctorService;

import java.util.List;
import java.util.Optional;

import RadVeda.DoctorService.doctors.DoctorSignUpRequest;
import RadVeda.DoctorService.doctors.DoctorTestRequest;

public interface DoctorServiceInterface { 
    User authenticate(String authorizationHeader);
    DoctorTests prescribeTest(DoctorTestRequest request);
    Optional<Doctor> getDoctor(Long doctorid);
    Doctor addDoctor(DoctorSignUpRequest request);
    void deleteDoctor(Long doctorID);
}
