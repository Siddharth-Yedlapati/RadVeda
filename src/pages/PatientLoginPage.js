import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientLoginPage.css";

const PatientLoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-type-selection");
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
            <div className="label80">Enter Email or Phone</div>
          </div>
        </div>
        <div className="helpertext80">
          <div className="helper-text80">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined80">
        <div className="input80">
          <div className="content85">
            <div className="min-height80" />
            <div className="label80">Password</div>
          </div>
        </div>
        <div className="helpertext80">
          <div className="helper-text80">Helper text</div>
        </div>
      </div>
      <div className="patient-login-page-inner" onClick={onRectangleClick} />
      <b className="login14">Login</b>
      <div className="patient-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up2">Sign up</b>
      <div className="login-as-patient-container">
        <p className="login-as2">{`Login AS `}</p>
        <p className="login-as2">patient</p>
      </div>
      <div className="dont-have-an2">Don’t have an account?</div>
      <div className="patient-login-page-child2" onClick={onRectangle2Click} />
      <b className="back58">Back</b>
    </div>
  );
};

export default PatientLoginPage;
