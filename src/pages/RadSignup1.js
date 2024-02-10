import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadSignup1.css";

const RadSignup1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/rad-signup-2");
  }, [navigate]);

  return (
    <div className="rad-signup-3">
      <img className="vector-icon201" alt="" />
      <div className="rad-signup-3-child" />
      <div className="rad-signup-3-item" />
      <img
        className="users-background-7-icon5"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="rad-signup-3-inner" onClick={onRectangleClick} />
      <b className="login20">Login</b>
      <div className="already-have-an15"> Already have an account?</div>
      <div className="rad-signup-3-child1" onClick={onRectangle1Click} />
      <b className="submit-sign-up3">Submit sign up request</b>
      <div className="rad-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back78">Back</b>
      <div className="text-fieldoutlined111">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <div className="label112">Password</div>
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined112">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <div className="label112">Confirm password</div>
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined113">
        <div className="input114">
          <div className="content125">
            <div className="min-height112" />
            <div className="label112">Confirm password</div>
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as13">Sign up AS radiologist</div>
      <div className="rad-signup-3-child3" />
      <div className="rad-signup-3-child4" />
      <div className="rad-signup-3-child5" />
      <div className="rad-signup-3-child6" />
      <div className="password-mismatch-warning4">
        Password mismatch warning
      </div>
      <div className="text-fieldoutlined114">
        <div className="input114">
          <div className="content125">
            <div className="min-height112" />
            <div className="label112">Confirm password</div>
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity5">Phone number validity status</div>
      <div className="text-fieldoutlined115">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <div className="label112">Phone number</div>
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="your-password-must4">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default RadSignup1;
