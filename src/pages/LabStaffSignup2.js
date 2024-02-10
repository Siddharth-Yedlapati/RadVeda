import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffSignup2.css";

const LabStaffSignup2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/labstaff-signup-3");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="labstaff-signup-2">
      <img className="vector-icon2" alt="" />
      <div className="labstaff-signup-2-child" />
      <div className="labstaff-signup-2-item" />
      <img
        className="users-background-6-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined14">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <div className="label14">Hospital/Lab</div>
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined15">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <div className="label14">Hospital/Lab address line 1</div>
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined16">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <div className="label14">Hospital/Lab address line 2</div>
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container2">
        <p className="sign-up-as2">Sign up AS</p>
        <p className="sign-up-as2">lab staff</p>
      </div>
      <div className="labstaff-signup-2-inner" />
      <div className="labstaff-signup-2-child1" />
      <div className="labstaff-signup-2-child2" />
      <div className="labstaff-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s3"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="labstaff-signup-2-child4" />
      <b className="upload-documents-for"> Upload documents for verification</b>
      <div className="labstaff-signup-2-child5" />
      <div className="labstaff-signup-2-child6" />
      <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      <div className="labstaff-signup-2-child7" onClick={onRectangle1Click} />
      <b className="login2">Login</b>
      <div className="already-have-an2"> Already have an account?</div>
      <div className="labstaff-signup-2-child8" onClick={onRectangle2Click} />
      <b className="next1">Next</b>
      <div className="labstaff-signup-2-child9" onClick={onRectangle3Click} />
      <b className="back2">Back</b>
    </div>
  );
};

export default LabStaffSignup2;
