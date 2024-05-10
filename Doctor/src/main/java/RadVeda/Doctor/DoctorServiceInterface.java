package RadVeda.Doctor;

import java.util.List;
import java.util.Optional;

import RadVeda.Doctor.doctors.DoctorSignUpRequest;
import RadVeda.Doctor.doctors.DoctorTestRequest;
import RadVeda.Doctor.NotesRequest;
import RadVeda.Doctor.ReportRequest;


public interface DoctorServiceInterface { 
    User authenticate(String authorizationHeader);
    DoctorTests prescribeTest(DoctorTestRequest request);
    Optional<Doctor> getDoctor(Long doctorid);
    Doctor addDoctor(DoctorSignUpRequest request);
    String getNotes(Long testID);
    Doctor updateDoctor(DoctorSignUpRequest request, Long Id);
    void deleteDoctor(Long doctorID);
    DoctorTests addNotes(Long id, NotesRequest notes);
    DoctorTests addReport(Long id, ReportRequest report);
    void deleteTest(Long testID);
    List<ConsultedDoctorTests> getConsultedTests(Long doctorID);
    List<ConsultedDoctorTests> getConsultedDoctors(Long testID);
    String getReport(Long testID);
}
