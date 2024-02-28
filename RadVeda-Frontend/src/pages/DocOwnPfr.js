import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocOwnRadNotes from "../components/DocOwnRadNotes";
import DocOwnNotes from "../components/DocOwnNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnPfr.css";

const DocOwnPfr = () => {
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
  const [isDocOwnRadNotesOpen, setDocOwnRadNotesOpen] = useState(false);
  const [isDocOwnNotesOpen, setDocOwnNotesOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-own-pfr-editor");
  }, [navigate]);

  const openDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(true);
  }, []);

  const closeDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-own-patient-details");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/frame-12611528511");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/doc-own-consult-docs");
  }, [navigate]);

  const openDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(true);
  }, []);

  const closeDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(false);
  }, []);

  return (
    <>
      <div className="doc-own-pfr">
        <div className="doc-own-pfr-child" />
        <img className="vector-icon121" alt="" />
        <img
          className="doc-own-pfr-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing27">
          <img className="vector-icon122" alt="" src="/vector.svg" />
          <img className="vector-icon123" alt="" src="/vector.svg" />
          <img className="vector-icon124" alt="" />
          <div className="iconnotification-bing-child25" />
          <div className="div59">03</div>
        </div>
        <img className="need-help-icon27" alt="" src="/need-help.svg" />
        <div className="doc-own-pfr-inner" />
        <div className="doc-own-pfr-child1" />
        <div className="rectangle-parent14">
          <div className="frame-child234" />
          <b className="annotated-image4">Annotated Image</b>
          <div className="frame-child235" />
          <b className="test-details14">Test Details</b>
          <div className="frame-child236" />
          <div className="frame-child237" />
          <div className="frame-child235" />
          <b className="original-image12">Original Image</b>
          <img className="xray1-1-icon12" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon7"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper72" onClick={onFrameContainerClick}>
            <div className="add-notes-wrapper2">
              <div className="upload-report">Add Notes</div>
            </div>
          </div>
          <div className="frame-child239" />
          <div className="frame-child240" />
          <img className="frame-child241" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child242" alt="" src="/polygon-5.svg" />
          <img className="frame-child243" alt="" src="/polygon-6.svg" />
          <div className="frame-child244" />
          <div className="frame-child245" />
          <div className="frame-child246" />
          <img className="frame-child247" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child248" alt="" src="/polygon-5.svg" />
          <img className="frame-child249" alt="" src="/polygon-6.svg" />
          <div className="frame-child250" />
          <div className="group-wrapper73" onClick={openDocOwnRadNotes}>
            <div className="view-radiologists-notes-wrapper5">
              <div className="upload-report">View Radiologist’s Notes</div>
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-inner1">
          <div className="upload-report-wrapper">
            <div className="upload-report">Upload Report</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner2">
          <div className="back-wrapper32">
            <div className="upload-report">Back</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner3" onClick={onFrameContainer3Click}>
          <div className="complete-diagnosis-wrapper">
            <div className="upload-report">Complete Diagnosis</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner4" onClick={onFrameContainer4Click}>
          <div className="collaborate-with-authorized-re-wrapper1">
            <div className="upload-report">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-inner5" onClick={onFrameContainer5Click}>
          <div className="consult-other-doctors-container">
            <div className="upload-report">Consult Other Doctors</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner6" onClick={openDocOwnNotes}>
          <div className="view-own-notes-wrapper4">
            <div className="upload-report">View own notes</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner7">
          <div className="view-personnel-info-wrapper10">
            <div className="upload-report">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner8">
          <div className="view-radiologists-details-wrapper5">
            <div className="upload-report">View Radiologist’s Details</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner9">
          <div className="view-other-doctors-notes-frame">
            <div className="upload-report">View other doctors’ Notes</div>
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

export default DocOwnPfr;
