import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DocSignup2.css";

const DocSignup2 = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress1, setHospitalAddress1] = useState("");
  const [hospitalAddress2, setHospitalAddress2] = useState("");

  const onRectangle1Click = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/doc-signup-3");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/doc-signup-1");
  }, [navigate]);

  return (
    <div className="doc-signup-2">
      <img className="vector-icon79" alt="" />
      <div className="doc-signup-2-child" />
      <div className="doc-signup-2-item" />
      <img
        className="users-background-6-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined64">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Hospital/Clinic"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined65">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalAddress1}
              onChange={(e) => setHospitalAddress1(e.target.value)}
              placeholder="Hospital/Clinic address line 1"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined66">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalAddress2}
              onChange={(e) => setHospitalAddress2(e.target.value)}
              placeholder="Hospital/Clinic address line 2"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as7">Sign up AS Doctor</div>
      <div className="doc-signup-2-inner" />
      <div className="doc-signup-2-child1" />
      <div className="doc-signup-2-child2" />
      <div className="doc-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s14"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="doc-signup-2-child4" />
      <b className="upload-documents-for1">
        {" "}
        Upload documents for verification
      </b>
      <div className="doc-signup-2-child5" />
      <div className="doc-signup-2-child6" />
      <img className="doc-signup-2-child7" alt="" src="/arrow-1.svg" />
      <div className="doc-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login11" onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an9" onClick={onRectangle1Click}> Already have an account?</div>
      <div className="doc-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next6" onClick={onRectangle2Click}>Next</b>
      <div className="doc-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back33" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default DocSignup2;
