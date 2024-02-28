import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./SuViewAdmins.css";

const SuViewAdmins = () => {
  const navigate = useNavigate();

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
  else
  {
    useEffect(() => {navigate("/su-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/su-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="su-view-admins">
        <div className="su-view-admins-child" />
        <img className="vector-icon29" alt="" />
        <img
          className="su-view-admins-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing6">
          <img className="vector-icon30" alt="" src="/vector.svg" />
          <img className="vector-icon31" alt="" src="/vector.svg" />
          <img className="vector-icon32" alt="" />
          <div className="iconnotification-bing-child4" />
          <div className="div18">03</div>
        </div>
        <img className="need-help-icon6" alt="" src="/need-help.svg" />
        <div className="su-view-admins-inner" />
        <div className="su-view-admins-child1" />
        <div className="frame-parent7">
          <div className="frame-child23" />
          <div className="admin-list-parent">
            <b className="admin-list">Admin List</b>
            <div className="frame-child24" />
            <div className="frame-parent8">
              <div className="group-parent12">
                <div className="admin1-parent1">
                  <div className="admin-name">Admin1</div>
                  <div className="uk3">uk</div>
                </div>
                <div className="rectangle-parent4">
                  <div className="group-child11" />
                  <img
                    className="group-child12"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <img className="frame-child25" alt="" />
              </div>
              <div className="group-parent13">
                <div className="admin2-parent1">
                  <div className="admin-name">Admin2</div>
                  <div className="uk3">uSA</div>
                </div>
                <img className="frame-child26" alt="" src="/group-236783.svg" />
              </div>
              <div className="group-parent14">
                <div className="admin3-parent1">
                  <div className="admin-name">Admin3</div>
                  <div className="uk3">USA</div>
                </div>
                <div className="frame-child26">
                  <div className="rectangle-parent4">
                    <div className="group-child13" />
                    <img
                      className="group-child14"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="admin-name-parent">
                <div className="admin-name">Admin Name</div>
                <div className="info-parent">
                  <div className="info3">Info</div>
                  <div className="group-wrapper24">
                    <div className="view-wrapper16">
                      <div className="view18">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper25">
                    <div className="view-wrapper16">
                      <div className="view18">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper26">
                    <div className="view-wrapper16">
                      <div className="view18">View</div>
                    </div>
                  </div>
                </div>
                <div className="yrs-parent">
                  <div className="yrs">13 yrs</div>
                  <div className="yrs1">22 yrs</div>
                  <div className="yrs2">3 yrs</div>
                  <div className="experience">experience</div>
                </div>
              </div>
              <div className="group-wrapper27">
                <div className="view-wrapper16">
                  <div className="view18">View</div>
                </div>
              </div>
              <div className="group-wrapper28">
                <div className="view-wrapper16">
                  <div className="view18">View</div>
                </div>
              </div>
              <div className="group-wrapper29">
                <div className="view-wrapper16">
                  <div className="view18">View</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="documents-wrapper">
                <div className="admin-name">Documents</div>
              </div>
            </div>
          </div>
          <div className="male-parent1">
            <div className="yrs">Male</div>
            <div className="yrs1">Female</div>
            <div className="yrs2">Male</div>
            <div className="experience">Gender</div>
          </div>
          <div className="content24">
            <div className="magnifyingglass6">
              <div className="magnifyingglass7">􀊫</div>
            </div>
            <div className="placeholder-label3">Search</div>
            <img className="mic-icon3" alt="" src="/-mic.svg" />
          </div>
          <div className="group-wrapper30" onClick={onFrameContainer2Click}>
            <div className="view-wrapper16">
              <div className="view18">Back</div>
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

export default SuViewAdmins;
