import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthToken, getAuthToken} from "../axios_helper";
import "./PatientLoginPage.css";

const PatientLoginPage = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
  }

  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emailError, setEmailError] = useState("");

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
          "userRole" : "PATIENT"
      },
      false
      ).then(
        (response) => {
          //Store the JWT Auth token and proceed to the doctor dashboard
          setAuthToken(response.data);
          navigate("/patient-dashboard");
        }
      ).catch(
        (error) => {
          alert("Invalid user credentials");
        }
      )
    
  }, [navigate, loginEmail, loginPassword]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="patient-login-page">
      <img className="vector-icon147" alt="" />
      <div className="patient-login-page-child" />
      <div className="patient-login-page-item" />
      <img
        className="users-background-4-icon3"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password3">Recover Password ?</div>
      <div className="text-fieldoutlined79">
        <div className="input80">
          <div className="content85">
            <div className="min-height80" />
            <input
              type="text"
              className="label80"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
                setEmailError(""); // Reset email error on change
              }}
              placeholder="Enter Email or Phone"
            />
          </div>
        </div>
        {emailError && <div className="error-message">{emailError}</div>}
        <div className="helpertext80">
          <div className="helper-text80">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined80">
        <div className="input80">
          <div className="content85">
            <div className="min-height80" />
            <input
              type="password"
              className="label80"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext80">
          <div className="helper-text80">Helper text</div>
        </div>
      </div>
      <div className="patient-login-page-inner" onClick={onRectangleClick} />
      <b className="login14" onClick={onRectangleClick}>Login</b>
      <div className="patient-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up2" onClick={onRectangle1Click}>Sign up</b>
      <div className="login-as-patient-container">
        <p className="login-as2">{`Login AS `}</p>
        <p className="login-as2">patient</p>
      </div>
      <div className="dont-have-an2" onClick={onRectangle1Click}>Don't have an account?</div>
      <div className="patient-login-page-child2" onClick={onRectangle2Click} />
      <b className="back58" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default PatientLoginPage;
