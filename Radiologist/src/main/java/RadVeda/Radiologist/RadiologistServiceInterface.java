package RadVeda.Radiologist;

import java.util.List;
import java.util.Optional;

import RadVeda.Radiologist.radiologists.*;
import RadVeda.Radiologist.NotesRequest;


public interface RadiologistServiceInterface { 
    User authenticate(String authorizationHeader);
    RadiologistTests prescribeTest(RadiologistTestRequest request);
    Optional<Radiologist> getRadiologist(Long radiologistID);
    Radiologist addRadiologist(RadiologistSignUpRequest request);
    void deleteRadiologist(Long radiologistID);
    RadiologistTests addNotes(Long id, NotesRequest notes);
    void deleteTest(Long testID);
    List<ConsultedRadiologistTests> getConsultedTests(Long radiologistID);
    List<ConsultedRadiologistTests> getConsultedRadiologists(Long testID);
    String getNotes(Long testID);
    List<Long> availableRadiologists();

    void assignRadiologist(String authHeader, Long patId, Long testId);
}
