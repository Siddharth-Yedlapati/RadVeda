import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthHeader, getAuthToken} from '../axios_helper';
import "./RadSignup1.css";

const RadSignup1 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/rad-signup-2");
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
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('hospitalName'))
    request(
      "POST",
      "/radiologistSignUp",
      {
        "firstName" : localStorage.getItem('firstname'),
        "middleName" : localStorage.getItem('middlename'),
        "lastName" : localStorage.getItem('lastname'),
        "addressL1" : localStorage.getItem('addressLine1'),
        "addressL2" : localStorage.getItem('addressLine2'),
        "country" : localStorage.getItem('country'),
        "state" : localStorage.getItem('state'),
        "city" : localStorage.getItem('city'),
        "email" : localStorage.getItem('email'),
        "password" : password,
        "phoneNumber" : phoneNumber,
        "orgName" : localStorage.getItem('hospitalName'),
        "orgAddressL1" : localStorage.getItem('hospitalAddress1'),
        "orgAddressL2" : localStorage.getItem('hospitalAddress2'),
        "Documents" : localStorage.getItem('Documents')
      },
      false
      ).then(
        (response) => {
          alert(response.data);
          navigate("/");
        }
      ).catch(
        (error) => {
          alert(error.response.data.error);
        }
      )
  };

  return (
    <div className="rad-signup-3">
      <img className="vector-icon201" alt="" />
      <div className="rad-signup-3-child" />
      <div className="rad-signup-3-item" />
      <img
        className="users-background-7-icon5"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="rad-signup-3-inner" onClick={onRectangleClick} />
      <b className="login20" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an15" onClick={onRectangleClick}> Already have an account?</div>
      <div className="rad-signup-3-child1" onClick={onSubmit} />
      <b className="submit-sign-up3" onClick={onSubmit}>Submit sign up request</b>
      <div className="rad-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back78" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined111">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <input
              type="password"
              className="label112"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined112">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <input
              type="password"
              className="label112"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined113">
        <div className="input114">
          <div className="content125">
            <div className="min-height112" />
            <input
              type="tel"
              className="label112"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/, ""); // Allow only numeric values
                setPhoneNumber(value);
              }}
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="your-password-must4">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
      <div className="rad-signup-3-child3" />
      <div className="rad-signup-3-child4" />
      <div className="rad-signup-3-child5" />
      <div className="rad-signup-3-child6" />
      <div className="text-fieldoutlined114">
        <div className="input114">
          <div className="content125">
            <div className="min-height112" />
            <input
              type="password"
              className="label112"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined115">
        <div className="input112">
          <div className="content125">
            <div className="min-height112" />
            <input
              type="tel"
              className="label112"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/, ""); // Allow only numeric values
                setPhoneNumber(value);
              }}
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="helpertext112">
          <div className="helper-text112">Helper text</div>
        </div>
      </div>
      <div className="your-password-must4">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default RadSignup1;
