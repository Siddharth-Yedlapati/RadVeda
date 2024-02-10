import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SuReviewModification.css";

const SuReviewModification = () => {
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
      <div className="su-review-modification">
        <div className="su-review-modification-child" />
        <img className="vector-icon25" alt="" />
        <img
          className="su-review-modification-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing5">
          <img className="vector-icon26" alt="" src="/vector.svg" />
          <img className="vector-icon27" alt="" src="/vector.svg" />
          <img className="vector-icon28" alt="" />
          <div className="iconnotification-bing-child3" />
          <div className="div14">03</div>
        </div>
        <img className="need-help-icon5" alt="" src="/need-help.svg" />
        <div className="su-review-modification-inner" />
        <div className="su-review-modification-child1" />
        <div className="frame-parent5">
          <div className="frame-child17" />
          <div className="account-modification-requests-parent">
            <b className="account-modification-requests-container">
              <p className="account-modification-requests">
                Account Modification requests
              </p>
            </b>
            <div className="frame-child18" />
            <div className="frame-child19" />
            <div className="info-frame">
              <div className="info2">Info</div>
            </div>
            <div className="frame-parent6">
              <div className="group-parent9">
                <div className="admin1-container">
                  <div className="admin12">Admin1</div>
                  <div className="uk2">uk</div>
                </div>
                <div className="rectangle-parent2">
                  <div className="group-child7" />
                  <img
                    className="group-child8"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <div className="div15">03/10/2018</div>
              </div>
              <div className="group-parent10">
                <div className="admin2-container">
                  <div className="admin12">Admin2</div>
                  <div className="uk2">uSA</div>
                </div>
                <img className="frame-child20" alt="" src="/group-236783.svg" />
              </div>
              <div className="group-parent11">
                <div className="admin3-container">
                  <div className="admin12">Admin3</div>
                  <div className="uk2">USA</div>
                </div>
                <div className="group-wrapper16">
                  <div className="rectangle-parent2">
                    <div className="group-child9" />
                    <img
                      className="group-child10"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
                <div className="div16">06/07/2022</div>
              </div>
              <div className="name-frame">
                <div className="name2">Name</div>
              </div>
              <div className="frame-child21" />
            </div>
            <div className="div17">05/09/2023</div>
            <div className="frame-child22" />
            <div className="documents-container">
              <div className="admin12">Documents</div>
              <div className="male-container">
                <div className="male4">Male</div>
                <div className="female2">Female</div>
                <div className="male5">Male</div>
                <div className="gender2">Gender</div>
              </div>
            </div>
            <div className="date-of-signup2">Date of Signup</div>
            <div className="group-wrapper17">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
            <div className="group-wrapper18">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
            <div className="group-wrapper19">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
            <div className="group-wrapper20">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
            <div className="group-wrapper21">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
            <div className="group-wrapper22">
              <div className="view-wrapper10">
                <div className="view12">View</div>
              </div>
            </div>
          </div>
          <div className="content23">
            <div className="magnifyingglass4">
              <div className="magnifyingglass5">􀊫</div>
            </div>
            <div className="placeholder-label2">Search</div>
            <img className="mic-icon2" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="su-review-modification-inner1">
          <div className="accept-wrapper4">
            <div className="view12">Accept</div>
          </div>
        </div>
        <div className="su-review-modification-inner2">
          <div className="accept-wrapper4">
            <div className="view12">Accept</div>
          </div>
        </div>
        <div className="su-review-modification-inner3">
          <div className="decline-wrapper4">
            <div className="view12">Decline</div>
          </div>
        </div>
        <div className="su-review-modification-inner4">
          <div className="decline-wrapper4">
            <div className="view12">Decline</div>
          </div>
        </div>
        <div className="su-review-modification-inner5">
          <div className="decline-wrapper4">
            <div className="view12">Decline</div>
          </div>
        </div>
        <div className="su-review-modification-child2" />
        <div className="su-review-modification-inner6">
          <div className="accept-wrapper4">
            <div className="view12">Accept</div>
          </div>
        </div>
        <div
          className="su-review-modification-inner7"
          onClick={onFrameContainer7Click}
        >
          <div className="view-wrapper10">
            <div className="view12">Back</div>
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

export default SuReviewModification;
