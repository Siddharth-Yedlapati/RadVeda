import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadConsPfrConsRad.css";

const RadConsPfrConsRad = () => {

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
    navigate("/rad-cons-pfr");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pfr-cons-rad">
        <div className="rad-cons-pfr-cons-rad-child" />
        <img className="vector-icon208" alt="" />
        <img
          className="rad-cons-pfr-cons-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing46">
          <img className="vector-icon209" alt="" src="/vector.svg" />
          <img className="vector-icon210" alt="" src="/vector.svg" />
          <img className="vector-icon211" alt="" />
          <div className="iconnotification-bing-child44" />
          <div className="div115">03</div>
        </div>
        <img className="need-help-icon46" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfr-cons-rad-inner" />
        <div className="rad-cons-pfr-cons-rad-child1" />
        <div className="frame-parent55">
          <div className="frame-child390" />
          <div className="frame-child391" />
          <div className="good-morning-john-container9">
            <span>Good Morning</span>
            <b className="john-doe9">
              <span className="span9">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div
          className="rad-cons-pfr-cons-rad-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper57">
            <div className="back82">Back</div>
          </div>
        </div>
        <div className="group-parent90">
          <div className="radiologist5-frame">
            <div className="radiologist52">Radiologist5</div>
          </div>
          <div className="request-declined-by8">{`Request Declined by Patient `}</div>
          <div className="lab52">Lab5</div>
        </div>
        <div className="group-parent91">
          <div className="radiologist4-frame">
            <div className="radiologist52">Radiologist4</div>
          </div>
          <div className="request-declined-by9">
            Request Declined by Radiologist
          </div>
          <div className="lab42">Lab4</div>
        </div>
        <div className="frame-parent56">
          <div className="frame-child390" />
          <div className="frame-parent57">
            <div className="group-parent92">
              <div className="radiologist1-frame">
                <div className="radiologist52">Radiologist1</div>
              </div>
              <div className="not-yet-consulted4">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper131">
              <div className="consult-wrapper2">
                <div className="back82">Consult</div>
              </div>
            </div>
            <div className="group-parent93">
              <div className="radiologist2-frame">
                <div className="radiologist52">Radiologist2</div>
              </div>
              <div className="request-approved4">Request Approved</div>
            </div>
            <div className="radiologist-name-parent1">
              <div className="radiologist52">Radiologist Name</div>
              <div className="status12">Status</div>
            </div>
          </div>
          <div className="lab1-container">
            <div className="lab15">Lab1</div>
            <div className="lab25">Lab2</div>
            <div className="lab-name3">Lab Name</div>
          </div>
          <b className="radiologist-details3">Radiologist Details</b>
          <div className="group-parent94">
            <div className="radiologist3-frame">
              <div className="radiologist52">Radiologist3</div>
            </div>
            <div className="waiting-for-consent4">Waiting for consent</div>
            <div className="lab35">Lab3</div>
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

export default RadConsPfrConsRad;
