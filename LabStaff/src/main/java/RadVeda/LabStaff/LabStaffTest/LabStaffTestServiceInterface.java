package RadVeda.LabStaff.LabStaffTest;

import RadVeda.LabStaff.User;

import java.util.List;

public interface LabStaffTestServiceInterface {


    LabStaffTest addTestForPatient(Long labId, Long testID);
    void deleteRecord(Long Id);
    void deleteTestsOfLabStaff(Long Id);
    List<Long> getTestsOfLabStaff(Long lab_staff_id);

    User authenticate(String AuthorizationHeader);
}
