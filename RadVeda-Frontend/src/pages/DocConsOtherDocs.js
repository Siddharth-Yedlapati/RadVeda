import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocConsOtherDocs.css";

const DocConsOtherDocs = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-cons-pfr");
  }, [navigate]);

  return (
    <>
      <div className="doc-cons-other-docs">
        <div className="doc-cons-other-docs-child" />
        <img className="vector-icon109" alt="" />
        <img
          className="doc-cons-other-docs-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing24">
          <img className="vector-icon110" alt="" src="/vector.svg" />
          <img className="vector-icon111" alt="" src="/vector.svg" />
          <img className="vector-icon112" alt="" />
          <div className="iconnotification-bing-child22" />
          <div className="div50">03</div>
        </div>
        <img className="need-help-icon24" alt="" src="/need-help.svg" />
        <div className="doc-cons-other-docs-inner" />
        <div className="doc-cons-other-docs-child1" />
        <div className="frame-parent27">
          <div className="frame-child210" />
          <div className="frame-child211" />
          <div className="good-morning-john-container5">
            <span>Good Morning</span>
            <b className="john-doe5">
              <span className="span5">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-parent39">
            <div className="doctor5-wrapper">
              <div className="doctor-name">Doctor5</div>
            </div>
            <div className="request-declined-by4">
              Request declined by doctor
            </div>
            <div className="hospital5">Hospital5</div>
          </div>
        </div>
        <div className="frame-parent28">
          <div className="frame-child210" />
          <div className="frame-parent29">
            <div className="group-parent40">
              <div className="doctor1-wrapper">
                <div className="doctor-name">Doctor1</div>
              </div>
              <div className="not-yet-consulted2">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper68">
              <div className="consult-frame">
                <div className="consult2">Consult</div>
              </div>
            </div>
            <div className="group-parent41">
              <div className="doctor2-wrapper">
                <div className="doctor-name">Doctor2</div>
              </div>
              <div className="request-declined-by4">Request Approved</div>
            </div>
            <div className="group-parent42">
              <div className="doctor4-wrapper">
                <div className="doctor-name">Doctor4</div>
              </div>
              <div className="waiting-for-consent2">Waiting for consent</div>
              <div className="hospital4">Hospital4</div>
            </div>
            <div className="doctor-name-parent">
              <div className="doctor-name">Doctor Name</div>
              <div className="status5">Status</div>
            </div>
          </div>
          <div className="group-parent43">
            <div className="doctor2-wrapper">
              <div className="doctor-name">Doctor3</div>
            </div>
            <div className="request-declined-by4">
              Request Declined by patient
            </div>
          </div>
          <div className="hospital1-parent">
            <div className="hospital1">Hospital1</div>
            <div className="hospital2">Hospital2</div>
            <div className="hospital3">Hospital3</div>
            <div className="hospital-name">Hospital Name</div>
          </div>
          <b className="doctor-details">Doctor Details</b>
        </div>
        <div
          className="doc-cons-other-docs-inner1"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper29">
            <div className="consult2">Back</div>
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

export default DocConsOtherDocs;
