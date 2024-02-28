import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LabStaffSignup.css";

const LabStaffSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Validate fields
    if (!firstName || !lastName || !email || !addressLine1 || !country || !state || !city) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    localStorage.setItem('firstname', firstName)
    localStorage.setItem('middlename', middleName)
    localStorage.setItem('lastname', lastName)
    localStorage.setItem('addressLine1', addressLine1)
    localStorage.setItem('addressLine2', addressLine2)
    localStorage.setItem('country', country)
    localStorage.setItem('state', state)
    localStorage.setItem('city', city)
    localStorage.setItem('email', email)
    // Proceed to the next step if all validations pass
    navigate("/labstaff-signup-2");
  }, [navigate, firstName, lastName, email, addressLine1, country, state, city]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
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
      <b className="login" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an" onClick={onRectangleClick}> Already have an account?</div>
      <div className="text-fieldoutlined">
        <div className="input">
          <div className="content">
            <div className="min-height" />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="label"
              placeholder="First name"
            />
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
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="label"
              placeholder="Middle name"
            />
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
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="label"
              placeholder="Last name"
            />
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
            <input
              type="text"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="label"
              placeholder="Address line 1"
            />
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
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="label"
              placeholder="Email address"
            />
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
            <input
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="label"
              placeholder="Address line 2"
            />
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
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="label"
              placeholder="Country"
            />
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
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="label"
              placeholder="State"
            />
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
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="label"
              placeholder="City"
            />
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
      <b className="next" onClick={onRectangle1Click}>Next</b>
      <div className="labstaff-signup-1-child3" onClick={onRectangle2Click} />
      <b className="back" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default LabStaffSignup;
