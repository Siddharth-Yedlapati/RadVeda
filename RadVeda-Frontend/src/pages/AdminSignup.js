import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./AdminSignup.css";

const AdminSignup = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        navigate("/admin-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        navigate("/su-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        navigate("/rad-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        navigate("/labstaff-dashboard");
      }).catch(error => {
        
      })
  }

  
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Check if all fields are filled
    if (!firstName || !lastName || !emailAddress || !country || !state || !city || !addressLine1) {
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

    navigate("/admin-signup-2");
  }, [navigate, firstName, lastName, emailAddress, country, state, city, addressLine1]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="admin-signup-1">
      <img className="vector-icon164" alt="" />
      <div className="admin-signup-1-child" />
      <div className="admin-signup-1-item" />
      <img
        className="users-background-5-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="admin-signup-1-inner" onClick={onRectangleClick} />
      <b className="login15" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an11" onClick={onRectangleClick}> Already have an account?</div>
      <div className="text-fieldoutlined83">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined84">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined85">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined86">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address line 1"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined87">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email address"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined88">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address line 2"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined89">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s21"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined90">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s22"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined91">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <input
              type="text"
              className="label84"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s23"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as-container6">
        <p className="sign-up-as9">Sign up AS</p>
        <p className="sign-up-as9">admin</p>
      </div>
      <div className="admin-signup-1-child1" />
      <div className="admin-signup-1-child2" />
      <div className="admin-signup-1-child3" />
      <div className="admin-signup-1-child4" />
      <div className="admin-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next8" onClick={onRectangle1Click}>Next</b>
      <div className="admin-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back67" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default AdminSignup;
