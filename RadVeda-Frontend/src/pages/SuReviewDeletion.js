import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./SuReviewDeletion.css";

const SuReviewDeletion = () => {

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
    navigate("/su-login-page");
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/su-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="su-review-deletion">
        <div className="su-review-deletion-child" />
        <img className="vector-icon21" alt="" />
        <img
          className="su-review-deletion-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing4">
          <img className="vector-icon22" alt="" src="/vector.svg" />
          <img className="vector-icon23" alt="" src="/vector.svg" />
          <img className="vector-icon24" alt="" />
          <div className="iconnotification-bing-child2" />
          <div className="div10">03</div>
        </div>
        <img className="need-help-icon4" alt="" src="/need-help.svg" />
        <div className="su-review-deletion-inner" />
        <div className="su-review-deletion-child1" />
        <div className="frame-parent3">
          <div className="frame-child11" />
          <div className="account-deletion-requests-parent">
            <b className="account-deletion-requests-container">
              <p className="account-deletion-requests">
                Account Deletion Requests
              </p>
            </b>
            <div className="frame-child12" />
            <div className="frame-child13" />
            <div className="info-container">
              <div className="info1">Info</div>
            </div>
            <div className="frame-parent4">
              <div className="group-parent6">
                <div className="admin1-group">
                  <div className="admin11">Admin1</div>
                  <div className="uk1">uk</div>
                </div>
                <div className="rectangle-container">
                  <div className="group-child3" />
                  <img
                    className="group-child4"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <div className="div11">03/10/2018</div>
              </div>
              <div className="group-parent7">
                <div className="admin2-group">
                  <div className="admin11">Admin2</div>
                  <div className="uk1">uSA</div>
                </div>
                <img className="frame-child14" alt="" src="/group-236783.svg" />
              </div>
              <div className="group-parent8">
                <div className="admin3-group">
                  <div className="admin11">Admin3</div>
                  <div className="uk1">USA</div>
                </div>
                <div className="group-wrapper9">
                  <div className="rectangle-container">
                    <div className="group-child5" />
                    <img
                      className="group-child6"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
                <div className="div12">06/07/2022</div>
              </div>
              <div className="name-container">
                <div className="name1">Name</div>
              </div>
              <div className="frame-child15" />
            </div>
            <div className="div13">05/09/2023</div>
            <div className="frame-child16" />
            <div className="documents-group">
              <div className="admin11">Documents</div>
              <div className="male-group">
                <div className="male2">Male</div>
                <div className="female1">Female</div>
                <div className="male3">Male</div>
                <div className="gender1">Gender</div>
              </div>
            </div>
            <div className="date-of-signup1">Date of Signup</div>
            <div className="group-wrapper10">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
            <div className="group-wrapper11">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
            <div className="group-wrapper12">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
            <div className="group-wrapper13">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
            <div className="group-wrapper14">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
            <div className="group-wrapper15">
              <div className="view-wrapper4">
                <div className="view6">View</div>
              </div>
            </div>
          </div>
          <div className="content22">
            <div className="magnifyingglass2">
              <div className="magnifyingglass3">􀊫</div>
            </div>
            <div className="placeholder-label1">Search</div>
            <img className="mic-icon1" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="su-review-deletion-inner1">
          <div className="accept-wrapper1">
            <div className="view6">Accept</div>
          </div>
        </div>
        <div className="su-review-deletion-inner2">
          <div className="accept-wrapper1">
            <div className="view6">Accept</div>
          </div>
        </div>
        <div className="su-review-deletion-inner3">
          <div className="decline-wrapper1">
            <div className="view6">Decline</div>
          </div>
        </div>
        <div className="su-review-deletion-inner4">
          <div className="decline-wrapper1">
            <div className="view6">Decline</div>
          </div>
        </div>
        <div className="su-review-deletion-inner5">
          <div className="decline-wrapper1">
            <div className="view6">Decline</div>
          </div>
        </div>
        <div className="su-review-deletion-child2" />
        <div className="su-review-deletion-inner6">
          <div className="accept-wrapper1">
            <div className="view6">Accept</div>
          </div>
        </div>
        <div
          className="su-review-deletion-inner7"
          onClick={onFrameContainer7Click}
        >
          <div className="view-wrapper4">
            <div className="view6">Back</div>
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

export default SuReviewDeletion;
