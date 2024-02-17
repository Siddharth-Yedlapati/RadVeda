import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientSignup2.css";

const PatientSignup2 = () => {
  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [race, setRace] = useState("");

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-guardian-info-1");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/patient-signup-3");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/patient-signup-1");
  }, [navigate]);

  const onSubmit = () => {
    // Add validation logic here
    navigate("/patient-signup-3");
  };

  return (
    <div className="patient-signup-2">
      <img className="vector-icon146" alt="" />
      <div className="patient-signup-2-child" />
      <div className="patient-signup-2-item" />
      <img
        className="users-background-6-icon2"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined74">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <input
              type="date"
              className="label75"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date of Birth"
            />
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined75">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <select
              className="label75"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined76">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <input
              type="text"
              className="label75"
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              placeholder="Ethnicity"
            />
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined77">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <select
              className="label75"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Select Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined78">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <input
              type="text"
              className="label75"
              value={race}
              onChange={(e) => setRace(e.target.value)}
              placeholder="Race"
            />
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container5">
        <p className="sign-up-as8">Sign up AS</p>
        <p className="sign-up-as8">patient</p>
      </div>
      <div className="patient-signup-2-inner" />
      <b className="upload-government-id1"> Upload government ID</b>
      <div className="patient-signup-2-child1" />
      <div className="patient-signup-2-child2" />
      <img className="patient-signup-2-child3" alt="" src="/arrow-1.svg" />
      <div className="patient-signup-2-child4" onClick={onRectangle1Click} />
      <b className="fill-up-guardian">Fill up guardian info</b>
      <div className="patient-signup-2-child5" onClick={onRectangle2Click} />
      <b className="login13" onClick={onRectangle2Click}>Login</b>
      <div className="already-have-an10" onClick={onRectangle2Click}> Already have an account?</div>
      <div className="patient-signup-2-child6" onClick={onRectangle3Click} />
      <b className="next7" onClick={onRectangle3Click}>Next</b>
      <div className="patient-signup-2-child7" onClick={onRectangle4Click} />
      <b className="back57" onClick={onRectangle4Click}>Back</b>
      <img className="patient-signup-2-child8" alt="" />
      <div className="patient-signup-2-child9" />
      <div className="patient-signup-2-child9" />
      <div className="patient-signup-2-child11" />
      <div className="patient-signup-2-child12" />
      <img
        className="maxresdefault-1-icon"
        alt=""
        src="/maxresdefault-1@2x.png"
      />
      <img
        className="iconsregularchevron-down-s18"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="iconsregularchevron-down-s19" />
    </div>
  );
};

export default PatientSignup2;