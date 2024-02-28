import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnDiagCompHist.css";

const RadOwnDiagCompHist = () => {

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
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-diag-comp-hist">
        <div className="rad-own-diag-comp-hist-child" />
        <img
          className="rad-own-diag-comp-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing15">
          <img className="vector-icon69" alt="" src="/vector.svg" />
          <img className="vector-icon70" alt="" src="/vector.svg" />
          <img className="vector-icon71" alt="" />
          <div className="iconnotification-bing-child13" />
          <div className="div35">03</div>
        </div>
        <img className="need-help-icon15" alt="" src="/need-help.svg" />
        <div className="rad-own-diag-comp-hist-inner" />
        <div className="rad-own-diag-comp-hist-child1" />
        <div className="frame-parent22">
          <div className="group-wrapper51">
            <div className="view-doctors-notes-wrapper3">
              <div className="view-doctors-notes5">View Doctors’ Notes</div>
            </div>
          </div>
          <div className="frame-child108" />
          <b className="test-details7">Test Details</b>
          <div className="frame-child109" />
          <div className="frame-child110" />
          <div className="frame-child108" />
          <b className="original-image5">Original Image</b>
          <img className="xray1-1-icon5" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper52">
            <div className="view-personnel-info-wrapper3">
              <div className="view-doctors-notes5">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child112" />
          <div className="frame-child113" />
          <img className="frame-child114" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child115" alt="" src="/polygon-5.svg" />
          <img className="frame-child116" alt="" src="/polygon-6.svg" />
          <div className="frame-child117" />
          <img className="vector-icon72" alt="" />
          <img className="frame-child118" alt="" src="/rectangle-5907.svg" />
          <b className="annotations-by-radiologists2">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-15"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child119" />
          <div className="frame-child120" />
          <img className="frame-child121" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child122" alt="" src="/polygon-5.svg" />
          <img className="frame-child123" alt="" src="/polygon-6.svg" />
          <div className="frame-child124" />
        </div>
        <div className="rad-own-diag-comp-hist-inner1">
          <div className="view-report-container">
            <div className="view-doctors-notes5">View Report</div>
          </div>
        </div>
        <div
          className="rad-own-diag-comp-hist-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper19">
            <div className="view-doctors-notes5">Back</div>
          </div>
        </div>
        <div className="rad-own-diag-comp-hist-inner3">
          <div className="view-radiologists-notes-frame">
            <div className="view-doctors-notes5">View Radiologist’s Notes</div>
          </div>
        </div>
        <div className="rad-own-diag-comp-hist-inner4">
          <div className="view-radiologists-details-frame">
            <div className="view-doctors-notes5">
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

export default RadOwnDiagCompHist;
