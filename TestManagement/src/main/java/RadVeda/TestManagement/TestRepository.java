package RadVeda.TestManagement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface TestRepository extends JpaRepository<Test, Long> {
    @Query(value = "SELECT * FROM test WHERE id = :id" , nativeQuery = true)
    Optional<Test> findById(Long id);

    List<Test> findAll();

    @Query(value = "SELECT * FROM test WHERE doctorid = :doctorID", nativeQuery = true)
    List<Test> findByDoctorID(String doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID", nativeQuery = true)
    List<Test> findByPatientID(String patientID); 

    @Query(value = "SELECT * FROM test WHERE radiologistid = :radiologistID", nativeQuery = true)
    List<Test> findByRadiologistID(String radiologistID); 

    @Query(value = "SELECT * FROM test WHERE lab_staffid = :labstaffID", nativeQuery = true)
    List<Test> findByLabStaffID(String labstaffID);     

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND doctorid = :doctorID", nativeQuery =  true)
    List<Test> findByPatientAndDocID(String patientID, String doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND radiologistid = :radiologistID", nativeQuery =  true)
    List<Test> findAllTestsByPatientAndRadID(String patientID, String radiologistID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND lab_staffid = :labstaffID", nativeQuery =  true)
    List<Test> findAllTestsByPatientAndLabStaffID(String patientID, String labstaffID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND doctorid != :doctorID", nativeQuery =  true)
    List<Test> findConsultedByPatientAndDocID(String patientID, String doctorID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND radiologistid != :radiologistID", nativeQuery =  true)
    List<Test> findConsultedTestsByPatientAndRadID(String patientID, String radiologistID);

    @Query(value = "SELECT * FROM test WHERE patientid = :patientID AND lab_staffid != :labstaffID", nativeQuery =  true)
    List<Test> findConsultedTestsByPatientAndLabStaffID(Long patientID, Long labstaffID);

    @Modifying
    @Transactional
    @Query(value = "UPDATE test SET lab_staffid = :labID WHERE id = :testID", nativeQuery = true)
    void addLabforTest(Long testID, String labID);

    @Modifying
    @Transactional
    @Query(value = "UPDATE test SET radiologistid = :radID WHERE id = :testID", nativeQuery = true)
    void addRadForTest(Long testID, String radID);

    @Modifying
    @Transactional
    @Query(value = "UPDATE test SET patient_status = :patStatus, " +
            "doctor_status = :docStatus, " +
            "radiologist_status = :radStatus, " +
            "lab_staff_status = :labStatus WHERE id = :testID" , nativeQuery = true)
    void updateTestStatus(Long testID, String patStatus, String docStatus, String radStatus, String labStatus);




    @Modifying
    @Transactional
    @Query(value = "DELETE FROM test WHERE id = :testID", nativeQuery = true)
    void deleteTest(Long testID);
}
