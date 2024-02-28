import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocConsDiagCompHist.css";

const DocConsDiagCompHist = () => {
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
      <div className="doc-cons-diag-comp-hist">
        <div className="doc-cons-diag-comp-hist-child" />
        <img className="vector-icon105" alt="" />
        <img
          className="doc-cons-diag-comp-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing23">
          <img className="vector-icon106" alt="" src="/vector.svg" />
          <img className="vector-icon107" alt="" src="/vector.svg" />
          <img className="vector-icon108" alt="" />
          <div className="iconnotification-bing-child21" />
          <div className="div49">03</div>
        </div>
        <img className="need-help-icon23" alt="" src="/need-help.svg" />
        <div className="doc-cons-diag-comp-hist-inner" />
        <div className="doc-cons-diag-comp-hist-child1" />
        <div className="rectangle-parent13">
          <div className="frame-child193" />
          <b className="annotated-image3">Annotated Image</b>
          <div className="frame-child194" />
          <b className="test-details12">Test Details</b>
          <div className="frame-child195" />
          <div className="frame-child196" />
          <div className="frame-child194" />
          <b className="original-image10">Original Image</b>
          <img className="xray1-1-icon10" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon6"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child198" />
          <div className="frame-child199" />
          <img className="frame-child200" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child201" alt="" src="/polygon-5.svg" />
          <img className="frame-child202" alt="" src="/polygon-6.svg" />
          <div className="frame-child203" />
          <div className="frame-child204" />
          <div className="frame-child205" />
          <img className="frame-child206" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child207" alt="" src="/polygon-5.svg" />
          <img className="frame-child208" alt="" src="/polygon-6.svg" />
          <div className="frame-child209" />
          <div className="group-wrapper67">
            <div className="view-radiologists-notes-wrapper4">
              <div className="view-radiologists-notes6">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
        </div>
        <div className="doc-cons-diag-comp-hist-inner1">
          <div className="back-wrapper26">
            <div className="view-radiologists-notes6">Back</div>
          </div>
        </div>
        <div className="doc-cons-diag-comp-hist-inner2">
          <div className="view-doctors-notes-wrapper6">
            <div className="view-radiologists-notes6">View doctors’ notes</div>
          </div>
        </div>
        <div className="doc-cons-diag-comp-hist-inner3">
          <div className="view-personnel-info-wrapper8">
            <div className="view-radiologists-notes6">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-cons-diag-comp-hist-inner4">
          <div className="view-report-wrapper1">
            <div className="view-radiologists-notes6">View Report</div>
          </div>
        </div>
        <div className="doc-cons-diag-comp-hist-inner5">
          <div className="view-radiologists-details-wrapper4">
            <div className="view-radiologists-notes6">
              View Radiologist’s Details
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
    </>
  );
};

export default DocConsDiagCompHist;
