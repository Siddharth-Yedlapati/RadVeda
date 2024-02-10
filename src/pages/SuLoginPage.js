import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SuLoginPage.css";

const SuLoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/su-dashboard");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/user-type-selection");
  }, [navigate]);

  return (
    <div className="su-login-page">
      <img className="vector-icon12" alt="" />
      <div className="su-login-page-child" />
      <div className="su-login-page-item" />
      <img
        className="users-background-4-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password1">Recover Password ?</div>
      <div className="text-fieldoutlined19">
        <div className="input19">
          <div className="content19">
            <div className="min-height19" />
            <div className="label19">Enter Email or Phone</div>
          </div>
        </div>
        <div className="helpertext19">
          <div className="helper-text19">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined20">
        <div className="input19">
          <div className="content19">
            <div className="min-height19" />
            <div className="label19">Password</div>
          </div>
        </div>
        <div className="helpertext19">
          <div className="helper-text19">Helper text</div>
        </div>
      </div>
      <div className="su-login-page-inner" onClick={onRectangleClick} />
      <b className="login4">Login</b>
      <div className="login-as-super-container">
        <p className="super-admin">{`Login AS `}</p>
        <p className="super-admin">super admin</p>
      </div>
      <div className="su-login-page-child1" onClick={onRectangle1Click} />
      <b className="back6">Back</b>
    </div>
  );
};

export default SuLoginPage;
