import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./DocSignup.css";

const DocSignup = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })
  }
  
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [addressLine1, setAddressLine1] = useState("");

  const onRectangleClick = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    // Check if all fields are filled
    if (!firstName || !lastName || !email || !country || !state || !city || !addressLine1) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    localStorage.setItem('firstname', firstName)
    localStorage.setItem('middlename', middleName)
    localStorage.setItem('lastname', lastName)
    localStorage.setItem('addressL1', addressLine1)
    localStorage.setItem('addressL2', addressLine2)
    localStorage.setItem('country', country)
    localStorage.setItem('state', state)
    localStorage.setItem('city', city)
    localStorage.setItem('email', email)


    navigate("/doc-signup-2");
  }, [navigate, firstName, lastName, email, country, state, city, addressLine1, addressLine2]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="doc-signup-1">
      <img className="vector-icon77" alt="" />
      <div className="doc-signup-1-child" />
      <div className="doc-signup-1-item" />
      <img
        className="users-background-5-icon3"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="doc-signup-1-inner" onClick={onRectangleClick} />
      <b className="login9" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an7" onClick={onRectangleClick}> Already have an account?</div>
      <div className="text-fieldoutlined50">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined51">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined52">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined53">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="Address Line 1"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined54">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined55">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              placeholder="Address Line 2"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined56">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined57">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
        </div>
      </div>
      <div className="text-fieldoutlined58">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <input
              type="text"
              className="label50"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
      </div>
      <div className="sign-up-as5">Sign up AS Doctor</div>
      <div className="doc-signup-1-child1" />
      <div className="doc-signup-1-child2" />
      <div className="doc-signup-1-child3" />
      <div className="doc-signup-1-child4" />
      <div className="doc-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next5" onClick={onRectangle1Click}>Next</b>
      <div className="doc-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back31" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default DocSignup;
