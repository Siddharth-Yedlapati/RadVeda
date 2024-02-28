import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import "./DocConsPfrDocHist.css";

const DocConsPfrDocHist = () => {

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
    navigate("/doc-login-page");
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
      <div className="doc-cons-pfr-doc-hist">
        <div className="doc-cons-pfr-doc-hist-child" />
        <img className="vector-icon101" alt="" />
        <img
          className="doc-cons-pfr-doc-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing22">
          <img className="vector-icon102" alt="" src="/vector.svg" />
          <img className="vector-icon103" alt="" src="/vector.svg" />
          <img className="vector-icon104" alt="" />
          <div className="iconnotification-bing-child20" />
          <div className="div48">03</div>
        </div>
        <img className="need-help-icon22" alt="" src="/need-help.svg" />
        <div className="doc-cons-pfr-doc-hist-inner" />
        <div className="doc-cons-pfr-doc-hist-child1" />
        <div className="rectangle-parent12">
          <div className="frame-child176" />
          <b className="annotated-image2">Annotated Image</b>
          <div className="frame-child177" />
          <b className="test-details11">Test Details</b>
          <div className="frame-child178" />
          <div className="frame-child179" />
          <div className="frame-child177" />
          <b className="original-image9">Original Image</b>
          <img className="xray1-1-icon9" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon5"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child181" />
          <div className="frame-child182" />
          <img className="frame-child183" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child184" alt="" src="/polygon-5.svg" />
          <img className="frame-child185" alt="" src="/polygon-6.svg" />
          <div className="frame-child186" />
          <div className="frame-child187" />
          <div className="frame-child188" />
          <img className="frame-child189" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child190" alt="" src="/polygon-5.svg" />
          <img className="frame-child191" alt="" src="/polygon-6.svg" />
          <div className="frame-child192" />
          <div className="group-wrapper66">
            <div className="view-radiologists-notes-wrapper3">
              <div className="view-radiologists-notes5">
                View Radiologist’s Notes
              </div>
            </div>
          </div>
        </div>
        <div className="doc-cons-pfr-doc-hist-inner1">
          <div className="back-wrapper25">
            <div className="view-radiologists-notes5">Back</div>
          </div>
        </div>
        <div className="doc-cons-pfr-doc-hist-inner2">
          <div className="view-doctors-notes-wrapper5">
            <div className="view-radiologists-notes5">View Doctors’ notes</div>
          </div>
        </div>
        <div className="doc-cons-pfr-doc-hist-inner3">
          <div className="view-personnel-info-wrapper7">
            <div className="view-radiologists-notes5">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-cons-pfr-doc-hist-inner4">
          <div className="view-radiologists-details-wrapper3">
            <div className="view-radiologists-notes5">
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

export default DocConsPfrDocHist;
