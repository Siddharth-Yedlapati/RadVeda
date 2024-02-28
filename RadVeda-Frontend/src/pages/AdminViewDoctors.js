import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./AdminViewDoctors.css";

const AdminViewDoctors = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/admin-login-page");
      })
  }
  else
  {
    navigate("/admin-login-page");
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
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="admin-view-doctors">
        <div className="admin-view-doctors-child" />
        <img className="vector-icon172" alt="" />
        <img
          className="admin-view-doctors-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing38">
          <img className="vector-icon173" alt="" src="/vector.svg" />
          <img className="vector-icon174" alt="" src="/vector.svg" />
          <img className="vector-icon175" alt="" />
          <div className="iconnotification-bing-child36" />
          <div className="div84">03</div>
        </div>
        <img className="need-help-icon38" alt="" src="/need-help.svg" />
        <div className="admin-view-doctors-inner" />
        <div className="admin-view-doctors-child1" />
        <div className="frame-parent38">
          <div className="frame-child353" />
          <div className="doctors-list-parent">
            <b className="doctors-list">{`Doctors List `}</b>
            <div className="frame-parent39">
              <div className="group-parent58">
                <div className="doctor1-parent">
                  <div className="doctor12">Doctor1</div>
                  <div className="uk9">uk</div>
                </div>
                <div className="rectangle-parent19">
                  <div className="group-child34" />
                  <img
                    className="group-child35"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <img className="frame-child354" alt="" />
              </div>
              <div className="group-parent59">
                <div className="doctor-2-group">
                  <div className="doctor12">Doctor 2</div>
                  <div className="uk9">uSA</div>
                </div>
                <img
                  className="frame-child355"
                  alt=""
                  src="/group-236783.svg"
                />
              </div>
              <div className="group-parent60">
                <div className="doctor-3-group">
                  <div className="doctor12">Doctor 3</div>
                  <div className="uk9">USA</div>
                </div>
                <div className="frame-child355">
                  <div className="rectangle-parent19">
                    <div className="group-child36" />
                    <img
                      className="group-child37"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="doctor-name-container">
                <div className="doctor12">doctor Name</div>
                <div className="yrs-group">
                  <div className="yrs3">13 yrs</div>
                  <div className="yrs4">22 yrs</div>
                  <div className="yrs5">3 yrs</div>
                  <div className="experience1">experience</div>
                </div>
              </div>
            </div>
            <div className="info4">Info</div>
            <div className="group-wrapper89">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
            <div className="group-wrapper90">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
            <div className="group-wrapper91">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
            <div className="documents-frame">
              <div className="doctor12">Documents</div>
            </div>
            <div className="group-wrapper92">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
            <div className="group-wrapper93">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
            <div className="group-wrapper94">
              <div className="view-wrapper22">
                <div className="view24">View</div>
              </div>
            </div>
          </div>
          <div className="male-parent4">
            <div className="yrs3">Male</div>
            <div className="yrs4">Female</div>
            <div className="yrs5">Male</div>
            <div className="experience1">Gender</div>
          </div>
          <div className="content109">
            <div className="magnifyingglass12">
              <div className="magnifyingglass13">􀊫</div>
            </div>
            <div className="placeholder-label6">Search</div>
            <img className="mic-icon7" alt="" src="/-mic.svg" />
          </div>
          <div className="group-wrapper95" onClick={onFrameContainer2Click}>
            <div className="view-wrapper22">
              <div className="view24">Back</div>
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

export default AdminViewDoctors;
