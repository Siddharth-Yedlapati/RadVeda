import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSignup.css";

const AdminSignup = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-signup-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-signup-1">
      <img className="vector-icon164" alt="" />
      <div className="admin-signup-1-child" />
      <div className="admin-signup-1-item" />
      <img
        className="users-background-5-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="admin-signup-1-inner" onClick={onRectangleClick} />
      <b className="login15">Login</b>
      <div className="already-have-an11"> Already have an account?</div>
      <div className="text-fieldoutlined83">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">First name</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined84">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Middle name</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined85">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Last name</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined86">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Address line 1</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined87">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Email address</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined88">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Address line 2</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined89">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">Country</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s21"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined90">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">State</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s22"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="text-fieldoutlined91">
        <div className="input84">
          <div className="content90">
            <div className="min-height84" />
            <div className="label84">City</div>
          </div>
        </div>
        <div className="helpertext84">
          <div className="helper-text84">Helper text</div>
        </div>
      </div>
      <img
        className="iconsregularchevron-down-s23"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="sign-up-as-container6">
        <p className="sign-up-as9">Sign up AS</p>
        <p className="sign-up-as9">admin</p>
      </div>
      <div className="admin-signup-1-child1" />
      <div className="admin-signup-1-child2" />
      <div className="admin-signup-1-child3" />
      <div className="admin-signup-1-child4" />
      <div className="admin-signup-1-child5" onClick={onRectangle1Click} />
      <b className="next8">Next</b>
      <div className="admin-signup-1-child6" onClick={onRectangle2Click} />
      <b className="back67">Back</b>
    </div>
  );
};

export default AdminSignup;
