import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NPUserOptions.css";

const NPUserOptions = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/user-type-selection");
  }, [navigate]);

  return (
    <div className="np-user-options">
      <div className="np-user-options-child" />
      <div className="np-user-options-inner">
        <div className="your-profile-wrapper">
          <div className="your-profile">Your Profile</div>
        </div>
      </div>
      <div className="np-user-options-inner1">
        <div className="settings-wrapper">
          <div className="your-profile">Settings</div>
        </div>
      </div>
      <div className="np-user-options-inner2" onClick={onFrameContainer2Click}>
        <div className="signout-wrapper">
          <div className="your-profile">Signout</div>
        </div>
      </div>
    </div>
  );
};

export default NPUserOptions;
