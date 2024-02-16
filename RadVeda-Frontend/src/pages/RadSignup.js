import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RadSignup.css";

const RadSignup = () => {
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

  const navigateToLogin = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const navigateToNextStep = useCallback(() => {
    navigate("/rad-signup-2");
  }, [navigate]);

  const navigateToPreviousStep = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleNext = () => {
    if (!firstName || !lastName || !email || !addressLine1 || !country || !state || !city) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(firstName) || !/^[a-zA-Z\s]*$/.test(lastName)) {
      alert("Name fields cannot contain numeric characters.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    navigateToNextStep();
  };

  return (
    <div className="rad-signup-1">
      <img className="vector-icon200" alt="" />
      <div className="rad-signup-1-child" />
      <div className="rad-signup-1-item" />
      <img
        className="users-background-5-icon5"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="rad-signup-1-inner" onClick={navigateToLogin} />
      <b className="login19" onClick={navigateToLogin}>Login</b>
      <div className="already-have-an14" onClick={navigateToLogin}> Already have an account?</div>
      <div className="text-fieldoutlined102">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined103">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined104">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined105">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address line 1"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined106">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined107">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address line 2"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined108">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s25"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined109">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s26"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined110">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s27"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as12">Sign up AS radiologist</div>
      <div className="rad-signup-1-child1" />
      <div className="rad-signup-1-child2" />
      <div className="rad-signup-1-child3" />
      <div className="rad-signup-1-child4" />
      <div className="rad-signup-1-child5" onClick={handleNext} />
      <b className="next10" onClick={handleNext}>Next</b>
      <div className="rad-signup-1-child6" onClick={navigateToPreviousStep} />
      <b className="back77" onClick={navigateToPreviousStep}>Back</b>
    </div>
  );
};

export default RadSignup;
