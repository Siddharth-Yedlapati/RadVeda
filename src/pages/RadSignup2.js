import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadSignup2.css";

const RadSignup2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/rad-signup-3");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/rad-signup-1");
  }, [navigate]);

  return (
    <div className="rad-signup-2">
      <img className="vector-icon202" alt="" />
      <div className="rad-signup-2-child" />
      <div className="rad-signup-2-item" />
      <img
        className="users-background-6-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined116">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <div className="label117">Hospital/Lab</div>
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined117">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <div className="label117">Hospital/Lab address line 1</div>
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined118">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <div className="label117">Hospital/Lab address line 2</div>
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as14">Sign up AS radiologist</div>
      <div className="rad-signup-2-inner" />
      <div className="rad-signup-2-child1" />
      <div className="rad-signup-2-child2" />
      <div className="rad-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s28"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="rad-signup-2-child4" />
      <b className="upload-documents-for3">
        {" "}
        Upload documents for verification
      </b>
      <div className="rad-signup-2-child5" />
      <div className="rad-signup-2-child6" />
      <img className="rad-signup-2-child7" alt="" src="/arrow-1.svg" />
      <div className="rad-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login21"onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an16"onClick={onRectangle1Click}> Already have an account?</div>
      <div className="rad-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next11" onClick={onRectangle2Click}>Next</b>
      <div className="rad-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back79" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default RadSignup2;
