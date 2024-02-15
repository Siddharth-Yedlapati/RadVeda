import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientGuardianInfo.css";

const PatientGuardianInfo = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-gaurdian-info-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-signup-2");
  }, [navigate]);

  return (
    <div className="patient-guardian-info-1">
      <img className="vector-icon34" alt="" />
      <div className="patient-guardian-info-1-child" />
      <div className="patient-guardian-info-1-item" />
      <img
        className="users-background-5-icon2"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="patient-guardian-info-1-inner" />
      <div className="patient-guardian-info-1-child1" />
      <div className="patient-guardian-info-1-child2" />
      <div
        className="patient-guardian-info-1-child3"
        onClick={onRectangleClick}
      />
      <b className="login6">Login</b>
      <div className="already-have-an4"> Already have an account?</div>
      <div className="text-fieldoutlined30">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">First name</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined31">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Middle name</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined32">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Last name</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined33">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Address line 1</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined34">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Email address</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined35">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Address line 2</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined36">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">Country</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s7"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined37">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">State</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s8"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined38">
        <div className="input30">
          <div className="content34">
            <div className="min-height30" />
            <div className="label30">City</div>
          </div>
        </div>
        <div className="helpertext30">
          <div className="helper-text30">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s9"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="guardian-info">Guardian info</div>
      <div
        className="patient-guardian-info-1-child4"
        onClick={onRectangle1Click}
      />
      <b className="next3">Next</b>
      <div
        className="patient-guardian-info-1-child5"
        onClick={onRectangle2Click}
      />
      <b className="back12">Back</b>
    </div>
  );
};

export default PatientGuardianInfo;
