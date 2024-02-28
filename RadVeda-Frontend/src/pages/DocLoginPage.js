import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthToken, getAuthToken} from "../axios_helper";
import "./DocLoginPage.css";

const DocLoginPage = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })
  }

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onRectangleClick = useCallback(() => {
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all required fields");
      return;
    }

    request(
      "POST",
      "/authenticate",
      {
          "userName" : loginEmail,
          "password" : loginPassword,
          "userRole" : "DOCTOR"
      },
      false
      ).then(
        (response) => {
          //Store the JWT Auth token and proceed to the doctor dashboard
          setAuthToken(response.data);
          navigate("/doc-dashboard");
        }
      ).catch(
        (error) => {
          alert("Invalid user credentials");
        }
      )

  }, [navigate, loginEmail, loginPassword]);

  const onRectangle1Click = useCallback(() => {
    navigate("/doc-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="doc-login-page">
      <img className="vector-icon80" alt="" />
      <div className="doc-login-page-child" />
      <div className="doc-login-page-item" />
      <img
        className="users-background-4-icon2"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password2">Recover Password ?</div>
      <div className="text-fieldoutlined67">
        <div className="input67">
          <div className="content72">
            <div className="min-height67" />
            <input
              type="text"
              className="label67"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Enter Email or Phone"
            />
          </div>
        </div>
        <div className="helpertext67">
          <div className="helper-text67">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined68">
        <div className="input67">
          <div className="content72">
            <div className="min-height67" />
            <input
              type="password"
              className="label67"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext67">
          <div className="helper-text67">Helper text</div>
        </div>
      </div>
      <div className="doc-login-page-inner" onClick={onRectangleClick} />
      <b className="login12" onClick={onRectangleClick}>Login</b>
      <div className="doc-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up1" onClick={onRectangle1Click}>Sign up</b>
      <div className="login-as-doctor">Login AS Doctor</div>
      <div className="dont-have-an1" onClick={onRectangle1Click}>Don’t have an account?</div>
      <div className="doc-login-page-child2" onClick={onRectangle2Click} />
      <b className="back34" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default DocLoginPage;
