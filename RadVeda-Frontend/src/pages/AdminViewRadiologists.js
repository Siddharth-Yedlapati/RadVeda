import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./AdminViewRadiologists.css";

const AdminViewRadiologists = () => {

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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="admin-view-radiologists">
        <div className="admin-view-radiologists-child" />
        <img className="vector-icon176" alt="" />
        <img
          className="admin-view-radiologists-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing39">
          <img className="vector-icon177" alt="" src="/vector.svg" />
          <img className="vector-icon178" alt="" src="/vector.svg" />
          <img className="vector-icon179" alt="" />
          <div className="iconnotification-bing-child37" />
          <div className="div85">03</div>
        </div>
        <img className="need-help-icon39" alt="" src="/need-help.svg" />
        <div className="admin-view-radiologists-inner" />
        <div className="admin-view-radiologists-child1" />
        <div className="frame-parent40">
          <div className="frame-child356" />
          <div className="radiologists-list-parent">
            <b className="radiologists-list">{`Radiologists List `}</b>
            <div className="frame-child357" />
            <div className="frame-parent41">
              <div className="group-parent61">
                <div className="radiologist1-parent">
                  <div className="radiologist12">Radiologist1</div>
                  <div className="uk10">uk</div>
                </div>
                <div className="rectangle-parent21">
                  <div className="group-child38" />
                  <img
                    className="group-child39"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <img className="frame-child358" alt="" />
              </div>
              <div className="group-parent62">
                <div className="radiologist-2-group">
                  <div className="radiologist12">Radiologist 2</div>
                  <div className="uk10">uSA</div>
                </div>
                <img
                  className="frame-child359"
                  alt=""
                  src="/group-236783.svg"
                />
              </div>
              <div className="group-parent63">
                <div className="radiologist-2-group">
                  <div className="radiologist12">Radiologist 3</div>
                  <div className="uk10">USA</div>
                </div>
                <div className="frame-child359">
                  <div className="rectangle-parent21">
                    <div className="group-child40" />
                    <img
                      className="group-child41"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="radiologist-name-container">
                <div className="radiologist12">Radiologist Name</div>
                <div className="info-group">
                  <div className="info5">Info</div>
                  <div className="group-wrapper97">
                    <div className="view-wrapper28">
                      <div className="view30">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper98">
                    <div className="view-wrapper28">
                      <div className="view30">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper99">
                    <div className="view-wrapper28">
                      <div className="view30">View</div>
                    </div>
                  </div>
                </div>
                <div className="yrs-container">
                  <div className="yrs6">13 yrs</div>
                  <div className="yrs7">22 yrs</div>
                  <div className="yrs8">3 yrs</div>
                  <div className="experience2">experience</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper4">
              <div className="documents-parent1">
                <div className="documents5">Documents</div>
                <div className="group-wrapper100">
                  <div className="view-wrapper28">
                    <div className="view30">View</div>
                  </div>
                </div>
                <div className="group-wrapper101">
                  <div className="view-wrapper28">
                    <div className="view30">View</div>
                  </div>
                </div>
                <div className="group-wrapper102">
                  <div className="view-wrapper28">
                    <div className="view30">View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="male-parent5">
            <div className="yrs6">Male</div>
            <div className="yrs7">Female</div>
            <div className="yrs8">Male</div>
            <div className="experience2">Gender</div>
          </div>
          <div className="content110">
            <div className="magnifyingglass14">
              <div className="magnifyingglass15">􀊫</div>
            </div>
            <div className="placeholder-label7">Search</div>
            <img className="mic-icon8" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div
          className="admin-view-radiologists-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="view-wrapper28">
            <div className="view30">Back</div>
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

export default AdminViewRadiologists;
