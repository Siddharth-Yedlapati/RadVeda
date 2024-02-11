import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffSignup1.css";

const LabStaffSignup1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/labstaff-signup-2");
  }, [navigate]);

  return (
    <div className="labstaff-signup-3">
      <img className="vector-icon1" alt="" />
      <div className="labstaff-signup-3-child" />
      <div className="labstaff-signup-3-item" />
      <img
        className="users-background-7-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="labstaff-signup-3-inner" onClick={onRectangleClick} />
      <b className="login1" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an1" onClick={onRectangleClick}> Already have an account?</div>
      <div className="labstaff-signup-3-child1" onClick={onRectangle1Click} />
      <b className="submit-sign-up" onClick={onRectangle1Click}>Submit sign up request</b>
      <div className="labstaff-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back1" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined9">
        <div className="input9">
          <div className="content9">
            <div className="min-height9" />
            <div className="label9">Password</div>
          </div>
        </div>
        <div className="helpertext9">
          <div className="helper-text9">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined10">
        <div className="input9">
          <div className="content9">
            <div className="min-height9" />
            <div className="label9">Confirm password</div>
          </div>
        </div>
        <div className="helpertext9">
          <div className="helper-text9">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined11">
        <div className="input11">
          <div className="content9">
            <div className="min-height9" />
            <div className="label9">Confirm password</div>
          </div>
        </div>
        <div className="helpertext9">
          <div className="helper-text9">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container1">
        <p className="sign-up-as1">Sign up AS</p>
        <p className="sign-up-as1">lab staff</p>
      </div>
      <div className="labstaff-signup-3-child3" />
      <div className="labstaff-signup-3-child4" />
      <div className="labstaff-signup-3-child5" />
      <div className="labstaff-signup-3-child6" />
      <div className="password-mismatch-warning">Password mismatch warning</div>
      <div className="text-fieldoutlined12">
        <div className="input11">
          <div className="content9">
            <div className="min-height9" />
            <div className="label9">Confirm password</div>
          </div>
        </div>
        <div className="helpertext9">
          <div className="helper-text9">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity">Phone number validity status</div>
      <div className="text-fieldoutlined13">
        <div className="input9">
          <div className="content9">
            <div className="min-height9" />
            <div className="label9">Phone number</div>
          </div>
        </div>
        <div className="helpertext9">
          <div className="helper-text9">Helper text</div>
        </div>
      </div>
      <div className="your-password-must">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default LabStaffSignup1;
