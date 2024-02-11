import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSignup2.css";

const AdminSignup2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/admin-signup-3");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/admin-signup-1");
  }, [navigate]);

  return (
    <div className="admin-signup-2">
      <img className="vector-icon166" alt="" />
      <div className="admin-signup-2-child" />
      <div className="admin-signup-2-item" />
      <img
        className="users-background-6-icon3"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined97">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <div className="label98">Hospital/Clinic/Lab</div>
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined98">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <div className="label98">Hospital/Clinic/Lab address line 1</div>
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined99">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <div className="label98">Hospital/Clinic/Lab address line 2</div>
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container8">
        <p className="sign-up-as11">Sign up AS</p>
        <p className="sign-up-as11">admin</p>
      </div>
      <div className="admin-signup-2-inner" />
      <div className="admin-signup-2-child1" />
      <div className="admin-signup-2-child2" />
      <div className="admin-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s24"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="admin-signup-2-child4" />
      <b className="upload-documents-for2">
        {" "}
        Upload documents for verification
      </b>
      <div className="admin-signup-2-child5" />
      <div className="admin-signup-2-child6" />
      <img className="admin-signup-2-child7" alt="" src="/arrow-1.svg" />
      <div className="admin-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login17">Login</b>
      <div className="already-have-an13"> Already have an account?</div>
      <div className="admin-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next9">Next</b>
      <div className="admin-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back69">Back</b>
    </div>
  );
};

export default AdminSignup2;