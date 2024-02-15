import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminReviewModifications.css";

const AdminReviewModifications = () => {
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
      <div className="admin-review-modifications">
        <div className="admin-review-modifications-child" />
        <img className="vector-icon188" alt="" />
        <img
          className="admin-review-modifications-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing42">
          <img className="vector-icon189" alt="" src="/vector.svg" />
          <img className="vector-icon190" alt="" src="/vector.svg" />
          <img className="vector-icon191" alt="" />
          <div className="iconnotification-bing-child40" />
          <div className="div91">03</div>
        </div>
        <img className="need-help-icon42" alt="" src="/need-help.svg" />
        <div className="admin-review-modifications-inner" />
        <div className="admin-review-modifications-child1" />
        <div className="frame-parent46">
          <div className="frame-child367" />
          <div className="frame-child368" />
          <div className="account-modification-requests-group">
            <b className="account-modification-requests1">
              Account Modification Requests
            </b>
            <div className="frame-child367" />
            <div className="frame-child370" />
            <div className="frame-child371" />
            <div className="frame-parent47">
              <div className="group-parent70">
                <div className="doctor1-parent1">
                  <div className="doctor14">Doctor1</div>
                  <div className="uk13">uk</div>
                </div>
                <div className="rectangle-parent27">
                  <div className="group-child50" />
                  <img
                    className="group-child51"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
              </div>
              <div className="group-parent71">
                <div className="radiologist-1-container">
                  <div className="doctor14">Radiologist 1</div>
                  <div className="uk13">uSA</div>
                </div>
                <img
                  className="frame-child372"
                  alt=""
                  src="/group-236783.svg"
                />
                <div className="radiologist7">Radiologist</div>
              </div>
              <div className="group-parent72">
                <div className="doctor-2-parent1">
                  <div className="doctor14">Doctor 2</div>
                  <div className="uk13">USA</div>
                </div>
                <div className="frame-child372">
                  <div className="rectangle-parent27">
                    <div className="group-child52" />
                    <img
                      className="group-child53"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="name-group">
                <div className="name4">Name</div>
                <div className="role-group">
                  <div className="role1">Role</div>
                  <div className="doctor8">Doctor</div>
                  <div className="doctor9">Doctor</div>
                </div>
              </div>
              <div className="yrs-parent3">
                <div className="yrs15">13 yrs</div>
                <div className="yrs16">22 yrs</div>
                <div className="yrs17">3 yrs</div>
                <div className="experience5">experience</div>
              </div>
            </div>
            <div className="frame-wrapper6">
              <div className="frame-child373" />
            </div>
            <div className="info8">Info</div>
            <div className="group-wrapper118">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
            <div className="group-wrapper119">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
            <div className="group-wrapper120">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
            <div className="documents-wrapper2">
              <div className="doctor14">Documents</div>
            </div>
            <div className="group-wrapper121">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
            <div className="group-wrapper122">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
            <div className="group-wrapper123">
              <div className="view-wrapper46">
                <div className="view48">View</div>
              </div>
            </div>
          </div>
          <div className="male-parent8">
            <div className="male26">Male</div>
            <div className="female13">Female</div>
            <div className="male27">Male</div>
            <div className="gender13">Gender</div>
          </div>
          <div className="content113">
            <div className="magnifyingglass20">
              <div className="magnifyingglass21">􀊫</div>
            </div>
            <div className="placeholder-label10">Search</div>
            <img className="mic-icon11" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="admin-review-modifications-inner1">
          <div className="accept-wrapper10">
            <div className="view48">Accept</div>
          </div>
        </div>
        <div className="admin-review-modifications-inner2">
          <div className="accept-wrapper10">
            <div className="view48">Accept</div>
          </div>
        </div>
        <div className="admin-review-modifications-inner3">
          <div className="decline-wrapper10">
            <div className="view48">Decline</div>
          </div>
        </div>
        <div className="admin-review-modifications-inner4">
          <div className="decline-wrapper10">
            <div className="view48">Decline</div>
          </div>
        </div>
        <div className="admin-review-modifications-inner5">
          <div className="decline-wrapper10">
            <div className="view48">Decline</div>
          </div>
        </div>
        <div className="parent7">
          <div className="div92">03/10/2018</div>
          <div className="div93">05/09/2023</div>
          <div className="div94">06/07/2022</div>
          <div className="date-of-signup4">Date of Signup</div>
        </div>
        <div className="admin-review-modifications-inner6">
          <div className="accept-wrapper10">
            <div className="view48">Accept</div>
          </div>
        </div>
        <div
          className="admin-review-modifications-inner7"
          onClick={onFrameContainer8Click}
        >
          <div className="view-wrapper46">
            <div className="view48">Back</div>
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

export default AdminReviewModifications;
