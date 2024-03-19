package RadVeda.UserManagement.Users.Test.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.List;


public interface TestRepository extends JpaRepository<Test, Long> {
    Optional<Test> findById(Long id);
    List<Test> findAll();

    @Query(value = "SELECT * FROM test WHERE doctorid = :doctorID", nativeQuery = true)
    List<Test> findByDoctorID(Long doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID", nativeQuery = true)
    List<Test> findByPatientID(Long patientID); 

    @Query(value = "SELECT * FROM test WHERE radiologistid = :radiologistID", nativeQuery = true)
    List<Test> findByRadiologistID(Long radiologistID); 

    @Query(value = "SELECT * FROM test WHERE labstaffid = :labstaffID", nativeQuery = true)
    List<Test> findByLabStaffID(Long labstaffID);     

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND doctorid = :doctorID", nativeQuery =  true)
    List<Test> findByPatientAndDocID(Long patientID, Long doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND radiologistid = :radiologistID", nativeQuery =  true)
    List<Test> findAllTestsByPatientAndRadID(Long patientID, Long radiologistID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND doctorid != :doctorID", nativeQuery =  true)
    List<Test> findConsultedByPatientAndDocID(Long patientID, Long doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND radiologistid != :radiologistID", nativeQuery =  true)
    List<Test> findConsultedTestsByPatientAndRadID(Long patientID, Long radiologistID);
}
