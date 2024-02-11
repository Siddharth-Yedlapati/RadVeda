import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffLoginPage.css";

const LabStaffLoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/labstaff-dashboard");
  }, [navigate]);

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
            <div className="label17">Enter Email or Phone</div>
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
            <div className="label17">Password</div>
          </div>
        </div>
        <div className="helpertext17">
          <div className="helper-text17">Helper text</div>
        </div>
      </div>
      <div className="labstaff-login-page-inner" onClick={onRectangleClick} />
      <b className="login3">Login</b>
      <div className="labstaff-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up">Sign up</b>
      <div className="login-as-lab-container">
        <p className="login-as">{`Login AS `}</p>
        <p className="login-as">Lab staff</p>
      </div>
      <div className="dont-have-an">Don’t have an account?</div>
      <div className="labstaff-login-page-child2" onClick={onRectangle2Click} />
      <b className="back3">Back</b>
    </div>
  );
};

export default LabStaffLoginPage;
