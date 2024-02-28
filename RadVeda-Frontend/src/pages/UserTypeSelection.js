import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./UserTypeSelection.css";

const UserTypeSelection = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        navigate("/admin-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        navigate("/su-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        navigate("/rad-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        navigate("/labstaff-dashboard");
      }).catch(error => {
        
      })

  }

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
      <div className="patient2" onClick={onEllipse1Click}>Patient</div>
      <div className="user-type-selection-child1" onClick={onEllipse2Click} />
      <div className="super-admin2" onClick={onEllipse2Click}>Super Admin</div>
      <div className="user-type-selection-child2" onClick={onEllipse3Click} />
      <div className="admin" onClick={onEllipse3Click}>Admin</div>
      <div className="user-type-selection-child3" onClick={onEllipse4Click} />
      <div className="lab-staff4" onClick={onEllipse4Click}>Lab Staff</div>
      <div className="user-type-selection-child4" onClick={onEllipse5Click} />
      <div className="radiologist" onClick={onEllipse5Click}>Radiologist</div>
      <div className="user-type-selection-child5" onClick={onEllipse6Click} />
      <div className="doctor" onClick={onEllipse6Click}>Doctor</div>
    </div>
  );
};

export default UserTypeSelection;
