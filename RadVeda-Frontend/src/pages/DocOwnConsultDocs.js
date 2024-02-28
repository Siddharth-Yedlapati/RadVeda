import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnConsultDocs.css";

const DocOwnConsultDocs = () => {
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
    navigate("/doc-own-pfr");
  }, [navigate]);

  return (
    <>
      <div className="doc-own-consult-docs">
        <div className="doc-own-consult-docs-child" />
        <img className="vector-icon129" alt="" />
        <img
          className="doc-own-consult-docs-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing29">
          <img className="vector-icon130" alt="" src="/vector.svg" />
          <img className="vector-icon131" alt="" src="/vector.svg" />
          <img className="vector-icon132" alt="" />
          <div className="iconnotification-bing-child27" />
          <div className="div61">03</div>
        </div>
        <img className="need-help-icon29" alt="" src="/need-help.svg" />
        <div className="doc-own-consult-docs-inner" />
        <div className="doc-own-consult-docs-child1" />
        <div className="frame-parent32">
          <div className="frame-child268" />
          <div className="frame-child269" />
          <div className="good-morning-john-container6">
            <span>Good Morning</span>
            <b className="john-doe6">
              <span className="span6">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-parent48">
            <div className="doctor5-container">
              <div className="doctor51">Doctor5</div>
            </div>
            <div className="request-declined-by6">
              Request declined by doctor
            </div>
            <div className="hospital51">Hospital5</div>
          </div>
        </div>
        <div className="frame-parent33">
          <div className="frame-child268" />
          <div className="frame-parent34">
            <div className="group-parent49">
              <div className="doctor1-container">
                <div className="doctor51">Doctor1</div>
              </div>
              <div className="not-yet-consulted3">Not Yet Consulted</div>
            </div>
            <div className="group-wrapper76">
              <div className="consult-wrapper1">
                <div className="consult3">Consult</div>
              </div>
            </div>
            <div className="group-parent50">
              <div className="doctor2-container">
                <div className="doctor51">Doctor2</div>
              </div>
              <div className="request-declined-by6">Request Approved</div>
            </div>
            <div className="group-parent51">
              <div className="doctor4-container">
                <div className="doctor51">Doctor4</div>
              </div>
              <div className="waiting-for-consent3">Waiting for consent</div>
              <div className="hospital41">Hospital4</div>
            </div>
            <div className="doctor-name-group">
              <div className="doctor51">Doctor Name</div>
              <div className="status8">Status</div>
            </div>
          </div>
          <div className="group-parent52">
            <div className="doctor2-container">
              <div className="doctor51">Doctor3</div>
            </div>
            <div className="request-declined-by6">
              Request Declined by patient
            </div>
          </div>
          <div className="hospital1-group">
            <div className="hospital11">Hospital1</div>
            <div className="hospital21">Hospital2</div>
            <div className="hospital31">Hospital3</div>
            <div className="hospital-name1">Hospital Name</div>
          </div>
          <b className="doctor-details1">Doctor Details</b>
        </div>
        <div
          className="doc-own-consult-docs-inner1"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper36">
            <div className="consult3">Back</div>
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

export default DocOwnConsultDocs;
