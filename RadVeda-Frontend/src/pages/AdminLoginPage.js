import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthToken} from "../axios_helper";
import "./AdminLoginPage.css";

const AdminLoginPage = () => {
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
          "userRole" : "ADMIN"
      },
      false
      ).then(
        (response) => {
          console.log(response)
          //Store the JWT Auth token and proceed to the admin dashboard
          setAuthToken(response.data)
          navigate("/admin-dashboard");
        }
      ).catch(
        (error) => {
          console.log(error)
        }
      )
    
  }, [navigate, loginEmail, loginPassword]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-login-page">
      <img className="vector-icon167" alt="" />
      <div className="admin-login-page-child" />
      <div className="admin-login-page-item" />
      <img
        className="users-background-4-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password4">Recover Password ?</div>
      <div className="text-fieldoutlined100">
        <div className="input101">
          <div className="content107">
            <div className="min-height101" />
            <input
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="label101"
              placeholder="Enter Email or Phone"
            />
          </div>
        </div>
        <div className="helpertext101">
          <div className="helper-text101">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined101">
        <div className="input101">
          <div className="content107">
            <div className="min-height101" />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="label101"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext101">
          <div className="helper-text101">Helper text</div>
        </div>
      </div>
      <div className="admin-login-page-inner" onClick={onRectangleClick} />
      <b className="login18" onClick={onRectangleClick}>Login</b>
      <div className="admin-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up3" onClick={onRectangle1Click}>Sign up</b>
      <div className="login-as-admin-container">
        <p className="login-as3">{`Login AS `}</p>
        <p className="login-as3">Admin</p>
      </div>
      <div className="dont-have-an3" onClick={onRectangle1Click}>Don’t have an account?</div>
      <div className="admin-login-page-child2" onClick={onRectangle2Click} />
      <b className="back70" onClick={onRectangle2Click} >Back</b>
    </div>
  );
};

export default AdminLoginPage;
