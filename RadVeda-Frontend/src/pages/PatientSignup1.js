import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./PatientSignup1.css";

const PatientSignup1 = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
  }
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-signup-2");
  }, [navigate]);

  const onSubmit = () => {
    localStorage.setItem('password', password)
    localStorage.setItem('phoneNumber', phoneNumber)
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
    request(
      "POST",
      "/patientSignUp",
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
        "DOB": localStorage.getItem("DOB"),
        "gender": localStorage.getItem("gender"),
        "race": localStorage.getItem("race"),
        "ethnicity": localStorage.getItem("ethnicity"),
        "maritalstatus": localStorage.getItem("maritalStatus"),
        "Documents": localStorage.getItem("Documents")
        
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
    <div className="patient-signup-3">
      <img className="vector-icon35" alt="" />
      <div className="patient-signup-3-child" />
      <div className="patient-signup-3-item" />
      <img
        className="users-background-7-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="patient-signup-3-inner" onClick={onRectangleClick} />
      <b className="login7" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an5" onClick={onRectangleClick}> Already have an account?</div>
      <div className="patient-signup-3-child1" onClick={onSubmit} />
      <b className="submit" onClick={onSubmit} >Submit</b>
      <div className="patient-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back13" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined39">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <input
              type="password"
              className="label39"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined40">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <input
              type="password"
              className="label39"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined43">
        <div className="input39">
          <div className="content43">
            <div className="min-height39" />
            <input
              type="tel"
              className="label39"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/, ""); // Allow only numeric values
                setPhoneNumber(value);
              }}
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="helpertext39">
          <div className="helper-text39">Helper text</div>
        </div>
      </div>
      <div className="your-password-must1">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
      <div className="patient-signup-3-child3" />
      <div className="patient-signup-3-child4" />
      <div className="patient-signup-3-child5" />
      <div className="patient-signup-3-child6" />
    </div>
  );
};

export default PatientSignup1;
