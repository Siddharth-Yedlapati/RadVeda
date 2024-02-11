import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientSignup1.css";

const PatientSignup1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-signup-2");
  }, [navigate]);

  return (
    <div className="patient-signup-3">
      <img className="vector-icon35" alt="" />
      <div className="patient-signup-3-child" />
      <div className="patient-signup-3-item" />
      <img
        className="users-background-7-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="patient-signup-3-inner" onClick={onRectangleClick} />
      <b className="login7" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an5" onClick={onRectangleClick}> Already have an account?</div>
      <div className="patient-signup-3-child1" onClick={onRectangle1Click} />
      <b className="submit" onClick={onRectangle1Click} >Submit</b>
      <div className="patient-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back13" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined39">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <div className="label39">Password</div>
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined40">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <div className="label39">Confirm password</div>
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined41">
        <div className="input41">
          <div className="content43">
            <div className="min-height39" />
            <div className="label39">Confirm password</div>
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container4">
        <p className="sign-up-as4">Sign up AS</p>
        <p className="sign-up-as4">patient</p>
      </div>
      <div className="password-mismatch-warning1">
        Password mismatch warning
      </div>
      <div className="text-fieldoutlined42">
        <div className="input41">
          <div className="content43">
            <div className="min-height39" />
            <div className="label39">Confirm password</div>
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity1">Phone number validity status</div>
      <div className="text-fieldoutlined43">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <div className="label39">Phone number</div>
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="your-password-must1">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
      <div className="patient-signup-3-child3" />
      <div className="patient-signup-3-child4" />
      <div className="patient-signup-3-child5" />
      <div className="patient-signup-3-child6" />
    </div>
  );
};

export default PatientSignup1;
