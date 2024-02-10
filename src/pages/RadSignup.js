import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadSignup.css";

const RadSignup = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-signup-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/user-type-selection");
  }, [navigate]);

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
      <div className="rad-signup-1-inner" onClick={onRectangleClick} />
      <b className="login19">Login</b>
      <div className="already-have-an14"> Already have an account?</div>
      <div className="text-fieldoutlined102">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">First name</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined103">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Middle name</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined104">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Last name</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined105">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Address line 1</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined106">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Email address</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined107">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Address line 2</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined108">
        <div className="input103">
          <div className="content116">
            <div className="min-height103" />
            <div className="label103">Country</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
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
            <div className="label103">State</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
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
            <div className="label103">City</div>
          </div>
        </div>
        <div className="helpertext103">
          <div className="helper-text103">Helper text</div>
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
      <div className="rad-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next10">Next</b>
      <div className="rad-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back77">Back</b>
    </div>
  );
};

export default RadSignup;
