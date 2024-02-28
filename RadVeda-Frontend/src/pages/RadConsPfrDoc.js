import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadConsDocNotes from "../components/RadConsDocNotes";
import RadConsNotes from "../components/RadConsNotes";
import RadConsOtherRadNotes from "../components/RadConsOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsPfrDoc.css";

const RadConsPfrDoc = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/rad-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isRadConsDocNotesOpen, setRadConsDocNotesOpen] = useState(false);
  const [isRadConsNotesOpen, setRadConsNotesOpen] = useState(false);
  const [isRadConsOtherRadNotesOpen, setRadConsOtherRadNotesOpen] =
    useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openRadConsDocNotes = useCallback(() => {
    setRadConsDocNotesOpen(true);
  }, []);

  const closeRadConsDocNotes = useCallback(() => {
    setRadConsDocNotesOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-cons-pfrbd-editor");
  }, [navigate]);

  const openRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(true);
  }, []);

  const closeRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-cons-pfrbd-annotater");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-cons-pfrbd-chat");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/rad-cons-pfrbd-cons-rad");
  }, [navigate]);

  const openRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(true);
  }, []);

  const closeRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(false);
  }, []);

  return (
    <>
      <div className="rad-cons-pfr-doc">
        <div className="rad-cons-pfr-doc-child" />
        <img className="vector-icon232" alt="" />
        <img
          className="rad-cons-pfr-doc-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing52">
          <img className="vector-icon233" alt="" src="/vector.svg" />
          <img className="vector-icon234" alt="" src="/vector.svg" />
          <img className="vector-icon235" alt="" />
          <div className="iconnotification-bing-child50" />
          <div className="div121">03</div>
        </div>
        <img className="need-help-icon52" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfr-doc-inner" />
        <div className="rad-cons-pfr-doc-child1" />
        <div className="frame-parent65">
          <div className="group-wrapper144" onClick={openRadConsDocNotes}>
            <div className="view-doctors-notes-wrapper14">
              <div className="view-doctors-notes16">View Doctors’ Notes</div>
            </div>
          </div>
          <img className="frame-child458" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image4">Self Annotated Image</b>
          <div className="frame-child459" />
          <b className="test-details26">Test Details</b>
          <div className="frame-child460" />
          <div className="frame-child461" />
          <div className="frame-child459" />
          <b className="original-image21">Original Image</b>
          <img className="xray1-1-icon24" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon12"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper145" onClick={onFrameContainer1Click}>
            <div className="add-notes-wrapper4">
              <div className="view-doctors-notes16">Add Notes</div>
            </div>
          </div>
          <div className="group-wrapper146" onClick={openRadConsNotes}>
            <div className="view-own-notes-wrapper7">
              <div className="view-doctors-notes16">View own notes</div>
            </div>
          </div>
          <div className="group-wrapper147" onClick={onFrameContainer3Click}>
            <div className="add-further-annotations-wrapper1">
              <div className="view-doctors-notes16">
                Add further annotations
              </div>
            </div>
          </div>
          <div className="group-wrapper148">
            <div className="view-personnel-info-wrapper20">
              <div className="view-doctors-notes16">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child463" />
          <div className="frame-child464" />
          <img className="frame-child465" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child466" alt="" src="/polygon-5.svg" />
          <img className="frame-child467" alt="" src="/polygon-6.svg" />
          <div className="frame-child468" />
        </div>
        <div
          className="rad-cons-pfr-doc-inner1"
          onClick={onFrameContainer12Click}
        >
          <div className="back-wrapper63">
            <div className="view-doctors-notes16">Back</div>
          </div>
        </div>
        <img
          className="rad-cons-pfr-doc-child2"
          alt=""
          src="/rectangle-5907.svg"
        />
        <img
          className="annotely-image-1-110"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div
          className="rad-cons-pfr-doc-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="collaborate-with-authorized-re-wrapper3">
            <div className="view-doctors-notes16">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div
          className="rad-cons-pfr-doc-inner3"
          onClick={onFrameContainer32Click}
        >
          <div className="consult-other-radiologists-wrapper1">
            <div className="view-doctors-notes16">
              Consult Other Radiologists
            </div>
          </div>
        </div>
        <div
          className="rad-cons-pfr-doc-inner4"
          onClick={openRadConsOtherRadNotes}
        >
          <div className="view-other-radiologists-notes-wrapper2">
            <div className="view-doctors-notes16">
              View Other Radiologist’s Notes
            </div>
          </div>
        </div>
        <b className="annotations-by-other4">
          Annotations by other Radiologists
        </b>
        <div className="rad-cons-pfr-doc-child3" />
        <div className="rad-cons-pfr-doc-child4" />
        <img
          className="rad-cons-pfr-doc-child5"
          alt=""
          src="/rectangle-5913.svg"
        />
        <img className="rad-cons-pfr-doc-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-cons-pfr-doc-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-cons-pfr-doc-child8" />
        <div className="rad-cons-pfr-doc-inner5">
          <div className="view-other-radiologists-detai-wrapper2">
            <div className="view-doctors-notes16">
              View Other Radiologist’s Details
            </div>
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
      {isRadConsDocNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsDocNotes}
        >
          <RadConsDocNotes onClose={closeRadConsDocNotes} />
        </PortalPopup>
      )}
      {isRadConsNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsNotes}
        >
          <RadConsNotes onClose={closeRadConsNotes} />
        </PortalPopup>
      )}
      {isRadConsOtherRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsOtherRadNotes}
        >
          <RadConsOtherRadNotes onClose={closeRadConsOtherRadNotes} />
        </PortalPopup>
      )}
    </>
  );
};

export default RadConsPfrDoc;
