import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffSignup1.css";

const LabStaffSignup1 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/labstaff-signup-2");
  }, [navigate]);

  const onSubmit = () => {
    if (password !== confirmPassword) {
      alert("Password mismatch!");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Your password must be at least 8 characters long and should contain at least 1 uppercase, 1 lowercase, 1 numeric, and 1 special character");
      return;
    }

    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits!");
      return;
    }
    navigate("/labstaff-dashboard");
  };

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
      <div className="labstaff-signup-3-child1" onClick={onSubmit} />
      <b className="submit-sign-up" onClick={onSubmit}>Submit sign up request</b>
      <div className="labstaff-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back1" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined9">
        <div className="input9">
          <div className="content9">
            <div className="min-height9" />
            <input
              type="password"
              className="label9"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
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
            <input
              type="password"
              className="label9"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
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
   
      <div className="text-fieldoutlined13">
        <div className="input9">
          <div className="content9">
            <div className="min-height9" />
            <input
              type="text"
              className="label9"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/, ""); // Allow only numeric values
                setPhoneNumber(value);
              }}
              placeholder="Phone number"
            />
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
