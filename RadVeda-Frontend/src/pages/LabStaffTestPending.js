import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./LabStaffTestPending.css";

const LabStaffTestPending = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/labstaff-login-page");
      })
  }
  else
  {
    navigate("/labstaff-login-page");
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/labstaff-dashboard");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/labstaff-remarks-upload");
  }, [navigate]);

  return (
    <>
      <div className="labstaff-test-pending">
        <div className="labstaff-test-pending-child" />
        <img className="vector-icon4" alt="" />
        <img
          className="labstaff-test-pending-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing">
          <img className="vector-icon5" alt="" src="/vector.svg" />
          <img className="vector-icon6" alt="" src="/vector.svg" />
          <img className="vector-icon7" alt="" />
          <div className="iconnotification-bing-child" />
          <div className="div">03</div>
        </div>
        <img className="need-help-icon" alt="" src="/need-help.svg" />
        <div className="labstaff-test-pending-inner" />
        <div className="frame-div" />
        <div className="test-details-parent">
          <b className="test-details">Test Details</b>
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
        <div
          className="labstaff-test-pending-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper">
            <div className="upload-remarks">Back</div>
          </div>
        </div>
        <div
          className="labstaff-test-pending-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="upload-remarks-wrapper">
            <div className="upload-remarks">Upload Remarks</div>
          </div>
        </div>
        <div className="labstaff-test-pending-inner3">
          <div className="upload-images-wrapper">
            <div className="upload-remarks">Upload Images</div>
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

export default LabStaffTestPending;
