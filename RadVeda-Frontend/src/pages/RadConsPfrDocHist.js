import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsPfrDocHist.css";

const RadConsPfrDocHist = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/rad-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pfr-doc-hist">
        <div className="rad-cons-pfr-doc-hist-child" />
        <img
          className="rad-cons-pfr-doc-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing50">
          <img className="vector-icon224" alt="" src="/vector.svg" />
          <img className="vector-icon225" alt="" src="/vector.svg" />
          <img className="vector-icon226" alt="" />
          <div className="iconnotification-bing-child48" />
          <div className="div119">03</div>
        </div>
        <img className="need-help-icon50" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfr-doc-hist-inner" />
        <div className="rad-cons-pfr-doc-hist-child1" />
        <div className="frame-parent63">
          <div className="group-wrapper140">
            <div className="view-doctors-notes-wrapper12">
              <div className="view-doctors-notes14">View Doctors’ Notes</div>
            </div>
          </div>
          <div className="frame-child424" />
          <b className="test-details24">Test Details</b>
          <div className="frame-child425" />
          <div className="frame-child426" />
          <div className="frame-child424" />
          <b className="original-image19">Original Image</b>
          <img className="xray1-1-icon22" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper141">
            <div className="view-personnel-info-wrapper18">
              <div className="view-doctors-notes14">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child428" />
          <div className="frame-child429" />
          <img className="frame-child430" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child431" alt="" src="/polygon-5.svg" />
          <img className="frame-child432" alt="" src="/polygon-6.svg" />
          <div className="frame-child433" />
          <img className="vector-icon227" alt="" />
          <img className="frame-child434" alt="" src="/rectangle-5907.svg" />
          <b className="annotations-by-radiologists4">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-18"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child435" />
          <div className="frame-child436" />
          <img className="frame-child437" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child438" alt="" src="/polygon-5.svg" />
          <img className="frame-child439" alt="" src="/polygon-6.svg" />
          <div className="frame-child440" />
        </div>
        <div
          className="rad-cons-pfr-doc-hist-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper61">
            <div className="view-doctors-notes14">Back</div>
          </div>
        </div>
        <div className="rad-cons-pfr-doc-hist-inner2">
          <div className="view-radiologists-notes-wrapper10">
            <div className="view-doctors-notes14">View Radiologist’s Notes</div>
          </div>
        </div>
        <div className="rad-cons-pfr-doc-hist-inner3">
          <div className="view-radiologists-details-wrapper10">
            <div className="view-doctors-notes14">
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

export default RadConsPfrDocHist;
