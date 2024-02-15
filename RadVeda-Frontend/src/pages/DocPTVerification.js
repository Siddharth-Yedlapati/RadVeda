import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DocPTVerification.css";

const DocPTVerification = () => {
  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-pt-details");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="doc-pt-verification">
        <div className="doc-pt-verification-child" />
        <img className="vector-icon81" alt="" />
        <img
          className="doc-pt-verification-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing17">
          <img className="vector-icon82" alt="" src="/vector.svg" />
          <img className="vector-icon83" alt="" src="/vector.svg" />
          <img className="vector-icon84" alt="" />
          <div className="iconnotification-bing-child15" />
          <div className="div43">03</div>
        </div>
        <img className="need-help-icon17" alt="" src="/need-help.svg" />
        <div className="doc-pt-verification-inner" />
        <div className="doc-pt-verification-child1" />
        <div className="frame-parent25">
          <div className="group-wrapper56" onClick={onFrameContainerClick}>
            <div className="submit-wrapper">
              <div className="enter-otp">Submit</div>
            </div>
          </div>
          <div className="frame-child129" />
          <div className="frame-child130" />
          <div className="group-wrapper57">
            <div className="enter-otp-wrapper">
              <div className="enter-otp">Enter OTP</div>
            </div>
          </div>
        </div>
        <div className="doc-pt-verification-inner1">
          <div className="send-otp-wrapper">
            <div className="enter-otp">Send OTP</div>
          </div>
        </div>
        <div className="text-fieldoutlined69">
          <div className="input69">
            <div className="content74">
              <div className="min-height69" />
              <div className="label69">789064</div>
            </div>
          </div>
          <div className="helpertext69">
            <div className="helper-text69">Helper text</div>
          </div>
        </div>
        <div className="text-fieldoutlined70">
          <div className="input69">
            <div className="content74">
              <div className="min-height69" />
              <div className="label69">PT3f94n90f</div>
            </div>
          </div>
          <div className="helpertext69">
            <div className="helper-text69">Helper text</div>
          </div>
        </div>
        <div
          className="doc-pt-verification-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper20">
            <div className="enter-otp">Back</div>
          </div>
        </div>
        <div className="doc-pt-verification-inner3">
          <div className="patient-id-wrapper">
            <div className="enter-otp">Patient ID</div>
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

export default DocPTVerification;
