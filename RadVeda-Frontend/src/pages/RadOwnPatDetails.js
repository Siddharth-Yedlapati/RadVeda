import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPatDetails.css";

const RadOwnPatDetails = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/rad-login-page");
      })
  }
  else
  {
    navigate("/rad-login-page");
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pfr-doc");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/rad-own-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-own-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate("/rad-own-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/rad-own-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pat-details">
        <div className="rad-own-pat-details-child" />
        <img className="vector-icon37" alt="" />
        <img
          className="rad-own-pat-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing7">
          <img className="vector-icon38" alt="" src="/vector.svg" />
          <img className="vector-icon39" alt="" src="/vector.svg" />
          <img className="vector-icon40" alt="" />
          <div className="iconnotification-bing-child5" />
          <div className="div19">03</div>
        </div>
        <img className="need-help-icon7" alt="" src="/need-help.svg" />
        <div className="rad-own-pat-details-inner" />
        <div className="rad-own-pat-details-child1" />
        <div className="patient-details-parent">
          <b className="patient-details">Patient Details</b>
          <div className="frame-child29" />
          <div className="frame-child30" />
          <div className="frame-child31" />
          <div className="frame-child31" />
          <div className="name-ayesha">Name : Ayesha Bazmi</div>
          <div className="dob-03101990">DOB : 03/10/1990</div>
          <div className="frame-wrapper1">
            <div className="ellipse-parent">
              <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-wrapper">
                <div className="ayesha-bazmi">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-24">Age : 24</div>
          <img className="icon-mail" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom">: ayeshabazmi@gmail.com</div>
          <div className="group-wrapper31" onClick={onFrameContainer1Click}>
            <div className="back-wrapper7">
              <div className="back18">Back</div>
            </div>
          </div>
        </div>
        <div className="remark6">Remark6</div>
        <div className="group-parent15" onClick={onFrameContainer12Click}>
          <div className="mammography-wrapper">
            <div className="mammography">Mammography</div>
          </div>
          <div className="div20">21/08/2023</div>
          <div className="pending-for-review">Pending for Review by doctor</div>
        </div>
        <div className="remark5">Remark5</div>
        <div className="remark31">Remark3</div>
        <div className="tests-assigned-to-me-parent">
          <b className="tests-assigned-to-container">
            <p className="tests-assigned-to">{`Tests assigned to me `}</p>
          </b>
          <div className="frame-child29" />
          <div className="frame-parent9">
            <div className="group-parent16">
              <div className="mri-container">
                <div className="mammography">MRI</div>
              </div>
              <div className="remark11">Remark1</div>
            </div>
            <div className="group-parent17" onClick={onFrameContainer13Click}>
              <div className="ct-scan-container">
                <div className="mammography">CT Scan</div>
              </div>
              <div className="remark21">Remark2</div>
            </div>
            <div className="group-parent18" onClick={onFrameContainer2Click}>
              <div className="x-ray-container">
                <div className="mammography">X-Ray</div>
              </div>
              <div className="remark32">Remark3</div>
            </div>
            <div className="test-type-group">
              <div className="mammography">Test Type</div>
              <div className="group">
                <div className="div21">04/10/2023</div>
                <div className="div22">25/09/2023</div>
                <div className="div23">21/09/2023</div>
                <div className="date-prescribed1">Date Prescribed</div>
              </div>
              <div className="status1">Status</div>
              <div className="doctors-remarks">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent">
            <div className="test-not-conducted">Test not conducted</div>
            <div className="pending-for-review1">Pending for review</div>
            <div className="diagnosis-completed">Diagnosis Completed</div>
          </div>
          <div className="remark33">Remark3</div>
        </div>
        <div className="rad-own-pat-details-child2" />
        <div className="remark61">Remark6</div>
        <div className="group-parent19" onClick={onFrameContainer3Click}>
          <div className="mammography-wrapper">
            <div className="mammography">Mammography</div>
          </div>
          <div className="div20">21/08/2023</div>
          <div className="pending-for-review">Pending for Review by doctor</div>
        </div>
        <div className="remark51">Remark5</div>
        <div className="remark34">Remark3</div>
        <div className="tests-assigned-to-other-radiol-parent">
          <b className="tests-assigned-to1">
            Tests assigned to other radiologists
          </b>
          <div className="frame-child29" />
          <div className="frame-parent9">
            <div className="group-parent16">
              <div className="mri-container">
                <div className="mammography">MRI</div>
              </div>
              <div className="remark12">Remark1</div>
            </div>
            <div className="group-parent17" onClick={onFrameContainer14Click}>
              <div className="ct-scan-container">
                <div className="mammography">CT Scan</div>
              </div>
              <div className="remark22">Remark2</div>
            </div>
            <div className="group-parent18" onClick={onFrameContainer22Click}>
              <div className="x-ray-container">
                <div className="mammography">X-Ray</div>
              </div>
              <div className="remark35">Remark3</div>
            </div>
            <div className="test-type-group">
              <div className="mammography">Test Type</div>
              <div className="group">
                <div className="div21">04/10/2023</div>
                <div className="div22">25/09/2023</div>
                <div className="div23">21/09/2023</div>
                <div className="date-prescribed1">Date Prescribed</div>
              </div>
              <div className="status1">Status</div>
              <div className="doctors-remarks1">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent">
            <div className="test-not-conducted">Test not conducted</div>
            <div className="pending-for-review1">
              Pending for review by radiologist
            </div>
            <div className="diagnosis-completed">Diagnosis Completed</div>
          </div>
          <div className="remark36">Remark3</div>
        </div>
        <div className="remark4">Remark4</div>
        <div className="lab-staffs-remarks">lab Staff’s remarks</div>
        <div className="remark41">Remark4</div>
        <div className="lab-staffs-remarks1">lab Staff’s remarks</div>
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

export default RadOwnPatDetails;
