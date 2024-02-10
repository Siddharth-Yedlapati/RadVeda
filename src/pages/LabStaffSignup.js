import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffSignup.css";

const LabStaffSignup = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-signup-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-type-selection");
  }, [navigate]);

  return (
    <div className="labstaff-signup-1">
      <img className="vector-icon" alt="" />
      <div className="labstaff-signup-1-child" />
      <div className="labstaff-signup-1-item" />
      <img
        className="users-background-5-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="labstaff-signup-1-inner" onClick={onRectangleClick} />
      <b className="login">Login</b>
      <div className="already-have-an"> Already have an account?</div>
      <div className="text-fieldoutlined">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">First name</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined1">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Middle name</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined2">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Last name</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined3">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Address line 1</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined4">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Email address</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined5">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Address line 2</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined6">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">Country</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined7">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">State</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s1"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined8">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <div className="label">City</div>
          </div>
        </div>
        <div className="helpertext">
          <div className="helper-text">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s2"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as-container">
        <p className="sign-up-as">Sign up AS</p>
        <p className="sign-up-as">LAB STAFF</p>
      </div>
      <div className="line-div" />
      <div className="ellipse-div" />
      <div className="labstaff-signup-1-child1" />
      <div className="labstaff-signup-1-child2" />
      <div className="rectangle-div" onClick={onRectangle1Click} />
      <b className="next">Next</b>
      <div className="labstaff-signup-1-child3" onClick={onRectangle2Click} />
      <b className="back">Back</b>
    </div>
  );
};

export default LabStaffSignup;
