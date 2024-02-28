import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PatientSignup.css";

const PatientSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const onRectangleClick = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Check if all fields are filled
    if (
      !firstName ||
      !lastName ||
      !addressLine1 ||
      !emailAddress ||
      !country ||
      !state ||
      !city
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Check if email is valid
    if (!validateEmail(emailAddress)) {
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
    localStorage.setItem('email', emailAddress)

    // Proceed to next step
    navigate("/patient-signup-2");
  }, [
    navigate,
    firstName,
    lastName,
    addressLine1,
    emailAddress,
    country,
    state,
    city,
    validateEmail,
  ]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="patient-signup-1">
      <img className="vector-icon33" alt="" />
      <div className="patient-signup-1-child" />
      <div className="patient-signup-1-item" />
      <img
        className="users-background-5-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="patient-signup-1-inner" onClick={onRectangleClick} />
      <b className="login5" onClick={onRectangleClick}>
        Login
      </b>
      <div
        className="already-have-an3"
        onClick={onRectangleClick}
      >
        {" "}
        Already have an account?
      </div>
      <div className="text-fieldoutlined21">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined22">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle name"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined23">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined24">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address line 1"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined25">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined26">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address line 2"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined27">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined28">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined29">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <input
              type="text"
              className="label21"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container3">
        <p className="patient">Sign up AS</p>
        <p className="patient">patient</p>
      </div>
      <div className="patient-signup-1-child1" />
      <div className="patient-signup-1-child2" />
      <div className="patient-signup-1-child3" />
      <div className="patient-signup-1-child4" />
      <div
        className="patient-signup-1-child5"
        onClick={onRectangle1Click}
      />
      <b className="next2" onClick={onRectangle1Click}>
        Next
      </b>
      <div
        className="patient-signup-1-child6"
        onClick={onRectangle2Click}
      />
      <b className="back11" onClick={onRectangle2Click}>
        Back
      </b>
    </div>
  );
};

export default PatientSignup;
