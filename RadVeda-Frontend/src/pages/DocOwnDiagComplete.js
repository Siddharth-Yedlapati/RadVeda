import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocOwnRadNotes from "../components/DocOwnRadNotes";
import DocOwnNotes from "../components/DocOwnNotes";
import "./DocOwnDiagComplete.css";

const DocOwnDiagComplete = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isDocOwnRadNotesOpen, setDocOwnRadNotesOpen] = useState(false);
  const [isDocOwnNotesOpen, setDocOwnNotesOpen] = useState(false);

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(true);
  }, []);

  const closeDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(false);
  }, []);

  const openDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(true);
  }, []);

  const closeDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(false);
  }, []);

  return (
    <>
      <div className="doc-own-diag-complete">
        <div className="doc-own-diag-complete-child" />
        <img className="vector-icon125" alt="" />
        <img
          className="doc-own-diag-complete-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing28">
          <img className="vector-icon126" alt="" src="/vector.svg" />
          <img className="vector-icon127" alt="" src="/vector.svg" />
          <img className="vector-icon128" alt="" />
          <div className="iconnotification-bing-child26" />
          <div className="div60">03</div>
        </div>
        <img className="need-help-icon28" alt="" src="/need-help.svg" />
        <div className="doc-own-diag-complete-inner" />
        <div className="doc-own-diag-complete-child1" />
        <div className="rectangle-parent15">
          <div className="frame-child251" />
          <b className="annotated-image5">Annotated Image</b>
          <div className="frame-child252" />
          <b className="test-details15">Test Details</b>
          <div className="frame-child253" />
          <div className="frame-child254" />
          <div className="frame-child252" />
          <b className="original-image13">Original Image</b>
          <img className="xray1-1-icon13" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon8"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child256" />
          <div className="frame-child257" />
          <img className="frame-child258" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child259" alt="" src="/polygon-5.svg" />
          <img className="frame-child260" alt="" src="/polygon-6.svg" />
          <div className="frame-child261" />
          <div className="frame-child262" />
          <div className="frame-child263" />
          <img className="frame-child264" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child265" alt="" src="/polygon-5.svg" />
          <img className="frame-child266" alt="" src="/polygon-6.svg" />
          <div className="frame-child267" />
          <div className="group-wrapper74">
            <div className="view-radiologists-details-wrapper6">
              <div className="view-radiologists-details8">
                View Radiologist’s Details
              </div>
            </div>
          </div>
          <div className="group-wrapper75" onClick={openDocOwnRadNotes}>
            <div className="view-radiologists-notes-wrapper6">
              <div className="view-radiologists-details8">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner1">
          <div className="back-wrapper33">
            <div className="view-radiologists-details8">Back</div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner2">
          <div className="view-other-doctors-notes-wrapper1">
            <div className="view-radiologists-details8">
              View other doctors’ Notes
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner3" onClick={openDocOwnNotes}>
          <div className="view-own-notes-wrapper5">
            <div className="view-radiologists-details8">View own notes</div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner4">
          <div className="view-personnel-info-wrapper11">
            <div className="view-radiologists-details8">
              View Personnel Info
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner5">
          <div className="view-report-wrapper2">
            <div className="view-radiologists-details8">View Report</div>
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
      {isDocOwnRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnRadNotes}
        >
          <DocOwnRadNotes onClose={closeDocOwnRadNotes} />
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

export default DocOwnDiagComplete;
