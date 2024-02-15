import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DocConsPatDetails.css";

const DocConsPatDetails = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-cons-pfr-rad");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-cons-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-cons-diag-complete");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-cons-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-cons-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/doc-cons-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="doc-cons-pat-details">
        <div className="doc-cons-pat-details-child" />
        <img className="vector-icon240" alt="" />
        <img
          className="doc-cons-pat-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing54">
          <img className="vector-icon241" alt="" src="/vector.svg" />
          <img className="vector-icon242" alt="" src="/vector.svg" />
          <img className="vector-icon243" alt="" />
          <div className="iconnotification-bing-child52" />
          <div className="div123">03</div>
        </div>
        <img className="need-help-icon54" alt="" src="/need-help.svg" />
        <div className="doc-cons-pat-details-inner" />
        <div className="doc-cons-pat-details-child1" />
        <div className="patient-details-parent1">
          <b className="patient-details3">Patient Details</b>
          <div className="frame-child480" />
          <div className="frame-child481" />
          <div className="frame-child482" />
          <div className="frame-child482" />
          <div className="name-ayesha5">Name : Ayesha Bazmi</div>
          <div className="dob-031019905">DOB : 03/10/1990</div>
          <div className="frame-wrapper9">
            <div className="ellipse-parent3">
              <img className="frame-child484" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-wrapper3">
                <div className="ayesha-bazmi5">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-245">Age : 24</div>
          <img className="icon-mail3" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom3">: ayeshabazmi@gmail.com</div>
        </div>
        <div className="doc-cons-pat-details-inner1">
          <div className="back-wrapper66">
            <div className="back91">Back</div>
          </div>
        </div>
        <div className="variant-master6">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="variant-master7">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="tests-for-which-consultation-w-group">
          <b className="tests-for-which1">
            Tests for which consultation was requested
          </b>
          <div className="frame-child480" />
          <div className="frame-parent67">
            <div className="group-wrapper152" onClick={onFrameContainerClick}>
              <div className="mri-wrapper6">
                <div className="mri8">MRI</div>
              </div>
            </div>
            <div className="group-parent100" onClick={onFrameContainer1Click}>
              <div className="ct-scan-wrapper6">
                <div className="mri8">CT Scan</div>
              </div>
              <div className="remark28">Remark2</div>
            </div>
            <div className="group-parent101" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper6">
                <div className="mri8">X-Ray</div>
              </div>
              <div className="remark28">Remark3</div>
            </div>
            <div className="test-type-parent6">
              <div className="mri8">Test Type</div>
              <div className="parent13">
                <div className="div124">04/10/2023</div>
                <div className="div125">25/09/2023</div>
                <div className="div126">21/09/2023</div>
                <div className="date-prescribed8">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-container">
                <div className="pending-for-review14">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review15">Pending for review</div>
                <div className="diagnosis-completed7">Diagnosis Completed</div>
              </div>
              <div className="status14">Status</div>
            </div>
            <div className="remark18">Remark1</div>
          </div>
        </div>
        <div className="variant-master8">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="doctors-remarks6">Doctor’s Remarks</div>
        <div className="chat2">Chat</div>
        <div className="doc-cons-pat-details-child2" />
        <div className="variant-master9">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="variant-master10">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="other-tests-group">
          <b className="other-tests1">Other tests</b>
          <div className="frame-child480" />
          <div className="frame-parent67">
            <div className="group-wrapper152" onClick={onFrameContainer3Click}>
              <div className="mri-wrapper6">
                <div className="mri8">MRI</div>
              </div>
            </div>
            <div className="group-parent100" onClick={onFrameContainer12Click}>
              <div className="ct-scan-wrapper6">
                <div className="mri8">CT Scan</div>
              </div>
              <div className="remark28">Remark2</div>
            </div>
            <div className="group-parent101" onClick={onFrameContainer22Click}>
              <div className="x-ray-wrapper6">
                <div className="mri8">X-Ray</div>
              </div>
              <div className="remark28">Remark3</div>
            </div>
            <div className="test-type-parent6">
              <div className="mri8">Test Type</div>
              <div className="parent13">
                <div className="div124">04/10/2023</div>
                <div className="div125">25/09/2023</div>
                <div className="div126">21/09/2023</div>
                <div className="date-prescribed8">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-container">
                <div className="pending-for-review14">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review15">
                  Pending for review by doctor
                </div>
                <div className="diagnosis-completed7">Diagnosis Completed</div>
              </div>
              <div className="status14">Status</div>
            </div>
            <div className="remark18">Remark1</div>
          </div>
        </div>
        <div className="variant-master11">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="doctors-remarks7">Doctor’s Remarks</div>
        <div className="chat3">Chat</div>
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

export default DocConsPatDetails;
