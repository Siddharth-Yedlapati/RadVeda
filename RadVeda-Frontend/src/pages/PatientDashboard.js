import { useState, useCallback } from "react";
import PatientUserOptions from "../components/PatientUserOptions";
import PortalPopup from "../components/PortalPopup";
import PatientChooseLab from "../components/PatientChooseLab";
import { useNavigate } from "react-router-dom";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const [isPatientUserOptionsOpen, setPatientUserOptionsOpen] = useState(false);
  const [isPatientChooseLabOpen, setPatientChooseLabOpen] = useState(false);
  const navigate = useNavigate();

  const openPatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(true);
  }, []);

  const closePatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/patient-pfr-doctor");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/patient-diag-complete");
  }, [navigate]);

  const openPatientChooseLab = useCallback(() => {
    setPatientChooseLabOpen(true);
  }, []);

  const closePatientChooseLab = useCallback(() => {
    setPatientChooseLabOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/patient-pfr-radiologist");
  }, [navigate]);

  return (
    <>
      <div className="patient-dashboard">
        <div className="patient-dashboard-child" />
        <img className="vector-icon160" alt="" />
        <img
          className="patient-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openPatientUserOptions}
        />
        <div className="iconnotification-bing36">
          <img className="vector-icon161" alt="" src="/vector.svg" />
          <img className="vector-icon162" alt="" src="/vector.svg" />
          <img className="vector-icon163" alt="" />
          <div className="iconnotification-bing-child34" />
          <div className="div77">03</div>
        </div>
        <img className="need-help-icon36" alt="" src="/need-help.svg" />
        <div className="patient-dashboard-inner" />
        <div className="patient-dashboard-child1" />
        <div className="frame-parent35">
          <div className="frame-child350" />
          <div className="frame-child351" />
          <div className="good-morning-john-container7">
            <span>Good Morning</span>
            <b className="john-doe7">
              <span className="span7">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-parent54" onClick={onFrameContainerClick}>
            <div className="endoscopy-wrapper">
              <div className="endoscopy">Endoscopy</div>
            </div>
            <div className="div78">11/10/2023</div>
          </div>
          <div className="remark52">Remark5</div>
          <div className="group-parent55" onClick={onFrameContainer1Click}>
            <div className="ultrasound-wrapper">
              <div className="endoscopy">Ultrasound</div>
            </div>
            <div className="div78">21/09/2023</div>
          </div>
          <div className="remark15">Remark1</div>
          <div className="remark25">Remark2</div>
          <div className="remark62">Remark6</div>
          <div className="doctors-remarks3">doctor’s remarks</div>
          <div className="remark42">Remark4</div>
        </div>
        <div className="patient-dashboard-inner1">
          <div className="notifications-container">
            <div className="notifications1">Notifications</div>
          </div>
        </div>
        <div className="patient-dashboard-child2" />
        <div className="clear-all1">clear all</div>
        <div className="patient-dashboard-child3" />
        <div className="patient-dashboard-inner2">
          <div className="group-child23" />
        </div>
        <div className="consent-request-by">
          Consent Request by Dr. XYZ from Hospital D
        </div>
        <div className="patient-dashboard-child4" />
        <div className="patient-dashboard-child5" />
        <img className="patient-dashboard-child6" alt="" />
        <img className="patient-dashboard-child7" alt="" />
        <img className="patient-dashboard-child8" alt="" />
        <img className="patient-dashboard-child9" alt="" />
        <div className="patient-dashboard-inner3">
          <div className="group-child23" />
        </div>
        <div className="reminder-to-visit">
          Reminder to visit XYZ Lab at 5pm 02/02/24 for CT Scan
        </div>
        <div className="patient-dashboard-inner4">
          <div className="group-child23" />
        </div>
        <div className="new-chat-message">New Chat Message from Dr. John</div>
        <div className="patient-dashboard-inner5">
          <div className="group-child23" />
        </div>
        <div className="diagnosis-has-been">
          Diagnosis has been completed for Ultrasound issued on 21/09/2023
        </div>
        <div className="patient-dashboard-inner6">
          <div className="group-child23" />
        </div>
        <div className="new-chat-message1">New Chat Message from Dr. Abdul</div>
        <div className="frame-parent36">
          <div className="frame-child350" />
          <div className="frame-parent37">
            <div className="group-parent56">
              <div className="mri-wrapper3">
                <div className="endoscopy">MRI</div>
              </div>
              <div className="group-wrapper82" onClick={openPatientChooseLab}>
                <div className="choose-lab-wrapper">
                  <div className="notifications1">Choose Lab</div>
                </div>
              </div>
            </div>
            <div className="group-wrapper83">
              <div className="ct-scan-wrapper3">
                <div className="endoscopy">CT Scan</div>
              </div>
            </div>
            <div className="group-wrapper84" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper3">
                <div className="endoscopy">X-Ray</div>
              </div>
            </div>
            <div className="test-type-parent3">
              <div className="endoscopy">Test Type</div>
              <div className="parent5">
                <div className="div80">05/01/2024</div>
                <div className="div81">04/12/2023</div>
                <div className="div82">15/11/2023</div>
                <div className="date-prescribed5">Date Prescribed</div>
              </div>
              <div className="status9">Status</div>
            </div>
          </div>
          <div className="test-not-conducted-container">
            <div className="test-not-conducted2">Test Not Conducted</div>
            <div className="pending-for-review-container">
              <p className="pending-for-review8">
                Pending for review by radiologist
              </p>
              <p className="pending-for-review8">
                pending for review by doctor
              </p>
              <p className="diagnosis-completed4">Diagnosis Completed</p>
            </div>
          </div>
          <b className="my-tests">My tests</b>
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
      {isPatientChooseLabOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientChooseLab}
        >
          <PatientChooseLab onClose={closePatientChooseLab} />
        </PortalPopup>
      )}
    </>
  );
};

export default PatientDashboard;
