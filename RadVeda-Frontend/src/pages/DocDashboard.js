import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocDashboard.css";

const DocDashboard = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/doc-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-pt-verification");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-own-patient-details");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-cons-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="doc-dashboard">
        <div className="doc-dashboard-child" />
        <img className="vector-icon73" alt="" />
        <img
          className="doc-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing16">
          <img className="vector-icon74" alt="" src="/vector.svg" />
          <img className="vector-icon75" alt="" src="/vector.svg" />
          <img className="vector-icon76" alt="" />
          <div className="iconnotification-bing-child14" />
          <div className="div36">03</div>
        </div>
        <img className="need-help-icon16" alt="" src="/need-help.svg" />
        <div className="doc-dashboard-inner" />
        <div className="good-morning-john-doe-parent">
          <div className="good-morning-john-container4">
            <span>Good Morning</span>
            <b className="john-doe4">
              <span className="span4">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="group-wrapper53" onClick={onFrameContainerClick}>
            <div className="prescribe-test-wrapper">
              <div className="prescribe-test">Prescribe Test</div>
            </div>
          </div>
          <div className="content54">
            <div className="magnifyingglass8">
              <div className="magnifyingglass9">􀊫</div>
            </div>
            <div className="placeholder-label4">Search</div>
            <img className="mic-icon4" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="doc-dashboard-child1" />
        <div className="my-patients-list-parent">
          <b className="my-patients-list">My Patients list</b>
          <div className="frame-child125" />
          <div className="frame-parent23">
            <div className="group-parent33">
              <div className="patient-1-parent">
                <div className="patient-1">Patient 1</div>
                <div className="uk4">uk</div>
              </div>
              <div className="rectangle-parent6">
                <div className="group-child15" />
                <img className="group-child16" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent34" onClick={onFrameContainer1Click}>
              <div className="patient-2-parent">
                <div className="patient-1">Patient 2</div>
                <div className="uk4">uSA</div>
              </div>
              <img className="frame-child126" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent35">
              <div className="patient-3-parent">
                <div className="patient-1">Patient 3</div>
                <div className="uk4">USA</div>
              </div>
              <div className="frame-child126">
                <div className="rectangle-parent6">
                  <div className="group-child17" />
                  <img
                    className="group-child18"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-parent">
              <div className="patient-name">Patient Name</div>
              <div className="parent1">
                <div className="div37">21</div>
                <div className="div38">25</div>
                <div className="div39">34</div>
                <div className="age">Age</div>
              </div>
              <div className="male-parent2">
                <div className="male8">Male</div>
                <div className="female4">Female</div>
                <div className="male9">Male</div>
                <div className="gender4">Gender</div>
              </div>
            </div>
          </div>
        </div>
        <div className="consultations-requested-by-oth-parent">
          <b className="my-patients-list">
            Consultations requested by other doctors
          </b>
          <div className="frame-child125" />
          <div className="frame-parent23">
            <div className="group-parent33">
              <div className="patient-1-parent">
                <div className="patient-1">Patient 1</div>
                <div className="uk4">uk</div>
              </div>
              <div className="rectangle-parent6">
                <div className="group-child15" />
                <img className="group-child16" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent34" onClick={onFrameContainer12Click}>
              <div className="patient-2-parent">
                <div className="patient-1">Patient 2</div>
                <div className="uk4">uSA</div>
              </div>
              <img className="frame-child126" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent35">
              <div className="patient-3-parent">
                <div className="patient-1">Patient 3</div>
                <div className="uk4">USA</div>
              </div>
              <div className="frame-child126">
                <div className="rectangle-parent6">
                  <div className="group-child17" />
                  <img
                    className="group-child18"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-parent">
              <div className="patient-name">Patient Name</div>
              <div className="parent1">
                <div className="div37">21</div>
                <div className="div38">25</div>
                <div className="div39">34</div>
                <div className="age">Age</div>
              </div>
              <div className="male-parent2">
                <div className="male8">Male</div>
                <div className="female4">Female</div>
                <div className="male9">Male</div>
                <div className="gender4">Gender</div>
              </div>
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

export default DocDashboard;
