import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocConsPfrRadHist.css";

const DocConsPfrRadHist = () => {
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
      <div className="doc-cons-pfr-rad-hist">
        <div className="doc-cons-pfr-rad-hist-child" />
        <img className="vector-icon97" alt="" />
        <img
          className="doc-cons-pfr-rad-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing21">
          <img className="vector-icon98" alt="" src="/vector.svg" />
          <img className="vector-icon99" alt="" src="/vector.svg" />
          <img className="vector-icon100" alt="" />
          <div className="iconnotification-bing-child19" />
          <div className="div47">03</div>
        </div>
        <img className="need-help-icon21" alt="" src="/need-help.svg" />
        <div className="doc-cons-pfr-rad-hist-inner" />
        <div className="doc-cons-pfr-rad-hist-child1" />
        <div className="test-details-group">
          <b className="test-details10">Test Details</b>
          <div className="frame-child167" />
          <div className="frame-child168" />
          <div className="frame-child169" />
          <b className="original-image8">Original Image</b>
          <img className="xray1-1-icon8" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper65">
            <div className="view-doctors-notes-wrapper4">
              <div className="view-doctors-notes6">View Doctor’s Impressions</div>
            </div>
          </div>
          <div className="frame-child170" />
          <div className="frame-child171" />
          <img className="frame-child172" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child173" alt="" src="/polygon-5.svg" />
          <img className="frame-child174" alt="" src="/polygon-6.svg" />
          <div className="frame-child175" />
        </div>
        <div className="doc-cons-pfr-rad-hist-inner1">
          <div className="back-wrapper24">
            <div className="view-doctors-notes6">Back</div>
          </div>
        </div>
        <div className="doc-cons-pfr-rad-hist-inner2">
          <div className="view-personnel-info-wrapper6">
            <div className="view-doctors-notes6">View Personnel Info</div>
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

export default DocConsPfrRadHist;
