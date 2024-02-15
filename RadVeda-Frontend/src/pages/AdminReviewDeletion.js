import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminReviewDeletion.css";

const AdminReviewDeletion = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="admin-review-deletion">
        <div className="admin-review-deletion-child" />
        <img className="vector-icon192" alt="" />
        <img
          className="admin-review-deletion-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing43">
          <img className="vector-icon193" alt="" src="/vector.svg" />
          <img className="vector-icon194" alt="" src="/vector.svg" />
          <img className="vector-icon195" alt="" />
          <div className="iconnotification-bing-child41" />
          <div className="div95">03</div>
        </div>
        <img className="need-help-icon43" alt="" src="/need-help.svg" />
        <div className="admin-review-deletion-inner" />
        <div className="admin-review-deletion-child1" />
        <div className="frame-parent48">
          <div className="frame-child374" />
          <div className="frame-child375" />
          <div className="account-deletion-requests-group">
            <b className="account-deletion-requests1">
              Account Deletion requests
            </b>
            <div className="frame-child374" />
            <div className="frame-child377" />
            <div className="info-parent2">
              <div className="info9">Info</div>
              <div className="group-wrapper124">
                <div className="view-wrapper52">
                  <div className="view54">View</div>
                </div>
              </div>
              <div className="group-wrapper125">
                <div className="view-wrapper52">
                  <div className="view54">View</div>
                </div>
              </div>
              <div className="group-wrapper126">
                <div className="view-wrapper52">
                  <div className="view54">View</div>
                </div>
              </div>
            </div>
            <div className="frame-parent49">
              <div className="group-parent73">
                <div className="doctor1-parent2">
                  <div className="doctor15">Doctor1</div>
                  <div className="uk14">uk</div>
                </div>
                <div className="rectangle-parent29">
                  <div className="group-child54" />
                  <img
                    className="group-child55"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
              </div>
              <div className="group-parent74">
                <div className="radiologist-1-parent1">
                  <div className="doctor15">Radiologist 1</div>
                  <div className="uk14">uSA</div>
                </div>
                <img
                  className="frame-child378"
                  alt=""
                  src="/group-236783.svg"
                />
                <div className="radiologist8">Radiologist</div>
              </div>
              <div className="group-parent75">
                <div className="doctor-2-parent2">
                  <div className="doctor15">Doctor 2</div>
                  <div className="uk14">USA</div>
                </div>
                <div className="frame-child378">
                  <div className="rectangle-parent29">
                    <div className="group-child56" />
                    <img
                      className="group-child57"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="name-parent1">
                <div className="name5">Name</div>
                <div className="role-container">
                  <div className="role2">Role</div>
                  <div className="doctor10">Doctor</div>
                  <div className="doctor16">Doctor</div>
                </div>
              </div>
              <div className="yrs-parent4">
                <div className="yrs18">13 yrs</div>
                <div className="yrs19">22 yrs</div>
                <div className="yrs20">3 yrs</div>
                <div className="experience6">experience</div>
              </div>
            </div>
            <div className="frame-wrapper7">
              <div className="documents-wrapper3">
                <div className="doctor15">Documents</div>
              </div>
            </div>
          </div>
          <div className="male-parent9">
            <div className="yrs18">Male</div>
            <div className="female14">Female</div>
            <div className="male29">Male</div>
            <div className="gender14">Gender</div>
          </div>
          <div className="content114">
            <div className="magnifyingglass22">
              <div className="magnifyingglass23">􀊫</div>
            </div>
            <div className="placeholder-label11">Search</div>
            <img className="mic-icon12" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="admin-review-deletion-inner1">
          <div className="accept-wrapper13">
            <div className="view54">Accept</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner2">
          <div className="accept-wrapper13">
            <div className="view54">Accept</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner3">
          <div className="decline-wrapper13">
            <div className="view54">Decline</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner4">
          <div className="decline-wrapper13">
            <div className="view54">Decline</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner5">
          <div className="decline-wrapper13">
            <div className="view54">Decline</div>
          </div>
        </div>
        <div className="parent8">
          <div className="yrs18">03/10/2018</div>
          <div className="yrs19">05/09/2023</div>
          <div className="div98">06/07/2022</div>
          <div className="date-of-signup5">Date of Signup</div>
        </div>
        <div className="admin-review-deletion-inner6">
          <div className="accept-wrapper13">
            <div className="view54">Accept</div>
          </div>
        </div>
        <div
          className="admin-review-deletion-inner7"
          onClick={onFrameContainer8Click}
        >
          <div className="view-wrapper52">
            <div className="view54">Back</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner8">
          <div className="view-wrapper52">
            <div className="view54">View</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner9">
          <div className="view-wrapper52">
            <div className="view54">View</div>
          </div>
        </div>
        <div className="admin-review-deletion-inner10">
          <div className="view-wrapper52">
            <div className="view54">View</div>
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

export default AdminReviewDeletion;
