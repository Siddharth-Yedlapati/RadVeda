import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPfrRadHist.css";

const RadOwnPfrRadHist = () => {

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
    navigate("/rad-own-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pfr-rad-hist">
        <div className="rad-own-pfr-rad-hist-child" />
        <img
          className="rad-own-pfr-rad-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing13">
          <img className="vector-icon61" alt="" src="/vector.svg" />
          <img className="vector-icon62" alt="" src="/vector.svg" />
          <img className="vector-icon63" alt="" />
          <div className="iconnotification-bing-child11" />
          <div className="div33">03</div>
        </div>
        <img className="need-help-icon13" alt="" src="/need-help.svg" />
        <div className="rad-own-pfr-rad-hist-inner" />
        <div className="rad-own-pfr-rad-hist-child1" />
        <div className="frame-parent20">
          <div className="group-wrapper45">
            <div className="view-doctors-notes-wrapper1">
              <div className="view-radiologists-notes">View Doctor’s Notes</div>
            </div>
          </div>
          <div className="frame-child74" />
          <b className="test-details5">Test Details</b>
          <div className="frame-child75" />
          <div className="frame-child76" />
          <div className="frame-child74" />
          <b className="original-image3">Original Image</b>
          <img className="xray1-1-icon3" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper46">
            <div className="view-personnel-info-wrapper1">
              <div className="view-radiologists-notes">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child78" />
          <div className="frame-child79" />
          <img className="frame-child80" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child81" alt="" src="/polygon-5.svg" />
          <img className="frame-child82" alt="" src="/polygon-6.svg" />
          <div className="frame-child83" />
          <img className="vector-icon64" alt="" />
          <img className="frame-child84" alt="" src="/rectangle-5907.svg" />
          <div className="group-wrapper47">
            <div className="view-radiologists-notes-wrapper">
              <div className="view-radiologists-notes">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
          <b className="annotations-by-radiologists">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-13"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child85" />
          <div className="frame-child86" />
          <img className="frame-child87" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child88" alt="" src="/polygon-5.svg" />
          <img className="frame-child89" alt="" src="/polygon-6.svg" />
          <div className="frame-child90" />
          <div className="group-wrapper48">
            <div className="view-radiologists-details-wrapper">
              <div className="view-radiologists-notes">
                View Radiologist’s Details
              </div>
            </div>
          </div>
        </div>
        <div
          className="rad-own-pfr-rad-hist-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper17">
            <div className="view-radiologists-notes">Back</div>
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

export default RadOwnPfrRadHist;
