import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSignup1.css";

const AdminSignup1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/admin-signup-2");
  }, [navigate]);

  return (
    <div className="admin-signup-3">
      <img className="vector-icon165" alt="" />
      <div className="admin-signup-3-child" />
      <div className="admin-signup-3-item" />
      <img
        className="users-background-7-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="admin-signup-3-inner" onClick={onRectangleClick} />
      <b className="login16">Login</b>
      <div className="already-have-an12"> Already have an account?</div>
      <div className="admin-signup-3-child1" onClick={onRectangle1Click} />
      <b className="submit-sign-up2">Submit sign up request</b>
      <div className="admin-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back68">Back</b>
      <div className="text-fieldoutlined92">
        <div className="input93">
          <div className="content99">
            <div className="min-height93" />
            <div className="label93">Password</div>
          </div>
        </div>
        <div className="helpertext93">
          <div className="helper-text93">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined93">
        <div className="input93">
          <div className="content99">
            <div className="min-height93" />
            <div className="label93">Confirm password</div>
          </div>
        </div>
        <div className="helpertext93">
          <div className="helper-text93">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined94">
        <div className="input95">
          <div className="content99">
            <div className="min-height93" />
            <div className="label93">Confirm password</div>
          </div>
        </div>
        <div className="helpertext93">
          <div className="helper-text93">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container7">
        <p className="sign-up-as10">Sign up AS</p>
        <p className="sign-up-as10">admin</p>
      </div>
      <div className="admin-signup-3-child3" />
      <div className="admin-signup-3-child4" />
      <div className="admin-signup-3-child5" />
      <div className="admin-signup-3-child6" />
      <div className="password-mismatch-warning3">
        Password mismatch warning
      </div>
      <div className="text-fieldoutlined95">
        <div className="input95">
          <div className="content99">
            <div className="min-height93" />
            <div className="label93">Confirm password</div>
          </div>
        </div>
        <div className="helpertext93">
          <div className="helper-text93">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity4">Phone number validity status</div>
      <div className="text-fieldoutlined96">
        <div className="input93">
          <div className="content99">
            <div className="min-height93" />
            <div className="label93">Phone number</div>
          </div>
        </div>
        <div className="helpertext93">
          <div className="helper-text93">Helper text</div>
        </div>
      </div>
      <div className="your-password-must3">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default AdminSignup1;
