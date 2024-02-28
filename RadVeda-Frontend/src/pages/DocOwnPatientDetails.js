import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnPatientDetails.css";

const DocOwnPatientDetails = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/doc-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-own-pfr-rad");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-own-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-own-diag-complete");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-own-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-own-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/doc-own-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="doc-own-patient-details">
        <div className="doc-own-patient-details-child" />
        <img className="vector-icon113" alt="" />
        <img
          className="doc-own-patient-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing25">
          <img className="vector-icon114" alt="" src="/vector.svg" />
          <img className="vector-icon115" alt="" src="/vector.svg" />
          <img className="vector-icon116" alt="" />
          <div className="iconnotification-bing-child23" />
          <div className="div51">03</div>
        </div>
        <img className="need-help-icon25" alt="" src="/need-help.svg" />
        <div className="doc-own-patient-details-inner" />
        <div className="doc-own-patient-details-child1" />
        <div className="patient-details-group">
          <b className="patient-details1">Patient Details</b>
          <div className="frame-child218" />
          <div className="frame-child219" />
          <div className="frame-child220" />
          <div className="frame-child220" />
          <div className="name-ayesha1">Name : Ayesha Bazmi</div>
          <div className="dob-031019901">DOB : 03/10/1990</div>
          <div className="frame-wrapper2">
            <div className="ellipse-group">
              <img className="frame-child222" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-container">
                <div className="ayesha-bazmi1">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-241">Age : 24</div>
          <img className="icon-mail1" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom1">: ayeshabazmi@gmail.com</div>
        </div>
        <div className="doc-own-patient-details-inner1">
          <div className="back-wrapper30">
            <div className="back45">Back</div>
          </div>
        </div>
        <div className="variant-master">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="variant-master1">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="tests-prescribed-by-me-parent">
          <b className="tests-prescribed-by">Tests prescribed by me</b>
          <div className="frame-child218" />
          <div className="frame-parent30">
            <div className="group-wrapper69" onClick={onFrameContainerClick}>
              <div className="mri-wrapper1">
                <div className="mri3">MRI</div>
              </div>
            </div>
            <div className="group-parent44" onClick={onFrameContainer1Click}>
              <div className="ct-scan-wrapper1">
                <div className="mri3">CT Scan</div>
              </div>
              <div className="remark23">Remark2</div>
            </div>
            <div className="group-parent45" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper1">
                <div className="mri3">X-Ray</div>
              </div>
              <div className="remark23">Remark3</div>
            </div>
            <div className="test-type-parent1">
              <div className="mri3">Test Type</div>
              <div className="parent3">
                <div className="div52">04/10/2023</div>
                <div className="div53">25/09/2023</div>
                <div className="div54">21/09/2023</div>
                <div className="date-prescribed3">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-parent">
                <div className="pending-for-review4">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review5">Pending for review</div>
                <div className="diagnosis-completed2">Diagnosis Completed</div>
              </div>
              <div className="status6">Status</div>
            </div>
            <div className="remark13">Remark1</div>
          </div>
        </div>
        <div className="variant-master2">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="my-remarks">My Remarks</div>
        <div className="chat">Chat</div>
        <div className="doc-own-patient-details-child2" />
        <div className="variant-master3">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="variant-master4">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="tests-prescribed-by-other-doct-parent">
          <b className="tests-prescribed-by1">{`Tests prescribed by other doctors `}</b>
          <div className="frame-child218" />
          <div className="frame-parent30">
            <div className="group-wrapper69" onClick={onFrameContainer3Click}>
              <div className="mri-wrapper1">
                <div className="mri3">MRI</div>
              </div>
            </div>
            <div className="group-parent44" onClick={onFrameContainer12Click}>
              <div className="ct-scan-wrapper1">
                <div className="mri3">CT Scan</div>
              </div>
              <div className="remark23">Remark2</div>
            </div>
            <div className="group-parent45" onClick={onFrameContainer22Click}>
              <div className="x-ray-wrapper1">
                <div className="mri3">X-Ray</div>
              </div>
              <div className="remark23">Remark3</div>
            </div>
            <div className="test-type-parent1">
              <div className="mri3">Test Type</div>
              <div className="parent3">
                <div className="div52">04/10/2023</div>
                <div className="div53">25/09/2023</div>
                <div className="div54">21/09/2023</div>
                <div className="date-prescribed3">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-parent">
                <div className="pending-for-review4">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review5">
                  Pending for review by doctor
                </div>
                <div className="diagnosis-completed2">Diagnosis Completed</div>
              </div>
              <div className="status6">Status</div>
            </div>
            <div className="remark13">Remark1</div>
          </div>
        </div>
        <div className="variant-master5">
          <div className="button-master">
            <div className="hello">Chat</div>
          </div>
        </div>
        <div className="doctors-remarks2">Doctor’s Remarks</div>
        <div className="chat1">Chat</div>
      </div>
      {isNPUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNPUserOptions}
        >
          <NPUserOptions onClose={closeNPUserOptions} />
        </PortalPopup>
      )}
    </>
  );
};

export default DocOwnPatientDetails;
