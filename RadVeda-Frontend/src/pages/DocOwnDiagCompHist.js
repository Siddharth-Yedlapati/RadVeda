import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocOwnDiagCompHist.css";

const DocOwnDiagCompHist = () => {
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
      <div className="doc-own-diag-comp-hist">
        <div className="doc-own-diag-comp-hist-child" />
        <img className="vector-icon141" alt="" />
        <img
          className="doc-own-diag-comp-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing32">
          <img className="vector-icon142" alt="" src="/vector.svg" />
          <img className="vector-icon143" alt="" src="/vector.svg" />
          <img className="vector-icon144" alt="" />
          <div className="iconnotification-bing-child30" />
          <div className="div64">03</div>
        </div>
        <img className="need-help-icon32" alt="" src="/need-help.svg" />
        <div className="doc-own-diag-comp-hist-inner" />
        <div className="doc-own-diag-comp-hist-child1" />
        <div className="rectangle-parent17">
          <div className="frame-child302" />
          <b className="annotated-image7">Annotated Image</b>
          <div className="frame-child303" />
          <b className="test-details18">Test Details</b>
          <div className="frame-child304" />
          <div className="frame-child305" />
          <div className="frame-child303" />
          <b className="original-image16">Original Image</b>
          <img className="xray1-1-icon16" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon10"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child307" />
          <div className="frame-child308" />
          <img className="frame-child309" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child310" alt="" src="/polygon-5.svg" />
          <img className="frame-child311" alt="" src="/polygon-6.svg" />
          <div className="frame-child312" />
          <div className="frame-child313" />
          <div className="frame-child314" />
          <img className="frame-child315" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child316" alt="" src="/polygon-5.svg" />
          <img className="frame-child317" alt="" src="/polygon-6.svg" />
          <div className="frame-child318" />
          <div className="group-wrapper79">
            <div className="view-radiologists-notes-wrapper8">
              <div className="view-radiologists-notes10">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
        </div>
        <div className="doc-own-diag-comp-hist-inner1">
          <div className="back-wrapper39">
            <div className="view-radiologists-notes10">Back</div>
          </div>
        </div>
        <div className="doc-own-diag-comp-hist-inner2">
          <div className="view-doctors-notes-wrapper9">
            <div className="view-radiologists-notes10">View doctors’ notes</div>
          </div>
        </div>
        <div className="doc-own-diag-comp-hist-inner3">
          <div className="view-personnel-info-wrapper14">
            <div className="view-radiologists-notes10">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-own-diag-comp-hist-inner4">
          <div className="view-report-wrapper3">
            <div className="view-radiologists-notes10">View Report</div>
          </div>
        </div>
        <div className="doc-own-diag-comp-hist-inner5">
          <div className="view-radiologists-details-wrapper8">
            <div className="view-radiologists-notes10">
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

export default DocOwnDiagCompHist;
