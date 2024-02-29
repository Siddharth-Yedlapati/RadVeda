import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthToken, getAuthToken} from "../axios_helper";
import "./RadLoginPage.css";

const RadLoginPage = () => {
  const navigate = useNavigate();

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

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onRectangleClick = useCallback(() => {
    // Validate fields
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    request(
      "POST",
      "/authenticate",
      {
          "userName" : loginEmail,
          "password" : loginPassword,
          "userRole" : "RADIOLOGIST"
      },
      false
      ).then(
        (response) => {
          //Store the JWT Auth token and proceed to the doctor dashboard
          setAuthToken(response.data);
          navigate("/rad-dashboard");
        }
      ).catch(
        (error) => {
          alert("Invalid user credentials");
        }
      )

  }, [navigate, loginEmail, loginPassword]);

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="rad-login-page">
      <img className="vector-icon203" alt="" />
      <div className="rad-login-page-child" />
      <div className="rad-login-page-item" />
      <img
        className="users-background-4-icon5"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password5">Recover Password ?</div>
      <div className="text-fieldoutlined119">
        <div className="input120">
          <div className="content133">
            <div className="min-height120" />
            <input
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="label120"
              placeholder="Enter Email or Phone"
            />
          </div>
        </div>
        <div className="helpertext120">
          <div className="helper-text120">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined120">
        <div className="input120">
          <div className="content133">
            <div className="min-height120" />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="label120"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext120">
          <div className="helper-text120">Helper text</div>
        </div>
      </div>
      <div className="rad-login-page-inner" onClick={onRectangleClick} />
      <b className="login22" onClick={onRectangleClick} >Login</b>
      <div className="rad-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up4" onClick={onRectangle1Click}>Sign up </b>
      <div className="login-as-radiologist">Login AS RAdiologist</div>
      <div className="dont-have-an4" onClick={onRectangle1Click}>Don’t have an account?</div>
      <div className="rad-login-page-child2" onClick={onRectangle2Click} />
      <b className="back80" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default RadLoginPage;
