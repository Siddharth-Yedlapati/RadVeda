import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLoginPage.css";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-login-page">
      <img className="vector-icon167" alt="" />
      <div className="admin-login-page-child" />
      <div className="admin-login-page-item" />
      <img
        className="users-background-4-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password4">Recover Password ?</div>
      <div className="text-fieldoutlined100">
        <div className="input101">
          <div className="content107">
            <div className="min-height101" />
            <div className="label101">Enter Email or Phone</div>
          </div>
        </div>
        <div className="helpertext101">
          <div className="helper-text101">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined101">
        <div className="input101">
          <div className="content107">
            <div className="min-height101" />
            <div className="label101">Password</div>
          </div>
        </div>
        <div className="helpertext101">
          <div className="helper-text101">Helper text</div>
        </div>
      </div>
      <div className="admin-login-page-inner" onClick={onRectangleClick} />
      <b className="login18">Login</b>
      <div className="admin-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up3">Sign up</b>
      <div className="login-as-admin-container">
        <p className="login-as3">{`Login AS `}</p>
        <p className="login-as3">Admin</p>
      </div>
      <div className="dont-have-an3">Don’t have an account?</div>
      <div className="admin-login-page-child2" onClick={onRectangle2Click} />
      <b className="back70">Back</b>
    </div>
  );
};

export default AdminLoginPage;
