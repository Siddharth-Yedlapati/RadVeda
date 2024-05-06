package RadVeda.TestManagement;

import RadVeda.TestManagement.StorageEncryption.Converters.EncryptedLongConverter;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.persistence.Convert;
import lombok.RequiredArgsConstructor;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import RadVeda.TestManagement.exception.UserNotFoundException;
import RadVeda.TestManagement.tests.DoctorTestRequest;
import RadVeda.TestManagement.tests.PatientTestRequest;
import RadVeda.TestManagement.tests.TestRequest;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.*;
import java.time.LocalDate;
import java.time.ZoneId;
import RadVeda.TestManagement.StorageEncryption.EncryptionUtility;

@Service
@RequiredArgsConstructor
public class TestService implements TestServiceInterface {
    private final TestRepository testRepository;
    private final TestVerificationOTPRepository testVerificationOTPRepository;
    private final JavaMailSender mailSender;
    private static String delimiter = ":_:";
    // private final SuperAdminVerificationTokenRepository superadminTokenRepository;


    public Long generateOTP() {
        // Create a list of digits from 0 to 9
        List<Integer> digits = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            digits.add(i);
        }

        // Shuffle the list to get a random order
        Collections.shuffle(digits);

        // Build a 6-digit number from the first six unique digits
        long number = 0; // Use long to accumulate the result
        for (int i = 0; i < 6; i++) {
            number = number * 10 + digits.get(i);
        }

        return number;
    }

    public void sendEmail(String mailContent, String recipientEmail) throws MessagingException, UnsupportedEncodingException {
        String subject = "One Time Password for new test being prescribed";
        String senderName = "RadVeda";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("RadVeda.Team@gmail.com", senderName);
        messageHelper.setTo(recipientEmail);
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }

    @Override
    public String sendTestVerificationOTP(Long patientId, Long doctorId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String patientEmail;
        String patientFirstName;
        String doctorFirstName;

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        String url = "http://localhost:9191/patients/getEmailForPatientId/"+patientId;

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return "Failed to send test verification OTP!";
        } catch (RuntimeException e){
            return "Failed to send test verification OTP!";
        }

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            patientEmail = responseEntity.getBody();
        }
        else
        {
            return "Failed to send test verification OTP!";
        }



        restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        url = "http://localhost:9191/doctors/getFirstAndLastNamesForDoctorId/"+doctorId;

        // Sending a GET request to the user management service with the JWT token in the headers
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return "Failed to send test verification OTP!";
        } catch (RuntimeException e){
            return "Failed to send test verification OTP!";
        }

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody(); //doctorFirstName + delimiter + doctorLastName

            String[] parts = responseBody.split(delimiter);
            doctorFirstName = parts[0];
        }
        else
        {
            return "Failed to send test verification OTP!";
        }



        restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        url = "http://localhost:9191/patients/getFirstAndLastNamesForPatientId/"+patientId;

        // Sending a GET request to the user management service with the JWT token in the headers
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return "Failed to send test verification OTP!";
        } catch (RuntimeException e){
            return "Failed to send test verification OTP!";
        }

        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody(); //patientFirstName + delimiter + patientLastName

            String[] parts = responseBody.split(delimiter);
            patientFirstName = parts[0];
        }
        else
        {
            return "Failed to send test verification OTP!";
        }

        Long otp = generateOTP();

        String mailContent = "<p> Hi " + patientFirstName + ", </p>" +
                "<p>Dr "+ doctorFirstName +" wants to prescribe a test for you." + " " +
                "Your One Time Password for allowing this is given below:</p>" +
                otp +
                "<p>Thank you,<br>RadVeda Support Team";

        try
        {
            sendEmail(mailContent, patientEmail);

            Optional<TestVerificationOTP> optionalTestVerificationOTP = testVerificationOTPRepository.findByPatientIdAndDoctorId(patientId, doctorId);
            if(optionalTestVerificationOTP.isEmpty())
            {
                TestVerificationOTP testVerificationOTP = new TestVerificationOTP();

                testVerificationOTP.setOtp(otp);
                testVerificationOTP.setPatientId(patientId);
                testVerificationOTP.setDoctorId(doctorId);

                testVerificationOTPRepository.save(testVerificationOTP);
            }
            else
            {
                TestVerificationOTP existingTestVerificationOTP = optionalTestVerificationOTP.get();

                TestVerificationOTP testVerificationOTP = new TestVerificationOTP();

                testVerificationOTP.setId(existingTestVerificationOTP.getId());
                testVerificationOTP.setOtp(otp);
                testVerificationOTP.setPatientId(patientId);
                testVerificationOTP.setDoctorId(doctorId);

                testVerificationOTPRepository.save(testVerificationOTP);
            }

        } catch (MessagingException e){
            return "Failed to send test verification OTP!";
        } catch (UnsupportedEncodingException e){
            return "Failed to send test verification OTP!";
        }

        return "Test verification OTP sent successfully!";

    }

    @Override
    public String validateTestVerificationOTP(Long patientId, Long doctorId, Long otp, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user
        Optional<TestVerificationOTP> optionalTestVerificationOTP = testVerificationOTPRepository.findByPatientIdAndDoctorId(patientId, doctorId);
        if(optionalTestVerificationOTP.isEmpty())
        {
            return "invalid";
        }
        else
        {
            TestVerificationOTP testVerificationOTP = optionalTestVerificationOTP.get();
            Long correctOtp = testVerificationOTP.getOtp();
            Calendar calendar = Calendar.getInstance();
            if ((testVerificationOTP.getExpirationTime().getTime() - calendar.getTime().getTime()) > 0 && Objects.equals(correctOtp, otp))
            {
                testVerificationOTPRepository.delete(testVerificationOTP);
                return "valid";
            }
            testVerificationOTPRepository.delete(testVerificationOTP);
            return "invalid";
        }
    }

    @Override
    public List<Test> getTests() {
        return testRepository.findAll();
    }

    @Override
    public Test assignLab(String authorizationHeader, Long testId, Long labStaff, long patientID) {
        int flag = 0;
        int flag1 = 0;
        Optional<Test> testRec = findById(testId);
        Test test = testRec.orElseThrow(() -> new UserNotFoundException("Test Assignment Failed"));
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        String requestBody = "";

        try {
            responseEntity = restTemplate.exchange("http://localhost:9199/labstaff-test/"+ labStaff +"/addTest/" + testId, HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        } catch (RuntimeException e){
            flag = 1;
        }
        
        if(!responseEntity.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            flag = 1;
            // throw new UserNotFoundException("Failed to prescribe test");
        }
        try{
            responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/assignRadiologist/" + patientID + "/" + testId, HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class );
        } catch (RuntimeException e){
            flag1 = 1;
        }
        if(!responseEntity.getStatusCode().is2xxSuccessful()){
            flag1 = 1;
        }
        if(flag == 1 || flag1 == 1){        // TODO: ROLLBACK PROPERLY
            throw new UserNotFoundException("Error");
        }
        testRepository.addLabforTest(EncryptionUtility.encrypt(testId), EncryptionUtility.encrypt(labStaff));
        testRepository.updateTestStatus(EncryptionUtility.encrypt(testId),
                EncryptionUtility.encrypt("Test Not Conducted"),
                EncryptionUtility.encrypt("Pending For Review by Radiologist"),
                EncryptionUtility.encrypt(test.getRadiologistStatus()),
                EncryptionUtility.encrypt("Test Not Conducted"));
        return test;
    }
    @Override
    public Test assignRad(String authorizationHeader, Long testId, Long rad) {
        Optional<Test> testRec = findById(testId);
        Test test = testRec.orElseThrow(() -> new UserNotFoundException("Test Assignment Failed"));
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        String requestBody = "{" +
        "\"testID\": \"" + testId + "\"," +
        "\"radiologistID\": \"" + rad + "\"" +
        "}";

        try {
            responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/prescribe-test", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        } catch (RuntimeException e){
            throw new UserNotFoundException("Error in assigning a radiologist");
        }
        
        if(!responseEntity.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            throw new UserNotFoundException("Error in assigning a radiologist");
            // throw new UserNotFoundException("Failed to prescribe test");
        }
        testRepository.addRadForTest(EncryptionUtility.encrypt(testId), EncryptionUtility.encrypt(rad));
        testRepository.updateTestStatus(EncryptionUtility.encrypt(testId),
                EncryptionUtility.encrypt(test.getPatientStatus()),
                EncryptionUtility.encrypt(test.getDoctorStatus()),
                EncryptionUtility.encrypt("Pending for Review"),
                EncryptionUtility.encrypt(test.getLabStaffStatus()));
        return test;
    }


    @Override
    public Test prescribeTest(String authorizationHeader, TestRequest request) {
        var flag = 1;
        var p_flag = 1;

        String dateString = LocalDate.now( ZoneId.of( "Asia/Kolkata" ) )
         .toString();
        String[] parts = dateString.split("-");

         // Reorder the parts to form the output string in "dd/MM/yyyy" format
        String outputDateString = parts[2] + "/" + parts[1] + "/" + parts[0];
 

        var newTest = new Test();
        newTest.setTestType(request.TestType());
        newTest.setDatePrescribed(outputDateString);
        newTest.setPatientStatus(request.PatientStatus());
        newTest.setDoctorStatus(request.DoctorStatus());
        newTest.setRadiologistStatus(request.RadiologistStatus());
        newTest.setLabStaffStatus(request.LabStaffStatus());
        newTest.setDoctorsRemarksforPatient(request.DoctorsRemarksforPatient());
        newTest.setDoctorsRemarksforRadiologist(request.DoctorsRemarksforRadiologist());
        newTest.setDoctorID(request.doctorID());
        newTest.setPatientID(request.PatientID());
        newTest.setDoctorNotes(request.DoctorNotes());
        newTest.setOriginalImage(request.OriginalImage());
        newTest.setRadiologistID(null);
        newTest.setLabStaffID(null);


        Test savedTest = testRepository.save(newTest);
        
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        String requestBody = "";
        String requestBody_patient = "";

        DoctorTestRequest req = new DoctorTestRequest(savedTest.getId(), savedTest.getPatientID(), savedTest.getDoctorID());

        try {
            ObjectMapper objectmapper = new ObjectMapper();
            requestBody = objectmapper.writeValueAsString(req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        try {
            responseEntity = restTemplate.exchange("http://localhost:9194/doctor/prescribe-test", HttpMethod.POST, new HttpEntity<>(requestBody, headers), String.class);
        } catch (ResourceAccessException e) {
            // testRepository.deleteTest(savedTest.getId());
            flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        } catch (RuntimeException e){
            flag = 2;
        }
        
        if(!responseEntity.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        }
        
        HttpHeaders headers1 = new HttpHeaders();
        headers1.setContentType(MediaType.APPLICATION_JSON);
        headers1.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity1 = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        PatientTestRequest patient_req = new PatientTestRequest(savedTest.getPatientID(), savedTest.getId());
        try {
            ObjectMapper objectmapper1 = new ObjectMapper();
            requestBody_patient = objectmapper1.writeValueAsString(patient_req);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        try {
            responseEntity1 = restTemplate.exchange("http://localhost:9198/patient-test/addTest", HttpMethod.POST, new HttpEntity<>(requestBody_patient, headers1), String.class);
        } catch (ResourceAccessException e) {
            // testRepository.deleteTest(savedTest.getId());
            p_flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        } catch (RuntimeException e){
            p_flag =2;
        }
        if(!responseEntity1.getStatusCode().is2xxSuccessful()){
            // testRepository.deleteTest(savedTest.getId());
            p_flag = 2;
            // throw new UserNotFoundException("Failed to prescribe test");
        }

        
        if(flag == 2 || p_flag == 2){
            testRepository.deleteTest(savedTest.getId());
            HttpHeaders headers_del = new HttpHeaders();
            headers_del.set("Authorization", "Bearer " + jwtToken);
            String doc_url = "http://localhost:9194/doctor/deleteTest/" + savedTest.getId().toString();
            String pat_url = "http://localhost:9198/patient-test/" + savedTest.getId().toString() + "/deletePatient";
            ResponseEntity<String> responseEntity_doc = restTemplate.exchange(doc_url, HttpMethod.DELETE, new HttpEntity<>(headers_del), String.class);
            ResponseEntity<String> responseEntity_patient = restTemplate.exchange(pat_url, HttpMethod.DELETE, new HttpEntity<>(headers_del), String.class);
            throw new UserNotFoundException("Test creation Failed");
        }

        return savedTest;
    }

    @Override
    public Optional<Test> findById(Long id){
        return testRepository.findById(id);
    }

    @Override
    public List<Test> findAllTests(){
        return testRepository.findAll();
    }

    @Override
    public List<Test> findAllTestsByUser(String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByDoctorID(EncryptionUtility.encrypt(userID));
        }
        else if("PATIENT".equals(userType)){
            return testRepository.findByPatientID(EncryptionUtility.encrypt(userID));
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findByRadiologistID(EncryptionUtility.encrypt(userID));
        }
        else if("LABSTAFF".equals(userType)){
            return testRepository.findByLabStaffID(EncryptionUtility.encrypt(userID));
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findAllConsultedTestsByUser(String authorizationHeader, String userType, Long userID){
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        if("DOCTOR".equals(userType)){
            try{
                responseEntity = restTemplate.exchange("http://localhost:9194/doctor/getConsultedTests/" + userID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
            }
            catch(RuntimeException e){
                throw new UserNotFoundException("Failed to fetch test details");
            }
            List<Test> primarytestdetails =  testRepository.findByDoctorID(EncryptionUtility.encrypt(userID));
            List<Test> consultedtestdetails = new ArrayList<>();
            if(responseEntity.getStatusCode() == HttpStatus.OK){
                String responseBody = responseEntity.getBody();
                try{
                    JSONArray jsonArray = new JSONArray(responseBody);
                    List<Long> testIds = new ArrayList<>();
                    for(int i = 0; i < jsonArray.length(); i++){
                        JSONObject jsonObject = jsonArray.getJSONObject(i);
                        Long id = jsonObject.getLong("consultedTestID");
                        Test newtest = testRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Test not found"));
                        consultedtestdetails.add(newtest);
                    }
                }
                catch(JSONException e){
                    throw new UserNotFoundException("Error parsing JSON response");
                }
            }
            return consultedtestdetails;

        }
        else if("RADIOLOGIST".equals(userType)){
            try{
                responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/getConsultedTests/" + userID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
            }
            catch(RuntimeException e){
                throw new UserNotFoundException("Failed to fetch test details");
            }
            List<Test> primarytestdetails =  testRepository.findByRadiologistID(EncryptionUtility.encrypt(userID));
            List<Test> consultedtestdetails = new ArrayList<>();
            if(responseEntity.getStatusCode() == HttpStatus.OK){
                String responseBody = responseEntity.getBody();
                try{
                    JSONArray jsonArray = new JSONArray(responseBody);
                    List<Long> testIds = new ArrayList<>();
                    for(int i = 0; i < jsonArray.length(); i++){
                        JSONObject jsonObject = jsonArray.getJSONObject(i);
                        Long id = jsonObject.getLong("consultedTestID");
                        Test newtest = testRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Test not found"));
                        consultedtestdetails.add(newtest);
                    }
                }
                catch(JSONException e){
                    throw new UserNotFoundException("Error parsing JSON response");
                }
            }
            return consultedtestdetails;
        }
        return new ArrayList<>();  
    }

    @Override
    public List<Test> findAllPrimaryAndConsultedTestsByUser(String authorizationHeader, String userType, Long userID){


        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        if("DOCTOR".equals(userType)){
            try{
                responseEntity = restTemplate.exchange("http://localhost:9194/doctor/getConsultedTests/" + userID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
            }
            catch(RuntimeException e){
                throw new UserNotFoundException("Failed to fetch test details");
            }
            List<Test> primarytestdetails =  testRepository.findByDoctorID(EncryptionUtility.encrypt(userID));
            List<Test> consultedtestdetails = new ArrayList<>();
            if(responseEntity.getStatusCode() == HttpStatus.OK){
                String responseBody = responseEntity.getBody();
                try{
                    JSONArray jsonArray = new JSONArray(responseBody);
                    List<Long> testIds = new ArrayList<>();
                    for(int i = 0; i < jsonArray.length(); i++){
                        JSONObject jsonObject = jsonArray.getJSONObject(i);
                        Long id = jsonObject.getLong("consultedTestID");
                        Test newtest = testRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Test not found"));
                        consultedtestdetails.add(newtest);
                    }
                }
                catch(JSONException e){
                    throw new UserNotFoundException("Error parsing JSON response");
                }
            }
            primarytestdetails.addAll(consultedtestdetails);
            return primarytestdetails;

        }
        else if("RADIOLOGIST".equals(userType)){
            try{
                responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/getConsultedTests/" + userID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
            }
            catch(RuntimeException e){
                throw new UserNotFoundException("Failed to fetch test details");
            }
            List<Test> primarytestdetails =  testRepository.findByRadiologistID(EncryptionUtility.encrypt(userID));
            List<Test> consultedtestdetails = new ArrayList<>();
            if(responseEntity.getStatusCode() == HttpStatus.OK){
                String responseBody = responseEntity.getBody();
                try{
                    JSONArray jsonArray = new JSONArray(responseBody);
                    List<Long> testIds = new ArrayList<>();
                    for(int i = 0; i < jsonArray.length(); i++){
                        JSONObject jsonObject = jsonArray.getJSONObject(i);
                        Long id = jsonObject.getLong("consultedTestID");
                        Test newtest = testRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Test not found"));
                        consultedtestdetails.add(newtest);
                    }
                }
                catch(JSONException e){
                    throw new UserNotFoundException("Error parsing JSON response");
                }
            }
            primarytestdetails.addAll(consultedtestdetails);
            return primarytestdetails;
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findAllTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findByPatientAndDocID(EncryptionUtility.encrypt(patientID), EncryptionUtility.encrypt(userID));
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findAllTestsByPatientAndRadID(EncryptionUtility.encrypt(patientID), EncryptionUtility.encrypt(userID));
        }
        else if("LABSTAFF".equals(userType)){
            return testRepository.findAllTestsByPatientAndLabStaffID(EncryptionUtility.encrypt(patientID), EncryptionUtility.encrypt(userID));
        }
        return new ArrayList<>();
    }

    @Override
    public List<Test> findConsultedTestsByPatientAndUser(Long patientID, String userType, Long userID){
        if("DOCTOR".equals(userType)){
            return testRepository.findConsultedByPatientAndDocID(EncryptionUtility.encrypt(patientID), EncryptionUtility.encrypt(userID));
        }
        else if("RADIOLOGIST".equals(userType)){
            return testRepository.findConsultedTestsByPatientAndRadID(EncryptionUtility.encrypt(patientID), EncryptionUtility.encrypt(userID));
        }
        
        return new ArrayList<>();
    }

    @Override
    public List<User> getPeopleInvolvedForTest(String authorizationHeader, Long testID){

        Test testdetails = testRepository.findById(testID).orElseThrow(() -> new UserNotFoundException("Test Not Found"));
        User labstaff = new User("LABSTAFF", testdetails.getLabStaffID());
        User patient = new User("PATIENT", testdetails.getPatientID());
        List<User> doctors = new ArrayList<>();
        List<User> radiologists = new ArrayList<>();

        String jwtToken = authorizationHeader.replace("Bearer ", "");
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.set("Authorization", "Bearer " + jwtToken);
        ResponseEntity<String> responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        try{
            responseEntity = restTemplate.exchange("http://localhost:9194/doctor/getConsultedDoctors/" + testID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        }
        catch(RuntimeException e){
            throw new UserNotFoundException("Failed to fetch test details");
        }
        if(responseEntity.getStatusCode() == HttpStatus.OK){
            String responseBody = responseEntity.getBody();
            try{
                JSONArray jsonArray = new JSONArray(responseBody);
                for(int i = 0; i < jsonArray.length(); i++){
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    Long id = jsonObject.getLong("doctorID");
                    User doctor = new User("DOCTOR", id);
                    doctors.add(doctor);
                }
            }
            catch(JSONException e){
                throw new UserNotFoundException("Error parsing JSON response");
            }
        }

        try{
            responseEntity = restTemplate.exchange("http://localhost:9201/radiologist/getConsultedRadiologists/" + testID, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        }
        catch(RuntimeException e){
            throw new UserNotFoundException("Failed to fetch test details");
        }
        if(responseEntity.getStatusCode() == HttpStatus.OK){
            String responseBody = responseEntity.getBody();
            try{
                JSONArray jsonArray1 = new JSONArray(responseBody);
                for(int i = 0; i < jsonArray1.length(); i++){
                    JSONObject jsonObject = jsonArray1.getJSONObject(i);
                    Long id = jsonObject.getLong("radiologistID");
                    User radiologist = new User("RADIOLOGIST", id);
                    radiologists.add(radiologist);
                }
            }
            catch(JSONException e){
                throw new UserNotFoundException("Error parsing JSON response");
            }
        }
        
        User primary_doc = new User("DOCTOR", testdetails.getDoctorID());
        User primary_rad = new User("RADIOLOGIST", testdetails.getRadiologistID());

        List<User> consultedpersonnellist = new ArrayList<>();
        consultedpersonnellist.addAll(doctors);
        consultedpersonnellist.addAll(radiologists);
        consultedpersonnellist.add(labstaff);
        consultedpersonnellist.add(patient);
        consultedpersonnellist.add(primary_doc);
        consultedpersonnellist.add(primary_rad);

        return consultedpersonnellist;
    }

    @Override
    public boolean isUserValid(String userType, Long userId, String authorizationHeader)
    { // This function assumes that the current user is an authenticated user

        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        HashMap<String, String> urlMap = new HashMap<>();
        urlMap.put("ADMIN", "http://localhost:9191/admins/validateAdminId/"+userId);
        urlMap.put("DOCTOR", "http://localhost:9191/doctors/validateDoctorId/"+userId);
        urlMap.put("LABSTAFF", "http://localhost:9191/labstaffs/validateLabStaffId/"+userId);
        urlMap.put("PATIENT", "http://localhost:9191/patients/validatePatientId/"+userId);
        urlMap.put("RADIOLOGIST", "http://localhost:9191/radiologists/validateRadiologistId/"+userId);
        urlMap.put("SUPERADMIN", "http://localhost:9191/superadmins/validateSuperAdminId/"+userId);

        String url = urlMap.get(userType);

        // Sending a GET request to the user management service with the JWT token in the headers
        ResponseEntity<String> responseEntity;
        try{
            responseEntity = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers), String.class);
        } catch (HttpClientErrorException.Forbidden ex){ //VERIFY_EXCEPTION
            return false;
        }
        // Checking if the response status is OK (200)
        if (responseEntity.getStatusCode() == HttpStatus.OK)
        {
            // Extracting response body from the response entity
            String responseBody = responseEntity.getBody();
            return Boolean.parseBoolean(responseBody);
        }

        return false;
    }

    @Override
    public User authenticate(String authorizationHeader)
    {
        String jwtToken = "";

        // Checking if the Authorization header is present and not empty
        if (authorizationHeader != null && !authorizationHeader.isEmpty())
        {
            // Extracting JWT bearer token
            jwtToken = authorizationHeader.replace("Bearer ", "");
        }
        else
        {
            // Handling the case where the Authorization header is missing or empty
            return null;
        }

        RestTemplate restTemplate = new RestTemplate();

        // Setting up the request headers with the JWT token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwtToken);

        List<String> userTypes = new ArrayList<>();
        userTypes.add("ADMIN");
        userTypes.add("DOCTOR");
        userTypes.add("LABSTAFF");
        userTypes.add("PATIENT");
        userTypes.add("RADIOLOGIST");
        userTypes.add("SUPERADMIN");

        List<String> authUrls = new ArrayList<>();
        authUrls.add("http://localhost:9191/admins/profile");
        authUrls.add("http://localhost:9191/doctors/profile");
        authUrls.add("http://localhost:9191/labstaffs/profile");
        authUrls.add("http://localhost:9191/patients/profile");
        authUrls.add("http://localhost:9191/radiologists/profile");
        authUrls.add("http://localhost:9191/superadmins/profile");

        User currentUser = null;

        for(int i=0;i<userTypes.size();i++)
        {
       
            // Sending a GET request to the user management service with the JWT token in the headers
            ResponseEntity<String> responseEntity;
            try{
            responseEntity = restTemplate.exchange(authUrls.get(i), HttpMethod.GET, new HttpEntity<>(headers), String.class);
            } catch (HttpClientErrorException.Forbidden ex){
                continue;
            }
            // Checking if the response status is OK (200)
            if (responseEntity.getStatusCode() == HttpStatus.OK)
            {
                // Creating a new User object
                User user = new User();
                user.setType(userTypes.get(i));

                // Extracting user profile JSON from the response body
                String userProfileJson = responseEntity.getBody();

                // Parsing JSON using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    // Reading JSON as a tree
                    JsonNode rootNode = objectMapper.readTree(userProfileJson);

                    // Extracting user ID from the JSON
                    Long userId = rootNode.path("id").asLong();
                    user.setId(userId);
                    currentUser = user;
                    break;
                } catch (JsonProcessingException e) {
                    return null;
                }

            }
        }

        return currentUser;

    }

}
