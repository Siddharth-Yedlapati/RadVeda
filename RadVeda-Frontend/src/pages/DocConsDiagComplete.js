import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocConsRadNotes from "../components/DocConsRadNotes";
import DocConsNotes from "../components/DocConsNotes";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocConsDiagComplete.css";

const DocConsDiagComplete = () => {
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
  const [isDocConsRadNotesOpen, setDocConsRadNotesOpen] = useState(false);
  const [isDocConsNotesOpen, setDocConsNotesOpen] = useState(false);

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openDocConsRadNotes = useCallback(() => {
    setDocConsRadNotesOpen(true);
  }, []);

  const closeDocConsRadNotes = useCallback(() => {
    setDocConsRadNotesOpen(false);
  }, []);

  const openDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(true);
  }, []);

  const closeDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(false);
  }, []);

  return (
    <>
      <div className="doc-cons-diag-complete">
        <div className="doc-cons-diag-complete-child" />
        <img className="vector-icon93" alt="" />
        <img
          className="doc-cons-diag-complete-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing20">
          <img className="vector-icon94" alt="" src="/vector.svg" />
          <img className="vector-icon95" alt="" src="/vector.svg" />
          <img className="vector-icon96" alt="" />
          <div className="iconnotification-bing-child18" />
          <div className="div46">03</div>
        </div>
        <img className="need-help-icon20" alt="" src="/need-help.svg" />
        <div className="doc-cons-diag-complete-inner" />
        <div className="doc-cons-diag-complete-child1" />
        <div className="rectangle-parent11">
          <div className="frame-child150" />
          <b className="annotated-image1">Annotated Image</b>
          <div className="frame-child151" />
          <b className="test-details9">Test Details</b>
          <div className="frame-child152" />
          <div className="frame-child153" />
          <div className="frame-child151" />
          <b className="original-image7">Original Image</b>
          <img className="xray1-1-icon7" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon4"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child155" />
          <div className="frame-child156" />
          <img className="frame-child157" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child158" alt="" src="/polygon-5.svg" />
          <img className="frame-child159" alt="" src="/polygon-6.svg" />
          <div className="frame-child160" />
          <div className="frame-child161" />
          <div className="frame-child162" />
          <img className="frame-child163" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child164" alt="" src="/polygon-5.svg" />
          <img className="frame-child165" alt="" src="/polygon-6.svg" />
          <div className="frame-child166" />
          <div className="group-wrapper63">
            <div className="view-radiologists-details-wrapper2">
              <div className="view-radiologists-details4">
                View Radiologist’s Details
              </div>
            </div>
          </div>
          <div className="group-wrapper64" onClick={openDocConsRadNotes}>
            <div className="view-radiologists-notes-wrapper2">
              <div className="view-radiologists-details4">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
        </div>
        <div className="doc-cons-diag-complete-inner1">
          <div className="back-wrapper23">
            <div className="view-radiologists-details4">Back</div>
          </div>
        </div>
        <div className="doc-cons-diag-complete-inner2">
          <div className="view-other-doctors-notes-container">
            <div className="view-radiologists-details4">
              View other doctors’ Notes
            </div>
          </div>
        </div>
        <div
          className="doc-cons-diag-complete-inner3"
          onClick={openDocConsNotes}
        >
          <div className="view-own-notes-wrapper2">
            <div className="view-radiologists-details4">View own notes</div>
          </div>
        </div>
        <div className="doc-cons-diag-complete-inner4">
          <div className="view-personnel-info-wrapper5">
            <div className="view-radiologists-details4">
              View Personnel Info
            </div>
          </div>
        </div>
        <div className="doc-cons-diag-complete-inner5">
          <div className="view-report-frame">
            <div className="view-radiologists-details4">View Report</div>
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
      {isDocConsRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocConsRadNotes}
        >
          <DocConsRadNotes onClose={closeDocConsRadNotes} />
        </PortalPopup>
      )}
      {isDocConsNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocConsNotes}
        >
          <DocConsNotes onClose={closeDocConsNotes} />
        </PortalPopup>
      )}
    </>
  );
};

export default DocConsDiagComplete;
