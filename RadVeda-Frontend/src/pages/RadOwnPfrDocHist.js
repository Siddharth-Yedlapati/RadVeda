import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPfrDocHist.css";

const RadOwnPfrDocHist = () => {

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

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pfr-doc-hist">
        <div className="rad-own-pfr-doc-hist-child" />
        <img
          className="rad-own-pfr-doc-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing14">
          <img className="vector-icon65" alt="" src="/vector.svg" />
          <img className="vector-icon66" alt="" src="/vector.svg" />
          <img className="vector-icon67" alt="" />
          <div className="iconnotification-bing-child12" />
          <div className="div34">03</div>
        </div>
        <img className="need-help-icon14" alt="" src="/need-help.svg" />
        <div className="rad-own-pfr-doc-hist-inner" />
        <div className="rad-own-pfr-doc-hist-child1" />
        <div className="frame-parent21">
          <div className="group-wrapper49">
            <div className="view-doctors-notes-wrapper2">
              <div className="view-doctors-notes4">View Doctors’ Notes</div>
            </div>
          </div>
          <div className="frame-child91" />
          <b className="test-details6">Test Details</b>
          <div className="frame-child92" />
          <div className="frame-child93" />
          <div className="frame-child91" />
          <b className="original-image4">Original Image</b>
          <img className="xray1-1-icon4" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper50">
            <div className="view-personnel-info-wrapper2">
              <div className="view-doctors-notes4">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child95" />
          <div className="frame-child96" />
          <img className="frame-child97" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child98" alt="" src="/polygon-5.svg" />
          <img className="frame-child99" alt="" src="/polygon-6.svg" />
          <div className="frame-child100" />
          <img className="vector-icon68" alt="" />
          <img className="frame-child101" alt="" src="/rectangle-5907.svg" />
          <b className="annotations-by-radiologists1">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-14"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child102" />
          <div className="frame-child103" />
          <img className="frame-child104" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child105" alt="" src="/polygon-5.svg" />
          <img className="frame-child106" alt="" src="/polygon-6.svg" />
          <div className="frame-child107" />
        </div>
        <div
          className="rad-own-pfr-doc-hist-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper18">
            <div className="view-doctors-notes4">Back</div>
          </div>
        </div>
        <div className="rad-own-pfr-doc-hist-inner2">
          <div className="view-radiologists-notes-container">
            <div className="view-doctors-notes4">View Radiologist’s Notes</div>
          </div>
        </div>
        <div className="rad-own-pfr-doc-hist-inner3">
          <div className="view-radiologists-details-container">
            <div className="view-doctors-notes4">
              View Radiologist’s Details
            </div>
          </div>
        </div>
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

export default RadOwnPfrDocHist;
