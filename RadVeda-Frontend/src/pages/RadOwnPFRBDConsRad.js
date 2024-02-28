import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadOwnPFRBDConsRad.css";

const RadOwnPFRBDConsRad = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-pfr-doc");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pfrbd-cons-rad">
        <div className="rad-own-pfrbd-cons-rad-child" />
        <img className="vector-icon45" alt="" />
        <img
          className="rad-own-pfrbd-cons-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing9">
          <img className="vector-icon46" alt="" src="/vector.svg" />
          <img className="vector-icon47" alt="" src="/vector.svg" />
          <img className="vector-icon48" alt="" />
          <div className="iconnotification-bing-child7" />
          <div className="div29">03</div>
        </div>
        <img className="need-help-icon9" alt="" src="/need-help.svg" />
        <div className="rad-own-pfrbd-cons-rad-inner" />
        <div className="rad-own-pfrbd-cons-rad-child1" />
        <div className="frame-parent14">
          <div className="frame-child38" />
          <div className="frame-child39" />
          <div className="good-morning-john-container3">
            <span>Good Morning</span>
            <b className="john-doe3">
              <span className="span3">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-parent28">
            <div className="radiologist5-container">
              <div className="radiologist51">Radiologist5</div>
            </div>
            <div className="request-declined-by2">{`Request Declined by Patient `}</div>
            <div className="lab51">Lab5</div>
          </div>
          <div className="group-parent29">
            <div className="radiologist4-container">
              <div className="radiologist51">Radiologist4</div>
            </div>
            <div className="request-declined-by3">
              Request Declined by Radiologist
            </div>
            <div className="lab41">Lab4</div>
          </div>
        </div>
        <div className="frame-parent15">
          <div className="frame-child38" />
          <div className="frame-parent16">
            <div className="group-parent30">
              <div className="radiologist1-container">
                <div className="radiologist51">Radiologist1</div>
              </div>
              <div className="not-yet-consulted1">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper33">
              <div className="consult-container">
                <div className="consult1">Consult</div>
              </div>
            </div>
            <div className="group-parent31">
              <div className="radiologist2-container">
                <div className="radiologist51">Radiologist2</div>
              </div>
              <div className="request-approved1">Request Approved</div>
            </div>
            <div className="radiologist-name-group">
              <div className="radiologist51">Radiologist Name</div>
              <div className="status4">Status</div>
            </div>
          </div>
          <div className="lab1-group">
            <div className="lab11">Lab1</div>
            <div className="lab21">Lab2</div>
            <div className="lab-name1">Lab Name</div>
          </div>
          <b className="radiologist-details1">Radiologist Details</b>
          <div className="group-parent32">
            <div className="radiologist3-container">
              <div className="radiologist51">Radiologist3</div>
            </div>
            <div className="waiting-for-consent1">Waiting for consent</div>
            <div className="lab31">Lab3</div>
          </div>
        </div>
        <div
          className="rad-own-pfrbd-cons-rad-inner1"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper9">
            <div className="consult1">Back</div>
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

export default RadOwnPFRBDConsRad;
