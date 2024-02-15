import { useState, useCallback } from "react";
import PatientUserOptions from "../components/PatientUserOptions";
import PortalPopup from "../components/PortalPopup";
import PatientDocRemarks from "../components/PatientDocRemarks";
import { useNavigate } from "react-router-dom";
import "./PatientPfrDoctor.css";

const PatientPfrDoctor = () => {
  const [isPatientUserOptionsOpen, setPatientUserOptionsOpen] = useState(false);
  const [isPatientDocRemarksOpen, setPatientDocRemarksOpen] = useState(false);
  const navigate = useNavigate();

  const openPatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(true);
  }, []);

  const closePatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(false);
  }, []);

  const openPatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(true);
  }, []);

  const closePatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="patient-pfr-doctor">
        <div className="patient-pfr-doctor-child" />
        <img className="vector-icon152" alt="" />
        <img
          className="patient-pfr-doctor-item"
          alt=""
          src="/frame-53.svg"
          onClick={openPatientUserOptions}
        />
        <div className="iconnotification-bing34">
          <img className="vector-icon153" alt="" src="/vector.svg" />
          <img className="vector-icon154" alt="" src="/vector.svg" />
          <img className="vector-icon155" alt="" />
          <div className="iconnotification-bing-child32" />
          <div className="div66">03</div>
        </div>
        <img className="need-help-icon34" alt="" src="/need-help.svg" />
        <div className="patient-pfr-doctor-inner" />
        <div className="patient-pfr-doctor-child1" />
        <div className="test-details-parent3">
          <b className="test-details20">Test Details</b>
          <div className="frame-child329" />
          <div className="frame-child330" />
          <div className="frame-child331" />
          <b className="test-image1">Test Image</b>
          <img className="xray1-1-icon18" alt="" src="/xray1-1@2x.png" />
          <div className="frame-child332" />
          <div className="frame-child333" />
          <img className="frame-child334" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child335" alt="" src="/polygon-5.svg" />
          <img className="frame-child336" alt="" src="/polygon-6.svg" />
          <div className="frame-child337" />
        </div>
        <div
          className="patient-pfr-doctor-inner1"
          onClick={openPatientDocRemarks}
        >
          <div className="view-doctor-remarks-frame">
            <div className="view-doctor-remarks2">View Doctor Remarks</div>
          </div>
        </div>
        <div
          className="patient-pfr-doctor-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper43">
            <div className="view-doctor-remarks2">Back</div>
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

export default PatientPfrDoctor;
