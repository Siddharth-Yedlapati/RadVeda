import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientSignup2.css";

const PatientSignup2 = () => {
  const navigate = useNavigate();

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
            <div className="label75">Date of Birth</div>
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
            <div className="label75">Gender</div>
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
            <div className="label75">Ethnicity</div>
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s16"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined77">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <div className="label75">Marital status</div>
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s17"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
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
      <b className="login13">Login</b>
      <div className="already-have-an10"> Already have an account?</div>
      <div className="patient-signup-2-child6" onClick={onRectangle3Click} />
      <b className="next7">Next</b>
      <div className="patient-signup-2-child7" onClick={onRectangle4Click} />
      <b className="back57">Back</b>
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
      <div className="text-fieldoutlined78">
        <div className="input75">
          <div className="content80">
            <div className="min-height75" />
            <div className="label75">Race</div>
          </div>
        </div>
        <div className="helpertext75">
          <div className="helper-text75">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s19"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
    </div>
  );
};

export default PatientSignup2;
