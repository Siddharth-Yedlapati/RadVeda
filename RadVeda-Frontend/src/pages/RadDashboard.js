import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadDashboard.css";

const RadDashboard = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/rad-login-page");
      })
  }
  else
  {
    navigate("/rad-login-page");
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-dashboard-container">
      <div className="rad-dashboard">
        <div className="rad-dashboard-child" />
        <img className="vector-icon196" alt="" />
        <img
          className="rad-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing44">
          <img className="vector-icon197" alt="" src="/vector.svg" />
          <img className="vector-icon198" alt="" src="/vector.svg" />
          <img className="vector-icon199" alt="" />
          <div className="iconnotification-bing-child42" />
          <div className="div99">03</div>
        </div>
        <img className="need-help-icon44" alt="" src="/need-help.svg" />
        <div className="rad-dashboard-inner" />
        <div className="good-morning-john-doe-group">
          <div className="good-morning-john-container8">
            <span>Good Morning</span>
            <b className="john-doe8">
              <span className="span8">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="content115">
            <div className="magnifyingglass24">
              <div className="magnifyingglass25">􀊫</div>
            </div>
            <div className="placeholder-label12">Search</div>
            <img className="mic-icon13" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="rad-dashboard-child1" />
        <div className="consultations-requested-by-oth-group">
          <b className="consultations-requested-by1">
            Consultations requested by other radiologists
          </b>
          <div className="frame-child379" />
          <div className="frame-parent50">
            <div className="group-parent76">
              <div className="patient-1-container">
                <div className="patient-12">Patient 1</div>
                <div className="uk15">uk</div>
              </div>
              <div className="rectangle-parent31">
                <div className="group-child58" />
                <img className="group-child59" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent77" onClick={onFrameContainer1Click}>
              <div className="patient-2-container">
                <div className="patient-12">Patient 2</div>
                <div className="uk15">uSA</div>
              </div>
              <img className="frame-child380" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent78">
              <div className="patient-3-container">
                <div className="patient-12">Patient 3</div>
                <div className="uk15">USA</div>
              </div>
              <div className="frame-child380">
                <div className="rectangle-parent31">
                  <div className="group-child60" />
                  <img
                    className="group-child61"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-container">
              <div className="patient-name5">Patient Name</div>
              <div className="parent9">
                <div className="div100">21</div>
                <div className="div101">25</div>
                <div className="div102">34</div>
                <div className="age5">Age</div>
              </div>
              <div className="male-parent10">
                <div className="male30">Male</div>
                <div className="female15">Female</div>
                <div className="male31">Male</div>
                <div className="gender15">Gender</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent51">
          <div className="frame-child379" />
          <div className="frame-parent52">
            <div className="group-parent79">
              <div className="patient-1-container">
                <div className="patient-12">Patient 1</div>
                <div className="uk15">uk</div>
              </div>
              <div className="rectangle-parent31">
                <div className="group-child58" />
                <img className="group-child63" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent80" onClick={onFrameContainer12Click}>
              <div className="patient-2-container">
                <div className="patient-12">Patient 2</div>
                <div className="uk15">uSA</div>
              </div>
              <img className="frame-child380" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent81">
              <div className="patient-3-container">
                <div className="patient-12">Patient 3</div>
                <div className="uk15">USA</div>
              </div>
              <div className="frame-child380">
                <div className="rectangle-parent31">
                  <div className="group-child60" />
                  <img
                    className="group-child65"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-container">
              <div className="patient-name5">Patient Name</div>
              <div className="parent9">
                <div className="div100">21</div>
                <div className="div101">25</div>
                <div className="div102">34</div>
                <div className="age5">Age</div>
              </div>
              <div className="male-parent10">
                <div className="male30">Male</div>
                <div className="female15">Female</div>
                <div className="male31">Male</div>
                <div className="gender15">Gender</div>
              </div>
            </div>
          </div>
          <b className="my-patients-list1">My Patients List</b>
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

export default RadDashboard;
