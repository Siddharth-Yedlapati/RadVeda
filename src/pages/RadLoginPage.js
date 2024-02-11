import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadLoginPage.css";

const RadLoginPage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/rad-dashboard");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-signup-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="rad-login-page">
      <img className="vector-icon203" alt="" />
      <div className="rad-login-page-child" />
      <div className="rad-login-page-item" />
      <img
        className="users-background-4-icon5"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="recover-password5">Recover Password ?</div>
      <div className="text-fieldoutlined119">
        <div className="input120">
          <div className="content133">
            <div className="min-height120" />
            <div className="label120">Enter Email or Phone</div>
          </div>
        </div>
        <div className="helpertext120">
          <div className="helper-text120">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined120">
        <div className="input120">
          <div className="content133">
            <div className="min-height120" />
            <div className="label120">Password</div>
          </div>
        </div>
        <div className="helpertext120">
          <div className="helper-text120">Helper text</div>
        </div>
      </div>
      <div className="rad-login-page-inner" onClick={onRectangleClick} />
      <b className="login22">Login</b>
      <div className="rad-login-page-child1" onClick={onRectangle1Click} />
      <b className="sign-up4">Sign up</b>
      <div className="login-as-radiologist">Login AS RAdiologist</div>
      <div className="dont-have-an4">Don’t have an account?</div>
      <div className="rad-login-page-child2" onClick={onRectangle2Click} />
      <b className="back80">Back</b>
    </div>
  );
};

export default RadLoginPage;
