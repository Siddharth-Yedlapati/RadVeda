import { useState, useCallback } from "react";
import PatientUserOptions from "../components/PatientUserOptions";
import PortalPopup from "../components/PortalPopup";
import PatientDocRemarks from "../components/PatientDocRemarks";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./PatientPfrRadiologist.css";

const PatientPfrRadiologist = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/patient-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/patient-login-page");}) 
  }

  const [isPatientUserOptionsOpen, setPatientUserOptionsOpen] = useState(false);
  const [isPatientDocRemarksOpen, setPatientDocRemarksOpen] = useState(false);
  

  const openPatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(true);
  }, []);

  const closePatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  const openPatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(true);
  }, []);

  const closePatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(false);
  }, []);

  return (
    <>
      <div className="patient-pfr-radiologist">
        <div className="patient-pfr-radiologist-child" />
        <img className="vector-icon148" alt="" />
        <img
          className="patient-pfr-radiologist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openPatientUserOptions}
        />
        <div className="iconnotification-bing33">
          <img className="vector-icon149" alt="" src="/vector.svg" />
          <img className="vector-icon150" alt="" src="/vector.svg" />
          <img className="vector-icon151" alt="" />
          <div className="iconnotification-bing-child31" />
          <div className="div65">03</div>
        </div>
        <img className="need-help-icon33" alt="" src="/need-help.svg" />
        <div className="patient-pfr-radiologist-inner" />
        <div className="patient-pfr-radiologist-child1" />
        <div className="test-details-parent2">
          <b className="test-details19">Test Details</b>
          <div className="frame-child320" />
          <div className="frame-child321" />
          <div className="frame-child322" />
          <b className="test-image">Test Image</b>
          <img className="xray1-1-icon17" alt="" src="/xray1-1@2x.png" />
          <div className="frame-child323" />
          <div className="frame-child324" />
          <img className="frame-child325" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child326" alt="" src="/polygon-5.svg" />
          <img className="frame-child327" alt="" src="/polygon-6.svg" />
          <div className="frame-child328" />
        </div>
        <div
          className="patient-pfr-radiologist-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper42">
            <div className="view-doctor-remarks">Back</div>
          </div>
        </div>
        <div className="patient-pfr-radiologist-inner2">
          <div className="view-doctor-remarks-wrapper">
            <div className="view-doctor-remarks">View Doctor Remarks</div>
          </div>
        </div>
        <div
          className="patient-pfr-radiologist-inner3"
          onClick={openPatientDocRemarks}
        >
          <div className="view-doctor-remarks-wrapper">
            <div className="view-doctor-remarks">View Doctor Remarks</div>
          </div>
        </div>
      </div>
      {isPatientUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientUserOptions}
        >
          <PatientUserOptions onClose={closePatientUserOptions} />
        </PortalPopup>
      )}
      {isPatientDocRemarksOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientDocRemarks}
        >
          <PatientDocRemarks onClose={closePatientDocRemarks} />
        </PortalPopup>
      )}
    </>
  );
};

export default PatientPfrRadiologist;
