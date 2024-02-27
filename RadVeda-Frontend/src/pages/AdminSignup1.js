import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, setAuthHeader } from '../axios_helper';
import "./AdminSignup1.css";

const AdminSignup1 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/admin-signup-2");
  }, [navigate]);

  const onSubmit = () => {
    localStorage.setItem('password', password)
    localStorage.setItem('phoneNumber', phoneNumber)
    //console.log(password)
    //console.log(confirmPassword)
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
      "/adminSignUp",
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
        "orgAddressL1" : localStorage.getItem('hospitalAddressLine1'),
        "orgAddressL2" : localStorage.getItem('hospitalAddressLine2')
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
    <div className="admin-signup-3">
      <img className="vector-icon165" alt="" />
      <div className="admin-signup-3-child" />
      <div className="admin-signup-3-item" />
      <img
        className="users-background-7-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="admin-signup-3-inner" onClick={onRectangleClick} />
      <b className="login16" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an12" onClick={onRectangleClick}> Already have an account?</div>
      <div className="admin-signup-3-child1" onClick={onSubmit} />
      <b className="submit-sign-up2" onClick={onSubmit}>Submit sign up request</b>
      <div className="admin-signup-3-child2" onClick={onRectangle2Click} />
      <b className="back68" onClick={onRectangle2Click}>Back</b>
      <div className="text-fieldoutlined92">
        <div className="input93">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="text-fieldoutlined93">
        <div className="input93">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="text-fieldoutlined96">
        <div className="input93">
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="your-password-must3">
        Your password must be at least 8 characters long and should contain at
        least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
      </div>
    </div>
  );
};

export default AdminSignup1;
