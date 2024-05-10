import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from '../axios_helper';
import "./LabStaffSignup1.css";

const LabStaffSignup1 = () => {
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

  const [agreeTerms, setAgreeTerms] = useState(false); // State variable for checkbox

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const onSubmit = () => {

    if (!agreeTerms) {
      alert("Please give the required consent.");
      return;
    }
    
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
    const doc_request = JSON.parse(localStorage.getItem("Documents"));
    request(
      "POST",
      "/labstaffSignUp",
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
        "orgName" : localStorage.getItem('hospitalLab'),
        "orgAddressL1" : localStorage.getItem('hospitalAddress1'),
        "orgAddressL2" : localStorage.getItem('hospitalAddress2'),
        "Documents" : doc_request
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
      <div className="checkbox-container1">
        <input
          type="checkbox"
          id="agreeTerms"
          checked={agreeTerms}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agreeTerms"> I hereby give consent to concerned 
users of RadVeda to view my name, organisation I am affiliated to (if applicable), gender, and 
age.</label>
      </div>
    </div>
  );
};

export default LabStaffSignup1;
