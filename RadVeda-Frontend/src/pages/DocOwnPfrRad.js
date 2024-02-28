import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocOwnNotes from "../components/DocOwnNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnPfrRad.css";

const DocOwnPfrRad = () => {
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
  const [isDocOwnNotesOpen, setDocOwnNotesOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(true);
  }, []);

  const closeDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-own-pfrbr-editor");
  }, [navigate]);

  return (
    <>
      <div className="doc-own-pfr-rad">
        <div className="doc-own-pfr-rad-child" />
        <img className="vector-icon117" alt="" />
        <img
          className="doc-own-pfr-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing26">
          <img className="vector-icon118" alt="" src="/vector.svg" />
          <img className="vector-icon119" alt="" src="/vector.svg" />
          <img className="vector-icon120" alt="" />
          <div className="iconnotification-bing-child24" />
          <div className="div58">03</div>
        </div>
        <img className="need-help-icon26" alt="" src="/need-help.svg" />
        <div className="doc-own-pfr-rad-inner" />
        <div className="doc-own-pfr-rad-child1" />
        <div className="test-details-container">
          <b className="test-details13">Test Details</b>
          <div className="frame-child225" />
          <div className="frame-child226" />
          <div className="frame-child227" />
          <b className="original-image11">Original Image</b>
          <img className="xray1-1-icon11" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper71" onClick={openDocOwnNotes}>
            <div className="view-own-notes-wrapper3">
              <div className="view-own-notes5">View own notes</div>
            </div>
          </div>
          <div className="frame-child228" />
          <div className="frame-child229" />
          <img className="frame-child230" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child231" alt="" src="/polygon-5.svg" />
          <img className="frame-child232" alt="" src="/polygon-6.svg" />
          <div className="frame-child233" />
        </div>
        <div className="doc-own-pfr-rad-inner1">
          <div className="back-wrapper31">
            <div className="view-own-notes5">Back</div>
          </div>
        </div>
        <div
          className="doc-own-pfr-rad-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="add-notes-wrapper1">
            <div className="view-own-notes5">Add Notes</div>
          </div>
        </div>
        <div className="doc-own-pfr-rad-inner3">
          <div className="view-personnel-info-wrapper9">
            <div className="view-own-notes5">View Personnel Info</div>
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
      {isDocOwnNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnNotes}
        >
          <DocOwnNotes onClose={closeDocOwnNotes} />
        </PortalPopup>
      )}
    </>
  );
};

export default DocOwnPfrRad;
