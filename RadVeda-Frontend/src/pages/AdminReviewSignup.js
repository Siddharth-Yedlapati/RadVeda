import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./AdminReviewSignup.css";

const AdminReviewSignup = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/admin-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

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
      <div className="admin-review-signup">
        <div className="admin-review-signup-child" />
        <img className="vector-icon184" alt="" />
        <img
          className="admin-review-signup-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing41">
          <img className="vector-icon185" alt="" src="/vector.svg" />
          <img className="vector-icon186" alt="" src="/vector.svg" />
          <img className="vector-icon187" alt="" />
          <div className="iconnotification-bing-child39" />
          <div className="div87">03</div>
        </div>
        <img className="need-help-icon41" alt="" src="/need-help.svg" />
        <div className="admin-review-signup-inner" />
        <div className="admin-review-signup-child1" />
        <div className="frame-parent44">
          <div className="frame-child364" />
          <div className="sign-up-requests-group">
            <b className="sign-up-requests-container1">
              <p className="sign-up-requests1">Sign up requests</p>
            </b>
            <div className="frame-parent45">
              <div className="group-parent67">
                <div className="doctor1-group">
                  <div className="doctor13">Doctor1</div>
                  <div className="uk12">uk</div>
                </div>
                <div className="rectangle-parent25">
                  <div className="group-child46" />
                  <img
                    className="group-child47"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
              </div>
              <div className="group-parent68">
                <div className="radiologist-1-group">
                  <div className="doctor13">Radiologist 1</div>
                  <div className="uk12">uSA</div>
                </div>
                <img
                  className="frame-child365"
                  alt=""
                  src="/group-236783.svg"
                />
                <div className="radiologist6">Radiologist</div>
              </div>
              <div className="group-parent69">
                <div className="doctor-2-container">
                  <div className="doctor13">Doctor 2</div>
                  <div className="uk12">USA</div>
                </div>
                <div className="frame-child365">
                  <div className="rectangle-parent25">
                    <div className="group-child48" />
                    <img
                      className="group-child49"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="name-parent">
                <div className="name3">Name</div>
                <div className="role-parent">
                  <div className="role">Role</div>
                  <div className="doctor6">Doctor</div>
                  <div className="doctor7">Doctor</div>
                </div>
              </div>
              <div className="yrs-parent2">
                <div className="yrs12">13 yrs</div>
                <div className="yrs13">22 yrs</div>
                <div className="yrs14">3 yrs</div>
                <div className="experience4">experience</div>
              </div>
            </div>
            <div className="info7">Info</div>
            <div className="group-wrapper111">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
            <div className="group-wrapper112">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
            <div className="group-wrapper113">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
            <div className="frame-child366" />
            <div className="documents-wrapper1">
              <div className="documents7">Documents</div>
            </div>
            <div className="group-wrapper114">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
            <div className="group-wrapper115">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
            <div className="group-wrapper116">
              <div className="view-wrapper40">
                <div className="view42">View</div>
              </div>
            </div>
          </div>
          <div className="male-parent7">
            <div className="male24">Male</div>
            <div className="female12">Female</div>
            <div className="male25">Male</div>
            <div className="gender12">Gender</div>
          </div>
          <div className="content112">
            <div className="magnifyingglass18">
              <div className="magnifyingglass19">􀊫</div>
            </div>
            <div className="placeholder-label9">Search</div>
            <img className="mic-icon10" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="admin-review-signup-inner1">
          <div className="accept-wrapper7">
            <div className="view42">Accept</div>
          </div>
        </div>
        <div className="admin-review-signup-inner2">
          <div className="accept-wrapper7">
            <div className="view42">Accept</div>
          </div>
        </div>
        <div className="admin-review-signup-inner3">
          <div className="decline-wrapper7">
            <div className="view42">Decline</div>
          </div>
        </div>
        <div className="admin-review-signup-inner4">
          <div className="decline-wrapper7">
            <div className="view42">Decline</div>
          </div>
        </div>
        <div className="admin-review-signup-inner5">
          <div className="decline-wrapper7">
            <div className="view42">Decline</div>
          </div>
        </div>
        <div className="parent6">
          <div className="male24">03/10/2018</div>
          <div className="female12">05/09/2023</div>
          <div className="male25">06/07/2022</div>
          <div className="date-of-signup3">Date of Signup</div>
        </div>
        <div className="admin-review-signup-inner6">
          <div className="accept-wrapper7">
            <div className="view42">Accept</div>
          </div>
        </div>
        <div
          className="admin-review-signup-inner7"
          onClick={onFrameContainer8Click}
        >
          <div className="view-wrapper40">
            <div className="view42">Back</div>
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

export default AdminReviewSignup;
