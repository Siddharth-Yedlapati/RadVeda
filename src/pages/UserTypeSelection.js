import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UserTypeSelection.css";

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const onEllipse1Click = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onEllipse2Click = useCallback(() => {
    navigate("/su-login-page");
  }, [navigate]);

  const onEllipse3Click = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onEllipse4Click = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onEllipse5Click = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onEllipse6Click = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  return (
    <div className="user-type-selection">
      <img className="vector-icon145" alt="" />
      <div className="user-type-selection-child" />
      <div className="user-type-selection-item" />
      <img
        className="users-background-1-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="loginsign-up-as">{`Login/SIGN-up AS `}</div>
      <div className="user-type-selection-inner" onClick={onEllipse1Click} />
      <div className="patient2">Patient</div>
      <div className="user-type-selection-child1" onClick={onEllipse2Click} />
      <div className="super-admin2">Super Admin</div>
      <div className="user-type-selection-child2" onClick={onEllipse3Click} />
      <div className="admin">Admin</div>
      <div className="user-type-selection-child3" onClick={onEllipse4Click} />
      <div className="lab-staff4">Lab Staff</div>
      <div className="user-type-selection-child4" onClick={onEllipse5Click} />
      <div className="radiologist">Radiologist</div>
      <div className="user-type-selection-child5" onClick={onEllipse6Click} />
      <div className="doctor">Doctor</div>
    </div>
  );
};

export default UserTypeSelection;
