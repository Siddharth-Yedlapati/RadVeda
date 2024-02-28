import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadConsDiagCompHist.css";

const RadConsDiagCompHist = () => {

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
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-diag-comp-hist">
        <div className="rad-cons-diag-comp-hist-child" />
        <img
          className="rad-cons-diag-comp-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing51">
          <img className="vector-icon228" alt="" src="/vector.svg" />
          <img className="vector-icon229" alt="" src="/vector.svg" />
          <img className="vector-icon230" alt="" />
          <div className="iconnotification-bing-child49" />
          <div className="div120">03</div>
        </div>
        <img className="need-help-icon51" alt="" src="/need-help.svg" />
        <div className="rad-cons-diag-comp-hist-inner" />
        <div className="rad-cons-diag-comp-hist-child1" />
        <div className="frame-parent64">
          <div className="group-wrapper142">
            <div className="view-doctors-notes-wrapper13">
              <div className="view-doctors-notes15">View Doctors’ Notes</div>
            </div>
          </div>
          <div className="frame-child441" />
          <b className="test-details25">Test Details</b>
          <div className="frame-child442" />
          <div className="frame-child443" />
          <div className="frame-child441" />
          <b className="original-image20">Original Image</b>
          <img className="xray1-1-icon23" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper143">
            <div className="view-personnel-info-wrapper19">
              <div className="view-doctors-notes15">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child445" />
          <div className="frame-child446" />
          <img className="frame-child447" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child448" alt="" src="/polygon-5.svg" />
          <img className="frame-child449" alt="" src="/polygon-6.svg" />
          <div className="frame-child450" />
          <img className="vector-icon231" alt="" />
          <img className="frame-child451" alt="" src="/rectangle-5907.svg" />
          <b className="annotations-by-radiologists5">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-19"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child452" />
          <div className="frame-child453" />
          <img className="frame-child454" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child455" alt="" src="/polygon-5.svg" />
          <img className="frame-child456" alt="" src="/polygon-6.svg" />
          <div className="frame-child457" />
        </div>
        <div className="rad-cons-diag-comp-hist-inner1">
          <div className="view-report-wrapper4">
            <div className="view-doctors-notes15">View Report</div>
          </div>
        </div>
        <div
          className="rad-cons-diag-comp-hist-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper62">
            <div className="view-doctors-notes15">Back</div>
          </div>
        </div>
        <div className="rad-cons-diag-comp-hist-inner3">
          <div className="view-radiologists-notes-wrapper11">
            <div className="view-doctors-notes15">View Radiologist’s Notes</div>
          </div>
        </div>
        <div className="rad-cons-diag-comp-hist-inner4">
          <div className="view-radiologists-details-wrapper11">
            <div className="view-doctors-notes15">
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

export default RadConsDiagCompHist;
