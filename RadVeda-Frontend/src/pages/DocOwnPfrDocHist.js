import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocOwnPfrDocHist.css";

const DocOwnPfrDocHist = () => {
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
      <div className="doc-own-pfr-doc-hist">
        <div className="doc-own-pfr-doc-hist-child" />
        <img className="vector-icon137" alt="" />
        <img
          className="doc-own-pfr-doc-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing31">
          <img className="vector-icon138" alt="" src="/vector.svg" />
          <img className="vector-icon139" alt="" src="/vector.svg" />
          <img className="vector-icon140" alt="" />
          <div className="iconnotification-bing-child29" />
          <div className="div63">03</div>
        </div>
        <img className="need-help-icon31" alt="" src="/need-help.svg" />
        <div className="doc-own-pfr-doc-hist-inner" />
        <div className="doc-own-pfr-doc-hist-child1" />
        <div className="rectangle-parent16">
          <div className="frame-child285" />
          <b className="annotated-image6">Annotated Image</b>
          <div className="frame-child286" />
          <b className="test-details17">Test Details</b>
          <div className="frame-child287" />
          <div className="frame-child288" />
          <div className="frame-child286" />
          <b className="original-image15">Original Image</b>
          <img className="xray1-1-icon15" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon9"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child290" />
          <div className="frame-child291" />
          <img className="frame-child292" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child293" alt="" src="/polygon-5.svg" />
          <img className="frame-child294" alt="" src="/polygon-6.svg" />
          <div className="frame-child295" />
          <div className="frame-child296" />
          <div className="frame-child297" />
          <img className="frame-child298" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child299" alt="" src="/polygon-5.svg" />
          <img className="frame-child300" alt="" src="/polygon-6.svg" />
          <div className="frame-child301" />
          <div className="group-wrapper78">
            <div className="view-radiologists-notes-wrapper7">
              <div className="view-radiologists-notes9">
                View Radiologist’s Impressions
              </div>
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-doc-hist-inner1">
          <div className="back-wrapper38">
            <div className="view-radiologists-notes9">Back</div>
          </div>
        </div>
        <div className="doc-own-pfr-doc-hist-inner2">
          <div className="view-doctors-notes-wrapper8">
            <div className="view-radiologists-notes9">View Doctor’s Impressions</div>
          </div>
        </div>
        <div className="doc-own-pfr-doc-hist-inner3">
          <div className="view-personnel-info-wrapper13">
            <div className="view-radiologists-notes9">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-own-pfr-doc-hist-inner4">
          <div className="view-radiologists-details-wrapper7">
            <div className="view-radiologists-notes9">
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

export default DocOwnPfrDocHist;
