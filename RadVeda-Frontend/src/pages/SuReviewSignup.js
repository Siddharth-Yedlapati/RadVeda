import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SuReviewSignup.css";

const SuReviewSignup = () => {
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
      <div className="su-review-signup">
        <div className="su-review-signup-child" />
        <img className="vector-icon17" alt="" />
        <img
          className="su-review-signup-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing3">
          <img className="vector-icon18" alt="" src="/vector.svg" />
          <img className="vector-icon19" alt="" src="/vector.svg" />
          <img className="vector-icon20" alt="" />
          <div className="iconnotification-bing-child1" />
          <div className="div6">03</div>
        </div>
        <img className="need-help-icon3" alt="" src="/need-help.svg" />
        <div className="su-review-signup-inner" />
        <div className="su-review-signup-child1" />
        <div className="frame-parent1">
          <div className="frame-child6" />
          <div className="sign-up-requests-parent">
            <b className="sign-up-requests-container">
              <p className="sign-up-requests">Sign up requests</p>
            </b>
            <div className="frame-child7" />
            <div className="frame-child8" />
            <div className="info-wrapper">
              <div className="info">Info</div>
            </div>
            <div className="frame-parent2">
              <div className="group-parent3">
                <div className="admin1-parent">
                  <div className="documents">Admin1</div>
                  <div className="uk">uk</div>
                </div>
                <div className="rectangle-parent">
                  <div className="group-item" />
                  <img className="group-inner" alt="" src="/group-236802.svg" />
                </div>
                <div className="div7">03/10/2018</div>
              </div>
              <div className="group-parent4">
                <div className="admin2-parent">
                  <div className="documents">Admin2</div>
                  <div className="uk">uSA</div>
                </div>
                <img className="group-icon" alt="" src="/group-236783.svg" />
              </div>
              <div className="group-parent5">
                <div className="admin3-parent">
                  <div className="documents">Admin3</div>
                  <div className="uk">USA</div>
                </div>
                <div className="group-div">
                  <div className="rectangle-parent">
                    <div className="group-child1" />
                    <img
                      className="group-child2"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
                <div className="div8">06/07/2022</div>
              </div>
              <div className="name-wrapper">
                <div className="name">Name</div>
              </div>
              <div className="frame-child9" />
            </div>
            <div className="div9">05/09/2023</div>
            <div className="frame-child10" />
            <div className="documents-parent">
              <div className="documents">Documents</div>
              <div className="male-parent">
                <div className="male">Male</div>
                <div className="female">Female</div>
                <div className="male1">Male</div>
                <div className="gender">Gender</div>
              </div>
            </div>
            <div className="date-of-signup">Date of Signup</div>
            <div className="group-wrapper3">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
            <div className="group-wrapper4">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
            <div className="group-wrapper5">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
            <div className="group-wrapper6">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
            <div className="group-wrapper7">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
            <div className="group-wrapper8">
              <div className="view-wrapper">
                <div className="view">View</div>
              </div>
            </div>
          </div>
          <div className="content21">
            <div className="magnifyingglass">
              <div className="magnifyingglass1">􀊫</div>
            </div>
            <div className="placeholder-label">Search</div>
            <img className="mic-icon" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="su-review-signup-inner1">
          <div className="accept-wrapper">
            <div className="view">Accept</div>
          </div>
        </div>
        <div className="su-review-signup-inner2">
          <div className="accept-wrapper">
            <div className="view">Accept</div>
          </div>
        </div>
        <div className="su-review-signup-inner3">
          <div className="decline-wrapper">
            <div className="view">Decline</div>
          </div>
        </div>
        <div className="su-review-signup-inner4">
          <div className="decline-wrapper">
            <div className="view">Decline</div>
          </div>
        </div>
        <div className="su-review-signup-inner5">
          <div className="decline-wrapper">
            <div className="view">Decline</div>
          </div>
        </div>
        <div className="su-review-signup-child2" />
        <div className="su-review-signup-inner6">
          <div className="accept-wrapper">
            <div className="view">Accept</div>
          </div>
        </div>
        <div
          className="su-review-signup-inner7"
          onClick={onFrameContainer7Click}
        >
          <div className="view-wrapper">
            <div className="view">Back</div>
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

export default SuReviewSignup;
