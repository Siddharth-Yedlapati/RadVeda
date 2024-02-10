import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocConsNotes from "../components/DocConsNotes";
import { useNavigate } from "react-router-dom";
import "./DocConsPfrRad.css";

const DocConsPfrRad = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isDocConsNotesOpen, setDocConsNotesOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(true);
  }, []);

  const closeDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-cons-pfrbr-editor");
  }, [navigate]);

  return (
    <>
      <div className="doc-cons-pfr-rad">
        <div className="doc-cons-pfr-rad-child" />
        <img className="vector-icon244" alt="" />
        <img
          className="doc-cons-pfr-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing55">
          <img className="vector-icon245" alt="" src="/vector.svg" />
          <img className="vector-icon246" alt="" src="/vector.svg" />
          <img className="vector-icon247" alt="" />
          <div className="iconnotification-bing-child53" />
          <div className="div130">03</div>
        </div>
        <img className="need-help-icon55" alt="" src="/need-help.svg" />
        <div className="doc-cons-pfr-rad-inner" />
        <div className="doc-cons-pfr-rad-child1" />
        <div className="test-details-parent5">
          <b className="test-details28">Test Details</b>
          <div className="frame-child487" />
          <div className="frame-child488" />
          <div className="frame-child489" />
          <b className="original-image23">Original Image</b>
          <img className="xray1-1-icon26" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper154" onClick={openDocConsNotes}>
            <div className="view-own-notes-wrapper9">
              <div className="view-own-notes11">View own notes</div>
            </div>
          </div>
          <div className="frame-child490" />
          <div className="frame-child491" />
          <img className="frame-child492" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child493" alt="" src="/polygon-5.svg" />
          <img className="frame-child494" alt="" src="/polygon-6.svg" />
          <div className="frame-child495" />
        </div>
        <div className="doc-cons-pfr-rad-inner1">
          <div className="back-wrapper67">
            <div className="view-own-notes11">Back</div>
          </div>
        </div>
        <div
          className="doc-cons-pfr-rad-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="add-notes-wrapper5">
            <div className="view-own-notes11">Add Notes</div>
          </div>
        </div>
        <div className="doc-cons-pfr-rad-inner3">
          <div className="view-personnel-info-wrapper22">
            <div className="view-own-notes11">View Personnel Info</div>
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

export default DocConsPfrRad;
