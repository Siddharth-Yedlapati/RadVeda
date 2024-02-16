import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadConsDocNotes from "../components/RadConsDocNotes";
import RadConsNotes from "../components/RadConsNotes";
import RadConsOtherRadNotes from "../components/RadConsOtherRadNotes";
import { useNavigate } from "react-router-dom";
import "./RadConsPfr.css";

const RadConsPfr = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isRadConsDocNotesOpen, setRadConsDocNotesOpen] = useState(false);
  const [isRadConsNotesOpen, setRadConsNotesOpen] = useState(false);
  const [isRadConsOtherRadNotesOpen, setRadConsOtherRadNotesOpen] =
    useState(false);
  const navigate = useNavigate();

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
    navigate("/rad-cons-pfr-annotater");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-cons-pfr-editor");
  }, [navigate]);

  const openRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(true);
  }, []);

  const closeRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-cons-pfr-chat");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/rad-cons-pfr-cons-rad");
  }, [navigate]);

  const openRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(true);
  }, []);

  const closeRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(false);
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pfr">
        <div className="rad-cons-pfr-child" />
        <img className="vector-icon216" alt="" />
        <img
          className="rad-cons-pfr-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing48">
          <img className="vector-icon217" alt="" src="/vector.svg" />
          <img className="vector-icon218" alt="" src="/vector.svg" />
          <img className="vector-icon219" alt="" />
          <div className="iconnotification-bing-child46" />
          <div className="div117">03</div>
        </div>
        <img className="need-help-icon48" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfr-inner" />
        <div className="rad-cons-pfr-child1" />
        <div className="frame-parent61">
          <div className="group-wrapper133" onClick={openRadConsDocNotes}>
            <div className="view-doctors-notes-wrapper10">
              <div className="view-doctors-notes12">View Doctor’s Notes</div>
            </div>
          </div>
          <img className="frame-child396" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image3">Self Annotated Image</b>
          <div className="frame-child397" />
          <b className="test-details22">Test Details</b>
          <div className="frame-child398" />
          <div className="frame-child399" />
          <div className="frame-child397" />
          <b className="original-image17">Original Image</b>
          <img className="xray1-1-icon20" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon11"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper134" onClick={onFrameContainer1Click}>
            <div className="add-further-annotations-frame">
              <div className="view-doctors-notes12">
                Add further annotations
              </div>
            </div>
          </div>
          <div className="group-wrapper135">
            <div className="view-personnel-info-wrapper16">
              <div className="view-doctors-notes12">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child401" />
          <div className="frame-child402" />
          <img className="frame-child403" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child404" alt="" src="/polygon-5.svg" />
          <img className="frame-child405" alt="" src="/polygon-6.svg" />
          <div className="frame-child406" />
        </div>
        <div className="rad-cons-pfr-inner1" onClick={onFrameContainer12Click}>
          <div className="add-notes-wrapper3">
            <div className="view-doctors-notes12">Add Notes</div>
          </div>
        </div>
        <div className="rad-cons-pfr-inner2" onClick={openRadConsNotes}>
          <div className="view-own-notes-wrapper6">
            <div className="view-doctors-notes12">View own notes</div>
          </div>
        </div>
        <img className="rad-cons-pfr-child2" alt="" src="/rectangle-5907.svg" />
        <div className="rad-cons-pfr-inner3" onClick={onFrameContainer3Click}>
          <div className="collaborate-with-authorized-re-wrapper2">
            <div className="view-doctors-notes12">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div className="rad-cons-pfr-inner4" onClick={onFrameContainer4Click}>
          <div className="consult-other-radiologists-frame">
            <div className="view-doctors-notes12">
              Consult Other Radiologists
            </div>
          </div>
        </div>
        <div className="rad-cons-pfr-inner5" onClick={openRadConsOtherRadNotes}>
          <div className="view-other-radiologists-notes-wrapper1">
            <div className="view-doctors-notes12">
              View Other Radiologist’s Notes
            </div>
          </div>
        </div>
        <b className="annotations-by-other3">
          Annotations by other Radiologists
        </b>
        <img
          className="annotely-image-1-16"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div className="rad-cons-pfr-inner6" onClick={onFrameContainer6Click}>
          <div className="back-wrapper59">
            <div className="view-doctors-notes12">Back</div>
          </div>
        </div>
        <div className="rad-cons-pfr-child3" />
        <div className="rad-cons-pfr-child4" />
        <img className="rad-cons-pfr-child5" alt="" src="/rectangle-5913.svg" />
        <img className="rad-cons-pfr-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-cons-pfr-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-cons-pfr-child8" />
        <div className="rad-cons-pfr-inner7">
          <div className="view-other-radiologists-detai-wrapper1">
            <div className="view-doctors-notes12">
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

export default RadConsPfr;
