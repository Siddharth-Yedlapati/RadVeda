import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadOwnDocNotes from "../components/RadOwnDocNotes";
import RadOwnNotes from "../components/RadOwnNotes";
import RadOwnOtherRadNotes from "../components/RadOwnOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnDiagComp.css";

const RadOwnDiagComp = () => {

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

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isRadOwnDocNotesOpen, setRadOwnDocNotesOpen] = useState(false);
  const [isRadOwnNotesOpen, setRadOwnNotesOpen] = useState(false);
  const [isRadOwnOtherRadNotesOpen, setRadOwnOtherRadNotesOpen] =
    useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const openRadOwnDocNotes = useCallback(() => {
    setRadOwnDocNotesOpen(true);
  }, []);

  const closeRadOwnDocNotes = useCallback(() => {
    setRadOwnDocNotesOpen(false);
  }, []);

  const openRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(true);
  }, []);

  const closeRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  const viewReportNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const viewPersonnelNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const viewOtherRadNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const openRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(true);
  }, []);

  const closeRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(false);
  }, []);

  return (
    <>
      <div className="rad-own-diag-comp">
        <div className="rad-own-diag-comp-child" />
        <img className="vector-icon57" alt="" />
        <img
          className="rad-own-diag-comp-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing12">
          <img className="vector-icon58" alt="" src="/vector.svg" />
          <img className="vector-icon59" alt="" src="/vector.svg" />
          <img className="vector-icon60" alt="" />
          <div className="iconnotification-bing-child10" />
          <div className="div32">03</div>
        </div>
        <img className="need-help-icon12" alt="" src="/need-help.svg" />
        <div className="rad-own-diag-comp-inner" />
        <div className="rad-own-diag-comp-child1" />
        <div className="frame-parent19">
          <div className="group-wrapper42" onClick={openRadOwnDocNotes}>
            <div className="view-doctors-notes-frame">
              <div className="view-report">View Doctors’ Notes</div>
            </div>
          </div>
          <img className="frame-child61" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image2">self Annotated Image</b>
          <div className="frame-child62" />
          <b className="test-details4">Test Details</b>
          <div className="frame-child63" />
          <div className="frame-child64" />
          <div className="frame-child62" />
          <b className="original-image2">Original Image</b>
          <img className="xray1-1-icon2" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon2"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper43" onClick={openRadOwnNotes}>
            <div className="view-own-notes-frame">
              <div className="view-report">View own notes</div>
            </div>
          </div>
          <div className="group-wrapper44" onClick={viewPersonnelNav}>
            <div className="view-personnel-info-frame" onClick={viewPersonnelNav}>
              <div className="view-report" onClick={viewPersonnelNav}>View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child66" />
          <div className="frame-child67" />
          <img className="frame-child68" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child69" alt="" src="/polygon-5.svg" />
          <img className="frame-child70" alt="" src="/polygon-6.svg" />
          <div className="frame-child71" />
        </div>
        <div
          className="rad-own-diag-comp-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper12">
            <div className="view-report">Back</div>
          </div>
        </div>
        <img
          className="rad-own-diag-comp-child2"
          alt=""
          src="/rectangle-5907.svg"
        />
        <img
          className="annotely-image-1-12"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div
          className="rad-own-diag-comp-inner2"
          onClick={openRadOwnOtherRadNotes}
        >
          <div className="view-other-radiologists-notes-frame">
            <div className="view-report">View Other Radiologist’s Notes</div>
          </div>
        </div>
        <b className="annotations-by-other2">
          Annotations by other Radiologists
        </b>
        <div className="rad-own-diag-comp-inner3" onClick={viewReportNav}>
          <div className="view-report-wrapper" onClick={viewReportNav}>
            <div className="view-report" onClick={viewReportNav}>View Report</div>
          </div>
        </div>
        <div className="rad-own-diag-comp-child3" />
        <div className="rad-own-diag-comp-child4" />
        <img
          className="rad-own-diag-comp-child5"
          alt=""
          src="/rectangle-5913.svg"
        />
        <img className="rad-own-diag-comp-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-own-diag-comp-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-own-diag-comp-child8" />
        <div className="rad-own-diag-comp-inner4" onClick={viewOtherRadNav}>
          <div className="view-other-radiologists-detai-frame">
            <div className="view-report" onClick={viewOtherRadNav}>View Other Radiologist’s Details</div>
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
      {isRadOwnDocNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnDocNotes}
        >
          <RadOwnDocNotes onClose={closeRadOwnDocNotes} />
        </PortalPopup>
      )}
      {isRadOwnNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnNotes}
        >
          <RadOwnNotes onClose={closeRadOwnNotes} />
        </PortalPopup>
      )}
      {isRadOwnOtherRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnOtherRadNotes}
        >
          <RadOwnOtherRadNotes onClose={closeRadOwnOtherRadNotes} />
        </PortalPopup>
      )}
    </>
  );
};

export default RadOwnDiagComp;
