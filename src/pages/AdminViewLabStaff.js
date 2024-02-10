import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminViewLabStaff.css";

const AdminViewLabStaff = () => {
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
      <div className="admin-view-labstaff">
        <div className="admin-view-labstaff-child" />
        <img className="vector-icon180" alt="" />
        <img
          className="admin-view-labstaff-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing40">
          <img className="vector-icon181" alt="" src="/vector.svg" />
          <img className="vector-icon182" alt="" src="/vector.svg" />
          <img className="vector-icon183" alt="" />
          <div className="iconnotification-bing-child38" />
          <div className="div86">03</div>
        </div>
        <img className="need-help-icon40" alt="" src="/need-help.svg" />
        <div className="admin-view-labstaff-inner" />
        <div className="admin-view-labstaff-child1" />
        <div className="frame-parent42">
          <div className="frame-child360" />
          <div className="lab-staff-list-parent">
            <b className="lab-staff-list">{`Lab Staff List `}</b>
            <div className="frame-child361" />
            <div className="frame-parent43">
              <div className="group-parent64">
                <div className="staff1-parent">
                  <div className="staff-name">Staff1</div>
                  <div className="uk11">uk</div>
                </div>
                <div className="rectangle-parent23">
                  <div className="group-child42" />
                  <img
                    className="group-child43"
                    alt=""
                    src="/group-236802.svg"
                  />
                </div>
                <img className="frame-child362" alt="" />
              </div>
              <div className="group-parent65">
                <div className="staff-2-group">
                  <div className="staff-name">Staff 2</div>
                  <div className="uk11">uSA</div>
                </div>
                <img
                  className="frame-child363"
                  alt=""
                  src="/group-236783.svg"
                />
              </div>
              <div className="group-parent66">
                <div className="staff-2-group">
                  <div className="staff-name">Staff 3</div>
                  <div className="uk11">USA</div>
                </div>
                <div className="frame-child363">
                  <div className="rectangle-parent23">
                    <div className="group-child44" />
                    <img
                      className="group-child45"
                      alt=""
                      src="/group-236804.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="staff-name-parent">
                <div className="staff-name">Staff Name</div>
                <div className="info-parent1">
                  <div className="info6">Info</div>
                  <div className="group-wrapper104">
                    <div className="view-wrapper34">
                      <div className="view36">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper105">
                    <div className="view-wrapper34">
                      <div className="view36">View</div>
                    </div>
                  </div>
                  <div className="group-wrapper106">
                    <div className="view-wrapper34">
                      <div className="view36">View</div>
                    </div>
                  </div>
                </div>
                <div className="yrs-parent1">
                  <div className="yrs9">13 yrs</div>
                  <div className="yrs10">22 yrs</div>
                  <div className="yrs11">3 yrs</div>
                  <div className="experience3">experience</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper5">
              <div className="documents-parent2">
                <div className="documents6">Documents</div>
                <div className="group-wrapper107">
                  <div className="view-wrapper34">
                    <div className="view36">View</div>
                  </div>
                </div>
                <div className="group-wrapper108">
                  <div className="view-wrapper34">
                    <div className="view36">View</div>
                  </div>
                </div>
                <div className="group-wrapper109">
                  <div className="view-wrapper34">
                    <div className="view36">View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="male-parent6">
            <div className="yrs9">Male</div>
            <div className="yrs10">Female</div>
            <div className="yrs11">Male</div>
            <div className="experience3">Gender</div>
          </div>
          <div className="content111">
            <div className="magnifyingglass16">
              <div className="magnifyingglass17">􀊫</div>
            </div>
            <div className="placeholder-label8">Search</div>
            <img className="mic-icon9" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div
          className="admin-view-labstaff-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="view-wrapper34">
            <div className="view36">Back</div>
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

export default AdminViewLabStaff;
