package RadVeda.Doctor;

import java.util.List;
import java.util.Optional;

import RadVeda.Doctor.doctors.DoctorSignUpRequest;
import RadVeda.Doctor.doctors.DoctorTestRequest;

public interface DoctorServiceInterface { 
    User authenticate(String authorizationHeader);
    DoctorTests prescribeTest(DoctorTestRequest request);
    Optional<Doctor> getDoctor(Long doctorid);
    Doctor addDoctor(DoctorSignUpRequest request);
    void deleteDoctor(Long doctorID);
    DoctorTests addNotes(Long id, String notes);
}
