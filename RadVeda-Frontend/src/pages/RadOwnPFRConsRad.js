import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPFRConsRad.css";

const RadOwnPFRConsRad = () => {

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
    navigate("/rad-own-pfr");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pfr-cons-rad">
        <div className="rad-own-pfr-cons-rad-child" />
        <img className="vector-icon41" alt="" />
        <img
          className="rad-own-pfr-cons-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing8">
          <img className="vector-icon42" alt="" src="/vector.svg" />
          <img className="vector-icon43" alt="" src="/vector.svg" />
          <img className="vector-icon44" alt="" />
          <div className="iconnotification-bing-child6" />
          <div className="div28">03</div>
        </div>
        <img className="need-help-icon8" alt="" src="/need-help.svg" />
        <div className="rad-own-pfr-cons-rad-inner" />
        <div className="rad-own-pfr-cons-rad-child1" />
        <div className="frame-parent11">
          <div className="frame-child35" />
          <div className="frame-child36" />
          <div className="good-morning-john-container2">
            <span>Good Morning</span>
            <b className="john-doe2">
              <span className="span2">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div
          className="rad-own-pfr-cons-rad-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper8">
            <div className="consult">Back</div>
          </div>
        </div>
        <div className="group-parent23">
          <div className="radiologist5-wrapper">
            <div className="radiologist-name">Radiologist5</div>
          </div>
          <div className="request-declined-by">{`Request Declined by Patient `}</div>
          <div className="lab5">Lab5</div>
        </div>
        <div className="group-parent24">
          <div className="radiologist4-wrapper">
            <div className="radiologist-name">Radiologist4</div>
          </div>
          <div className="request-declined-by1">
            Request Declined by Radiologist
          </div>
          <div className="lab4">Lab4</div>
        </div>
        <div className="frame-parent12">
          <div className="frame-child35" />
          <div className="frame-parent13">
            <div className="group-parent25">
              <div className="radiologist1-wrapper">
                <div className="radiologist-name">Radiologist1</div>
              </div>
              <div className="not-yet-consulted">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper32">
              <div className="consult-wrapper">
                <div className="consult">Consult</div>
              </div>
            </div>
            <div className="group-parent26">
              <div className="radiologist2-wrapper">
                <div className="radiologist-name">Radiologist2</div>
              </div>
              <div className="request-approved">Request Approved</div>
            </div>
            <div className="radiologist-name-parent">
              <div className="radiologist-name">Radiologist Name</div>
              <div className="status3">Status</div>
            </div>
          </div>
          <div className="lab1-parent">
            <div className="lab1">Lab1</div>
            <div className="lab2">Lab2</div>
            <div className="lab-name">Lab Name</div>
          </div>
          <b className="radiologist-details">Radiologist Details</b>
          <div className="group-parent27">
            <div className="radiologist3-wrapper">
              <div className="radiologist-name">Radiologist3</div>
            </div>
            <div className="waiting-for-consent">Waiting for consent</div>
            <div className="lab3">Lab3</div>
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

export default RadOwnPFRConsRad;
