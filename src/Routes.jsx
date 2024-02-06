import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SuperAdminReviewAccountDeletionRequests = React.lazy(
  () => import("pages/SuperAdminReviewAccountDeletionRequests"),
);
const SuperAdminReviewAccountModificationRequests = React.lazy(
  () => import("pages/SuperAdminReviewAccountModificationRequests"),
);
const SuperAdminViewAdmins = React.lazy(
  () => import("pages/SuperAdminViewAdmins"),
);
const SuperAdminReviewSignupRequests = React.lazy(
  () => import("pages/SuperAdminReviewSignupRequests"),
);
const SuperAdminDashboard = React.lazy(
  () => import("pages/SuperAdminDashboard"),
);
const SuperAdminLoginPage = React.lazy(
  () => import("pages/SuperAdminLoginPage"),
);
const DoctorOwnPendingForReviewByRadiologistHistory = React.lazy(
  () => import("pages/DoctorOwnPendingForReviewByRadiologistHistory"),
);
const DoctorConsultationPendingForReviewByRadiologistHisto = React.lazy(
  () => import("pages/DoctorConsultationPendingForReviewByRadiologistHisto"),
);
const DoctorOwnDiagnosisCompletedHistory = React.lazy(
  () => import("pages/DoctorOwnDiagnosisCompletedHistory"),
);
const DoctorOwnPendingForReviewByDoctorHistory = React.lazy(
  () => import("pages/DoctorOwnPendingForReviewByDoctorHistory"),
);
const DoctorConsultationDiagnosisCompletedHistory = React.lazy(
  () => import("pages/DoctorConsultationDiagnosisCompletedHistory"),
);
const DoctorConsultationPendingForReviewByDoctorHistory = React.lazy(
  () => import("pages/DoctorConsultationPendingForReviewByDoctorHistory"),
);
const DoctorOwnConsultOtherDoctors = React.lazy(
  () => import("pages/DoctorOwnConsultOtherDoctors"),
);
const DoctorConsultationConsultOtherDoctors = React.lazy(
  () => import("pages/DoctorConsultationConsultOtherDoctors"),
);
const DoctorOwnPendingForReviewByRadiologist = React.lazy(
  () => import("pages/DoctorOwnPendingForReviewByRadiologist"),
);
const DoctorConsultationPendingForReviewByRadiologist = React.lazy(
  () => import("pages/DoctorConsultationPendingForReviewByRadiologist"),
);
const DoctorOwnDiagnosisCompleted = React.lazy(
  () => import("pages/DoctorOwnDiagnosisCompleted"),
);
const DoctorOwnPendingForReview = React.lazy(
  () => import("pages/DoctorOwnPendingForReview"),
);
const DoctorConsultationDiagnosisCompleted = React.lazy(
  () => import("pages/DoctorConsultationDiagnosisCompleted"),
);
const DoctorConsultationPendingForReview = React.lazy(
  () => import("pages/DoctorConsultationPendingForReview"),
);
const DoctorOwnPatientDetails = React.lazy(
  () => import("pages/DoctorOwnPatientDetails"),
);
const DoctorConsultationPatientDetails = React.lazy(
  () => import("pages/DoctorConsultationPatientDetails"),
);
const AdminReviewAccountDeletionRequests = React.lazy(
  () => import("pages/AdminReviewAccountDeletionRequests"),
);
const AdminViewLabStaff = React.lazy(() => import("pages/AdminViewLabStaff"));
const AdminReviewAccountModificationRequests = React.lazy(
  () => import("pages/AdminReviewAccountModificationRequests"),
);
const AdminViewRadiologists = React.lazy(
  () => import("pages/AdminViewRadiologists"),
);
const DoctorPrescribeTestEnterTestDetails = React.lazy(
  () => import("pages/DoctorPrescribeTestEnterTestDetails"),
);
const DoctorPrescribeTestVerification = React.lazy(
  () => import("pages/DoctorPrescribeTestVerification"),
);
const DoctorDashboard = React.lazy(() => import("pages/DoctorDashboard"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const AdminReviewSignupRequests = React.lazy(
  () => import("pages/AdminReviewSignupRequests"),
);
const AdminViewDoctors = React.lazy(() => import("pages/AdminViewDoctors"));
const AdminSignupThree = React.lazy(() => import("pages/AdminSignupThree"));
const DoctorSignupThree = React.lazy(() => import("pages/DoctorSignupThree"));
const AdminSignupTwo = React.lazy(() => import("pages/AdminSignupTwo"));
const AdminLoginPage = React.lazy(() => import("pages/AdminLoginPage"));
const DoctorSignupTwo = React.lazy(() => import("pages/DoctorSignupTwo"));
const DoctorLoginPage = React.lazy(() => import("pages/DoctorLoginPage"));
const AdminSignupOne = React.lazy(() => import("pages/AdminSignupOne"));
const DoctorSignupOne = React.lazy(() => import("pages/DoctorSignupOne"));
const Usertypeselection = React.lazy(() => import("pages/Usertypeselection"));
const RadiologistOwnDiagnosisCompletedHistory = React.lazy(
  () => import("pages/RadiologistOwnDiagnosisCompletedHistory"),
);
const RadiologistOwnPendingForReviewByDoctorHistory = React.lazy(
  () => import("pages/RadiologistOwnPendingForReviewByDoctorHistory"),
);
const RadiologistOwnPendingForReviewByRadiologistHistory = React.lazy(
  () => import("pages/RadiologistOwnPendingForReviewByRadiologistHistory"),
);
const RadiologistConsultationDiagnosisCompletedHistory = React.lazy(
  () => import("pages/RadiologistConsultationDiagnosisCompletedHistory"),
);
const RadiologistConsultationPendingForReviewByDoctorHisto = React.lazy(
  () => import("pages/RadiologistConsultationPendingForReviewByDoctorHisto"),
);
const RadiologistConsultationPendingForReviewByRadiologist = React.lazy(
  () => import("pages/RadiologistConsultationPendingForReviewByRadiologist"),
);
const RadiologistOwnPFRBDConsultOtherRadiologists = React.lazy(
  () => import("pages/RadiologistOwnPFRBDConsultOtherRadiologists"),
);
const RadiologistConsultationPFRBDConsultOtherRadiologists = React.lazy(
  () => import("pages/RadiologistConsultationPFRBDConsultOtherRadiologists"),
);
const RadiologistOwnPFRBDImageAnnotater = React.lazy(
  () => import("pages/RadiologistOwnPFRBDImageAnnotater"),
);
const RadiologistConsultationPFRBDImageAnnotater = React.lazy(
  () => import("pages/RadiologistConsultationPFRBDImageAnnotater"),
);
const RadiologistOwnPFRConsultOtherRadiologists = React.lazy(
  () => import("pages/RadiologistOwnPFRConsultOtherRadiologists"),
);
const RadiologistConsultationPFRConsultOtherRadiologists = React.lazy(
  () => import("pages/RadiologistConsultationPFRConsultOtherRadiologists"),
);
const RadiologistOwnPFRImageAnnotater = React.lazy(
  () => import("pages/RadiologistOwnPFRImageAnnotater"),
);
const RadiologistConsultationPFRImageAnnotater = React.lazy(
  () => import("pages/RadiologistConsultationPFRImageAnnotater"),
);
const PatientDiagnosisCompleted = React.lazy(
  () => import("pages/PatientDiagnosisCompleted"),
);
const PatientPendingForReviewByDoctor = React.lazy(
  () => import("pages/PatientPendingForReviewByDoctor"),
);
const PatientPendingForReviewByRadiologist = React.lazy(
  () => import("pages/PatientPendingForReviewByRadiologist"),
);
const RadiologistOwnDiagnosisCompleted = React.lazy(
  () => import("pages/RadiologistOwnDiagnosisCompleted"),
);
const RadiologistOwnPendingForReviewByDoctor = React.lazy(
  () => import("pages/RadiologistOwnPendingForReviewByDoctor"),
);
const RadiologistOwnPendingForReview = React.lazy(
  () => import("pages/RadiologistOwnPendingForReview"),
);
const RadiologistConsultationDiagnosisCompleted = React.lazy(
  () => import("pages/RadiologistConsultationDiagnosisCompleted"),
);
const RadiologistConsultationPendingForReviewByDoctor = React.lazy(
  () => import("pages/RadiologistConsultationPendingForReviewByDoctor"),
);
const RadiologistConsultationPendingForReview = React.lazy(
  () => import("pages/RadiologistConsultationPendingForReview"),
);
const PatientDashboard = React.lazy(() => import("pages/PatientDashboard"));
const RadiologistOwnPatientDetails = React.lazy(
  () => import("pages/RadiologistOwnPatientDetails"),
);
const RadiologistConsultationPatientDetails = React.lazy(
  () => import("pages/RadiologistConsultationPatientDetails"),
);
const PatientSignupThree = React.lazy(() => import("pages/PatientSignupThree"));
const RadiologistDashboard = React.lazy(
  () => import("pages/RadiologistDashboard"),
);
const PatientGaurdianInfoTwo = React.lazy(
  () => import("pages/PatientGaurdianInfoTwo"),
);
const PatientSignupTwo = React.lazy(() => import("pages/PatientSignupTwo"));
const PatientLoginPage = React.lazy(() => import("pages/PatientLoginPage"));
const PatientGuardianInfoOne = React.lazy(
  () => import("pages/PatientGuardianInfoOne"),
);
const RadiologistSignupThree = React.lazy(
  () => import("pages/RadiologistSignupThree"),
);
const PatientSignupOne = React.lazy(() => import("pages/PatientSignupOne"));
const RadiologistSignupTwo = React.lazy(
  () => import("pages/RadiologistSignupTwo"),
);
const RadiologistLoginPage = React.lazy(
  () => import("pages/RadiologistLoginPage"),
);
const LabStaffTestPending = React.lazy(
  () => import("pages/LabStaffTestPending"),
);
const RadiologistSignupOne = React.lazy(
  () => import("pages/RadiologistSignupOne"),
);
const LabStaffDashboard = React.lazy(() => import("pages/LabStaffDashboard"));
const LabStaffSignupThree = React.lazy(
  () => import("pages/LabStaffSignupThree"),
);
const LabStaffSignupTwo = React.lazy(() => import("pages/LabStaffSignupTwo"));
const LabStaffLoginPage = React.lazy(() => import("pages/LabStaffLoginPage"));
const LabStaffSignupOne = React.lazy(() => import("pages/LabStaffSignupOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/labstaffsignupone" element={<LabStaffSignupOne />} />
          <Route path="/labstaffloginpage" element={<LabStaffLoginPage />} />
          <Route path="/labstaffsignuptwo" element={<LabStaffSignupTwo />} />
          <Route
            path="/labstaffsignupthree"
            element={<LabStaffSignupThree />}
          />
          <Route path="/labstaffdashboard" element={<LabStaffDashboard />} />
          <Route
            path="/radiologistsignupone"
            element={<RadiologistSignupOne />}
          />
          <Route
            path="/labstafftestpending"
            element={<LabStaffTestPending />}
          />
          <Route
            path="/radiologistloginpage"
            element={<RadiologistLoginPage />}
          />
          <Route
            path="/radiologistsignuptwo"
            element={<RadiologistSignupTwo />}
          />
          <Route path="/patientsignupone" element={<PatientSignupOne />} />
          <Route
            path="/radiologistsignupthree"
            element={<RadiologistSignupThree />}
          />
          <Route
            path="/patientguardianinfoone"
            element={<PatientGuardianInfoOne />}
          />
          <Route path="/patientloginpage" element={<PatientLoginPage />} />
          <Route path="/patientsignuptwo" element={<PatientSignupTwo />} />
          <Route
            path="/patientgaurdianinfotwo"
            element={<PatientGaurdianInfoTwo />}
          />
          <Route
            path="/radiologistdashboard"
            element={<RadiologistDashboard />}
          />
          <Route path="/patientsignupthree" element={<PatientSignupThree />} />
          <Route
            path="/radiologistconsultationpatientdetails"
            element={<RadiologistConsultationPatientDetails />}
          />
          <Route
            path="/radiologistownpatientdetails"
            element={<RadiologistOwnPatientDetails />}
          />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route
            path="/radiologistconsultationpendingforreview"
            element={<RadiologistConsultationPendingForReview />}
          />
          <Route
            path="/radiologistconsultationpendingforreviewbydoctor"
            element={<RadiologistConsultationPendingForReviewByDoctor />}
          />
          <Route
            path="/radiologistconsultationdiagnosiscompleted"
            element={<RadiologistConsultationDiagnosisCompleted />}
          />
          <Route
            path="/radiologistownpendingforreview"
            element={<RadiologistOwnPendingForReview />}
          />
          <Route
            path="/radiologistownpendingforreviewbydoctor"
            element={<RadiologistOwnPendingForReviewByDoctor />}
          />
          <Route
            path="/radiologistowndiagnosiscompleted"
            element={<RadiologistOwnDiagnosisCompleted />}
          />
          <Route
            path="/patientpendingforreviewbyradiologist"
            element={<PatientPendingForReviewByRadiologist />}
          />
          <Route
            path="/patientpendingforreviewbydoctor"
            element={<PatientPendingForReviewByDoctor />}
          />
          <Route
            path="/patientdiagnosiscompleted"
            element={<PatientDiagnosisCompleted />}
          />
          <Route
            path="/radiologistconsultationpfrimageannotater"
            element={<RadiologistConsultationPFRImageAnnotater />}
          />
          <Route
            path="/radiologistownpfrimageannotater"
            element={<RadiologistOwnPFRImageAnnotater />}
          />
          <Route
            path="/radiologistconsultationpfrconsultotherradiologists"
            element={<RadiologistConsultationPFRConsultOtherRadiologists />}
          />
          <Route
            path="/radiologistownpfrconsultotherradiologists"
            element={<RadiologistOwnPFRConsultOtherRadiologists />}
          />
          <Route
            path="/radiologistconsultationpfrbdimageannotater"
            element={<RadiologistConsultationPFRBDImageAnnotater />}
          />
          <Route
            path="/radiologistownpfrbdimageannotater"
            element={<RadiologistOwnPFRBDImageAnnotater />}
          />
          <Route
            path="/radiologistconsultationpfrbdconsultotherradiologists"
            element={<RadiologistConsultationPFRBDConsultOtherRadiologists />}
          />
          <Route
            path="/radiologistownpfrbdconsultotherradiologists"
            element={<RadiologistOwnPFRBDConsultOtherRadiologists />}
          />
          <Route
            path="/radiologistconsultationpendingforreviewbyradiologist"
            element={<RadiologistConsultationPendingForReviewByRadiologist />}
          />
          <Route
            path="/radiologistconsultationpendingforreviewbydoctorhisto"
            element={<RadiologistConsultationPendingForReviewByDoctorHisto />}
          />
          <Route
            path="/radiologistconsultationdiagnosiscompletedhistory"
            element={<RadiologistConsultationDiagnosisCompletedHistory />}
          />
          <Route
            path="/radiologistownpendingforreviewbyradiologisthistory"
            element={<RadiologistOwnPendingForReviewByRadiologistHistory />}
          />
          <Route
            path="/radiologistownpendingforreviewbydoctorhistory"
            element={<RadiologistOwnPendingForReviewByDoctorHistory />}
          />
          <Route
            path="/radiologistowndiagnosiscompletedhistory"
            element={<RadiologistOwnDiagnosisCompletedHistory />}
          />
          <Route path="/usertypeselection" element={<Usertypeselection />} />
          <Route path="/doctorsignupone" element={<DoctorSignupOne />} />
          <Route path="/adminsignupone" element={<AdminSignupOne />} />
          <Route path="/doctorloginpage" element={<DoctorLoginPage />} />
          <Route path="/doctorsignuptwo" element={<DoctorSignupTwo />} />
          <Route path="/adminloginpage" element={<AdminLoginPage />} />
          <Route path="/adminsignuptwo" element={<AdminSignupTwo />} />
          <Route path="/doctorsignupthree" element={<DoctorSignupThree />} />
          <Route path="/adminsignupthree" element={<AdminSignupThree />} />
          <Route path="/adminviewdoctors" element={<AdminViewDoctors />} />
          <Route
            path="/adminreviewsignuprequests"
            element={<AdminReviewSignupRequests />}
          />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route
            path="/doctorprescribetestverification"
            element={<DoctorPrescribeTestVerification />}
          />
          <Route
            path="/doctorprescribetestentertestdetails"
            element={<DoctorPrescribeTestEnterTestDetails />}
          />
          <Route
            path="/adminviewradiologists"
            element={<AdminViewRadiologists />}
          />
          <Route
            path="/adminreviewaccountmodificationrequests"
            element={<AdminReviewAccountModificationRequests />}
          />
          <Route path="/adminviewlabstaff" element={<AdminViewLabStaff />} />
          <Route
            path="/adminreviewaccountdeletionrequests"
            element={<AdminReviewAccountDeletionRequests />}
          />
          <Route
            path="/doctorconsultationpatientdetails"
            element={<DoctorConsultationPatientDetails />}
          />
          <Route
            path="/doctorownpatientdetails"
            element={<DoctorOwnPatientDetails />}
          />
          <Route
            path="/doctorconsultationpendingforreview"
            element={<DoctorConsultationPendingForReview />}
          />
          <Route
            path="/doctorconsultationdiagnosiscompleted"
            element={<DoctorConsultationDiagnosisCompleted />}
          />
          <Route
            path="/doctorownpendingforreview"
            element={<DoctorOwnPendingForReview />}
          />
          <Route
            path="/doctorowndiagnosiscompleted"
            element={<DoctorOwnDiagnosisCompleted />}
          />
          <Route
            path="/doctorconsultationpendingforreviewbyradiologist"
            element={<DoctorConsultationPendingForReviewByRadiologist />}
          />
          <Route
            path="/doctorownpendingforreviewbyradiologist"
            element={<DoctorOwnPendingForReviewByRadiologist />}
          />
          <Route
            path="/doctorconsultationconsultotherdoctors"
            element={<DoctorConsultationConsultOtherDoctors />}
          />
          <Route
            path="/doctorownconsultotherdoctors"
            element={<DoctorOwnConsultOtherDoctors />}
          />
          <Route
            path="/doctorconsultationpendingforreviewbydoctorhistory"
            element={<DoctorConsultationPendingForReviewByDoctorHistory />}
          />
          <Route
            path="/doctorconsultationdiagnosiscompletedhistory"
            element={<DoctorConsultationDiagnosisCompletedHistory />}
          />
          <Route
            path="/doctorownpendingforreviewbydoctorhistory"
            element={<DoctorOwnPendingForReviewByDoctorHistory />}
          />
          <Route
            path="/doctorowndiagnosiscompletedhistory"
            element={<DoctorOwnDiagnosisCompletedHistory />}
          />
          <Route
            path="/doctorconsultationpendingforreviewbyradiologisthisto"
            element={<DoctorConsultationPendingForReviewByRadiologistHisto />}
          />
          <Route
            path="/doctorownpendingforreviewbyradiologisthistory"
            element={<DoctorOwnPendingForReviewByRadiologistHistory />}
          />
          <Route
            path="/superadminloginpage"
            element={<SuperAdminLoginPage />}
          />
          <Route
            path="/superadmindashboard"
            element={<SuperAdminDashboard />}
          />
          <Route
            path="/superadminreviewsignuprequests"
            element={<SuperAdminReviewSignupRequests />}
          />
          <Route
            path="/superadminviewadmins"
            element={<SuperAdminViewAdmins />}
          />
          <Route
            path="/superadminreviewaccountmodificationrequests"
            element={<SuperAdminReviewAccountModificationRequests />}
          />
          <Route
            path="/superadminreviewaccountdeletionrequests"
            element={<SuperAdminReviewAccountDeletionRequests />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
