import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./LabStaffDashboard.css";

const LabStaffDashboard = () => {

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

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/labstaff-test-pending");
  }, [navigate]);

  const onNotifyPatient = useCallback(() => {
    navigate("/labstaff-test-pending");
  }, [navigate]);

  return (
    <>
      <div className="labstaff-dashboard">
        <div className="labstaff-dashboard-child" />
        <img className="vector-icon8" alt="" />
        <img
          className="labstaff-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing1">
          <img className="vector-icon9" alt="" src="/vector.svg" />
          <img className="vector-icon10" alt="" src="/vector.svg" />
          <img className="vector-icon11" alt="" />
          <div className="iconnotification-bing-item" />
          <div className="div1">03</div>
        </div>
        <img className="need-help-icon1" alt="" src="/need-help.svg" />
        <div className="labstaff-dashboard-inner" />
        <div className="labstaff-dashboard-child1" />
        <div className="frame-parent">
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="good-morning-john-container">
            <span>Good Morning</span>
            <b className="john-doe">
              <span className="span">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div className="frame-parent">
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="good-morning-john-container">
            <span>Good Morning</span>
            <b className="john-doe">
              <span className="span">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div className="patient-id-parent">
          <div className="patient-id">Patient ID</div>
          <div className="frame-inner" />
          <div className="frame-container">
            <div className="group-parent" onClick={onFrameContainerClick}>
              <div className="mri-wrapper">
                <div className="mri">MRI</div>
              </div>
              <div className="remark1">Remark1</div>
              <div className="group-wrapper">
                <div className="notify-patient-wrapper">
                  <div className="notify-patient"> Notify Patient</div>
                </div>
              </div>
            </div>
            <div className="group-container">
              <div className="ct-scan-wrapper">
                <div className="mri">CT Scan</div>
              </div>
              <div className="remark2">Remark2</div>
            </div>
            <div className="test-type-parent">
              <div className="mri">Test Type</div>
              <div className="parent">
                <div className="div2">04/10/2023</div>
                <div className="div3">25/09/2023</div>
                <div className="div4">21/09/2023</div>
                <div className="date-prescribed">Date Prescribed</div>
              </div>
              <div className="status">Status</div>
              <div className="remarks-given-by">Remarks given by doctor</div>
            </div>
          </div>
          <div className="group-parent1">
            <div className="x-ray-wrapper">
              <div className="mri">X-Ray</div>
            </div>
            <div className="remark3">Remark3</div>
          </div>
          <div className="test-pending-parent">
            <div className="test-pending">Test Pending</div>
            <div className="patient-not-notified">Patient not notified</div>
            <div className="test-completed">Test Completed</div>
          </div>
          <div className="id1">ID1</div>
          <b className="test-details1">Test Details</b>
          <div className="id2">ID2</div>
          <div className="id3">ID3</div>
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

export default LabStaffDashboard;
