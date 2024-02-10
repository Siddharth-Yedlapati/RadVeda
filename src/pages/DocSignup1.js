import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DocSignup1.css";

const DocSignup1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/doc-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/doc-signup-2");
  }, [navigate]);

  return (
    <div className="doc-signup-3">
      <img className="vector-icon78" alt="" />
      <div className="doc-signup-3-child" />
      <div className="doc-signup-3-item" />
      <img
        className="users-background-7-icon3"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="doc-signup-3-inner" onClick={onRectangleClick} />
      <b className="login10">Login</b>
      <div className="already-have-an8"> Already have an account?</div>
      <div className="doc-signup-3-child1" onClick={onRectangle1Click} />
      <b className="submit-sign-up1">Submit sign up request</b>
      <div className="doc-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back32">Back</b>
      <div className="text-fieldoutlined59">
        <div className="input59">
          <div className="content64">
            <div className="min-height59" />
            <div className="label59">Password</div>
          </div>
        </div>
        <div className="helpertext59">
          <div className="helper-text59">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined60">
        <div className="input59">
          <div className="content64">
            <div className="min-height59" />
            <div className="label59">Confirm password</div>
          </div>
        </div>
        <div className="helpertext59">
          <div className="helper-text59">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined61">
        <div className="input61">
          <div className="content64">
            <div className="min-height59" />
            <div className="label59">Confirm password</div>
          </div>
        </div>
        <div className="helpertext59">
          <div className="helper-text59">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as6">Sign up AS Doctor</div>
      <div className="doc-signup-3-child3" />
      <div className="doc-signup-3-child4" />
      <div className="doc-signup-3-child5" />
      <div className="doc-signup-3-child6" />
      <div className="password-mismatch-warning2">
        Password mismatch warning
      </div>
      <div className="text-fieldoutlined62">
        <div className="input61">
          <div className="content64">
            <div className="min-height59" />
            <div className="label59">Confirm password</div>
          </div>
        </div>
        <div className="helpertext59">
          <div className="helper-text59">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity3">Phone number validity status</div>
      <div className="text-fieldoutlined63">
        <div className="input59">
          <div className="content64">
            <div className="min-height59" />
            <div className="label59">Phone number</div>
          </div>
        </div>
        <div className="helpertext59">
          <div className="helper-text59">Helper text</div>
        </div>
      </div>
      <div className="your-password-must2">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default DocSignup1;
