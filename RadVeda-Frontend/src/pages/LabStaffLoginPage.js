import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthToken, getAuthToken} from "../axios_helper";
import "./LabStaffLoginPage.css";

const LabStaffLoginPage = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
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
          "userRole" : "LABSTAFF"
      },
      false
      ).then(
        (response) => {
          //Store the JWT Auth token and proceed to the doctor dashboard
          setAuthToken(response.data);
          navigate("/labstaff-dashboard");
        }
      ).catch(
        (error) => {
          alert("Invalid user credentials");
        }
      )

  }, [navigate, loginEmail, loginPassword]);

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-signup");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="labstaff-login-page">
      <img className="vector-icon3" alt="" />
      <div className="labstaff-login-page-child" />
      <div className="labstaff-login-page-item" />
      <img
        className="users-background-4-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password">Recover Password ?</div>
      <div className="text-fieldoutlined17">
        <div className="input17">
          <div className="content17">
            <div className="min-height17" />
            <input
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="label17"
              placeholder="Enter Email or Phone"
            />
          </div>
        </div>
        <div className="helpertext17">
          <div className="helper-text17">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined18">
        <div className="input17">
          <div className="content17">
            <div className="min-height17" />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="label17"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext17">
          <div className="helper-text17">Helper text</div>
        </div>
      </div>
      <div className="labstaff-login-page-inner" onClick={onRectangleClick} />
      <b className="login3" onClick={onRectangleClick}>Login</b>
      <div className="labstaff-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up" onClick={onRectangle1Click}>Sign up</b>
      <div className="login-as-lab-container">
        <p className="login-as">{`Login AS `}</p>
        <p className="login-as">Lab staff</p>
      </div>
      <div className="dont-have-an" onClick={onRectangle1Click}>Don’t have an account?</div>
      <div className="labstaff-login-page-child2" onClick={onRectangle2Click} />
      <b className="back3" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default LabStaffLoginPage;
