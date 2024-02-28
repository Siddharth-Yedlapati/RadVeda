import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadConsPFRBDConsRad.css";

const RadConsPFRBDConsRad = () => {

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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-cons-pfr-doc");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pfrbd-cons-rad">
        <div className="rad-cons-pfrbd-cons-rad-child" />
        <img className="vector-icon212" alt="" />
        <img
          className="rad-cons-pfrbd-cons-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing47">
          <img className="vector-icon213" alt="" src="/vector.svg" />
          <img className="vector-icon214" alt="" src="/vector.svg" />
          <img className="vector-icon215" alt="" />
          <div className="iconnotification-bing-child45" />
          <div className="div116">03</div>
        </div>
        <img className="need-help-icon47" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfrbd-cons-rad-inner" />
        <div className="rad-cons-pfrbd-cons-rad-child1" />
        <div className="frame-parent58">
          <div className="frame-child393" />
          <div className="frame-child394" />
          <div className="good-morning-john-container10">
            <span>Good Morning</span>
            <b className="john-doe10">
              <span className="span10">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-parent95">
            <div className="radiologist5-wrapper1">
              <div className="radiologist53">Radiologist5</div>
            </div>
            <div className="request-declined-by10">{`Request Declined by Patient `}</div>
            <div className="lab53">Lab5</div>
          </div>
          <div className="group-parent96">
            <div className="radiologist4-wrapper1">
              <div className="radiologist53">Radiologist4</div>
            </div>
            <div className="request-declined-by11">
              Request Declined by Radiologist
            </div>
            <div className="lab43">Lab4</div>
          </div>
        </div>
        <div className="frame-parent59">
          <div className="frame-child393" />
          <div className="frame-parent60">
            <div className="group-parent97">
              <div className="radiologist1-wrapper1">
                <div className="radiologist53">Radiologist1</div>
              </div>
              <div className="not-yet-consulted5">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper132">
              <div className="consult-wrapper3">
                <div className="consult5">Consult</div>
              </div>
            </div>
            <div className="group-parent98">
              <div className="radiologist2-wrapper1">
                <div className="radiologist53">Radiologist2</div>
              </div>
              <div className="request-approved5">Request Approved</div>
            </div>
            <div className="radiologist-name-parent2">
              <div className="radiologist53">Radiologist Name</div>
              <div className="status13">Status</div>
            </div>
          </div>
          <div className="lab1-parent1">
            <div className="lab16">Lab1</div>
            <div className="lab26">Lab2</div>
            <div className="lab-name4">Lab Name</div>
          </div>
          <b className="radiologist-details4">Radiologist Details</b>
          <div className="group-parent99">
            <div className="radiologist3-wrapper1">
              <div className="radiologist53">Radiologist3</div>
            </div>
            <div className="waiting-for-consent5">Waiting for consent</div>
            <div className="lab36">Lab3</div>
          </div>
        </div>
        <div
          className="rad-cons-pfrbd-cons-rad-inner1"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper58">
            <div className="consult5">Back</div>
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

export default RadConsPFRBDConsRad;
