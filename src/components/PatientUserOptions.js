import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientUserOptions.css";

const PatientUserOptions = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="patient-user-options">
      <div className="patient-user-options-child" />
      <div className="patient-user-options-inner">
        <div className="your-profile-container">
          <div className="your-profile1">Your Profile</div>
        </div>
      </div>
      <div className="patient-user-options-inner1">
        <div className="settings-container">
          <div className="your-profile1">Settings</div>
        </div>
      </div>
      <div
        className="patient-user-options-inner2"
        onClick={onFrameContainer2Click}
      >
        <div className="signout-container">
          <div className="your-profile1">Signout</div>
        </div>
      </div>
    </div>
  );
};

export default PatientUserOptions;
