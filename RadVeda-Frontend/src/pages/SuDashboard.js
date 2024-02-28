import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./SuDashboard.css";

const SuDashboard = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/su-login-page");
      })
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/su-review-modification");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/su-review-deletion");
  }, [navigate]);

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/su-view-admins");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/su-review-signup");
  }, [navigate]);

  return (
    <>
      <div className="su-dashboard">
        <div className="su-dashboard-inner" onClick={onFrameContainerClick}>
          <div className="review-account-modification-re-wrapper">
            <div className="review-account-modification">{`review Account Modification Requests `}</div>
          </div>
        </div>
        <div className="su-dashboard-child" onClick={onFrameContainer1Click}>
          <div className="review-account-deletion-reques-wrapper">
            <div className="review-account-modification">
              Review Account Deletion Requests
            </div>
          </div>
        </div>
        <div className="group-parent2">
          <div className="rectangle-wrapper">
            <div className="group-child" />
          </div>
          <div className="frame-child5" />
          <div className="clear-all">clear all</div>
        </div>
        <img className="vector-icon13" alt="" />
        <img
          className="su-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing2">
          <img className="vector-icon14" alt="" src="/vector.svg" />
          <img className="vector-icon15" alt="" src="/vector.svg" />
          <img className="vector-icon16" alt="" />
          <div className="iconnotification-bing-inner" />
          <div className="div5">03</div>
        </div>
        <img className="need-help-icon2" alt="" src="/need-help.svg" />
        <div className="su-dashboard-child1" />
        <div className="good-morning-super-admin1-parent">
          <div className="good-morning-super-container">
            <span>Good Morning</span>
            <b className="super-admin1"> Super Admin1</b>
          </div>
          <div className="group-frame">
            <div className="notifications-wrapper">
              <div className="review-account-modification">Notifications</div>
            </div>
          </div>
          <div className="group-wrapper1" onClick={onFrameContainer12Click}>
            <div className="notifications-wrapper">
              <div className="review-account-modification">View Admins</div>
            </div>
          </div>
          <div className="group-wrapper2" onClick={onFrameContainer2Click}>
            <div className="review-signup-requests-wrapper">
              <div className="review-account-modification">{`review signup requests `}</div>
            </div>
          </div>
        </div>
        <div className="su-dashboard-child2" />
        <div className="admin-john-doe">
          Admin John Doe, registered today 2:39 pm
        </div>
        <div className="su-dashboard-child3" />
        <div className="su-dashboard-child4" />
        <img className="line-icon" alt="" />
        <img className="su-dashboard-child5" alt="" />
        <img className="su-dashboard-child6" alt="" />
        <img className="su-dashboard-child7" alt="" />
        <div className="su-dashboard-child8" />
        <div className="statistics">Statistics</div>
        <div className="patients-online-555">patients online: 555</div>
        <div className="patients-enrolled-today">
          patients Enrolled Today: 297
        </div>
        <div className="total-patients-2587">Total Patients: 2587</div>
        <div className="doctors-onboard-857">Doctors Onboard: 857</div>
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

export default SuDashboard;
