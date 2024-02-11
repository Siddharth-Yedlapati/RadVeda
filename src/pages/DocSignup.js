import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DocSignup.css";

const DocSignup = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/doc-signup-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
      <b className="login9">Login</b>
      <div className="already-have-an7"> Already have an account?</div>
      <div className="text-fieldoutlined50">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">First name</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined51">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Middle name</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined52">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Last name</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined53">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Address line 1</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined54">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Email address</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined55">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Address line 2</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined56">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">Country</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s11"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined57">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">State</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s12"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined58">
        <div className="input50">
          <div className="content55">
            <div className="min-height50" />
            <div className="label50">City</div>
          </div>
        </div>
        <div className="helpertext50">
          <div className="helper-text50">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s13"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as5">Sign up AS Doctor</div>
      <div className="doc-signup-1-child1" />
      <div className="doc-signup-1-child2" />
      <div className="doc-signup-1-child3" />
      <div className="doc-signup-1-child4" />
      <div className="doc-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next5">Next</b>
      <div className="doc-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back31">Back</b>
    </div>
  );
};

export default DocSignup;
