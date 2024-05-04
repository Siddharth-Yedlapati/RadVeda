import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocOwnPfrRadHist.css";

const DocOwnPfrRadHist = () => {
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

  return (
    <>
      <div className="doc-own-pfr-rad-hist">
        <div className="doc-own-pfr-rad-hist-child" />
        <img className="vector-icon133" alt="" />
        <img
          className="doc-own-pfr-rad-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing30">
          <img className="vector-icon134" alt="" src="/vector.svg" />
          <img className="vector-icon135" alt="" src="/vector.svg" />
          <img className="vector-icon136" alt="" />
          <div className="iconnotification-bing-child28" />
          <div className="div62">03</div>
        </div>
        <img className="need-help-icon30" alt="" src="/need-help.svg" />
        <div className="doc-own-pfr-rad-hist-inner" />
        <div className="doc-own-pfr-rad-hist-child1" />
        <div className="test-details-parent1">
          <b className="test-details16">Test Details</b>
          <div className="frame-child276" />
          <div className="frame-child277" />
          <div className="frame-child278" />
          <b className="original-image14">Original Image</b>
          <img className="xray1-1-icon14" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper77">
            <div className="view-doctors-notes-wrapper7">
              <div className="view-doctors-notes9">View Doctor’s Impressions</div>
            </div>
          </div>
          <div className="frame-child279" />
          <div className="frame-child280" />
          <img className="frame-child281" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child282" alt="" src="/polygon-5.svg" />
          <img className="frame-child283" alt="" src="/polygon-6.svg" />
          <div className="frame-child284" />
        </div>
        <div className="doc-own-pfr-rad-hist-inner1">
          <div className="back-wrapper37">
            <div className="view-doctors-notes9">Back</div>
          </div>
        </div>
        <div className="doc-own-pfr-rad-hist-inner2">
          <div className="view-personnel-info-wrapper12">
            <div className="view-doctors-notes9">View Personnel Info</div>
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

export default DocOwnPfrRadHist;
