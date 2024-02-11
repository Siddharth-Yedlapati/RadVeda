import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientSignup.css";

const PatientSignup = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-signup-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-type-selection");
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
      <b className="login5" onClick={onRectangleClick}>Login</b>
      <div className="already-have-an3" onClick={onRectangleClick}> Already have an account?</div>
      <div className="text-fieldoutlined21">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <div className="label21">First name</div>
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
            <div className="label21">Middle name</div>
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
            <div className="label21">Last name</div>
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
            <div className="label21">Address line 1</div>
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
            <div className="label21">Email address</div>
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
            <div className="label21">Address line 2</div>
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
            <div className="label21">Country</div>
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s4"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined28">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <div className="label21">State</div>
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s5"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined29">
        <div className="input21">
          <div className="content25">
            <div className="min-height21" />
            <div className="label21">City</div>
          </div>
        </div>
        <div className="helpertext21">
          <div className="helper-text21">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s6"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as-container3">
        <p className="patient">Sign up AS</p>
        <p className="patient">patient</p>
      </div>
      <div className="patient-signup-1-child1" />
      <div className="patient-signup-1-child2" />
      <div className="patient-signup-1-child3" />
      <div className="patient-signup-1-child4" />
      <div className="patient-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next2" onClick={onRectangle1Click} >Next</b>
      <div className="patient-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back11" onClick={onRectangle2Click}>Back</b>
    </div>
  );
};

export default PatientSignup;
