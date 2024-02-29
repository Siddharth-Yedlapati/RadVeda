import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./PatientGaurdianInfo.css";

const PatientGaurdianInfo = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        navigate("/admin-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        navigate("/su-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        navigate("/rad-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        navigate("/labstaff-dashboard");
      }).catch(error => {
        
      })

  }
  

  const onRectangleClick = useCallback(() => {
    navigate("/patient-signup-3");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-guardian-info-1");
  }, [navigate]);

  return (
    <div className="patient-gaurdian-info-2">
      <img className="vector-icon36" alt="" />
      <div className="patient-gaurdian-info-2-child" />
      <div className="patient-gaurdian-info-2-item" />
      <img
        className="users-background-7-icon2"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div
        className="patient-gaurdian-info-2-inner"
        onClick={onRectangleClick}
      />
      <b className="next4">Next</b>
      <div
        className="patient-gaurdian-info-2-child1"
        onClick={onRectangle1Click}
      />
      <b className="login8">Login</b>
      <div className="already-have-an6"> Already have an account?</div>
      <div
        className="patient-gaurdian-info-2-child2"
        onClick={onRectangle2Click}
      />
      <b className="back14">Back</b>
      <div className="guardian-info1">Guardian Info</div>
      <div className="text-fieldoutlined44">
        <div className="input44">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Confirm password</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity2">Phone number validity status</div>
      <div className="text-fieldoutlined45">
        <div className="input44">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Confirm password</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="age-verification-status">Age verification status</div>
      <div className="text-fieldoutlined46">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Phone number</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined47">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Relationship to patient</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="patient-gaurdian-info-2-child3" />
      <div className="patient-gaurdian-info-2-child4" />
      <div className="patient-gaurdian-info-2-child5" />
      <div className="text-fieldoutlined48">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Date of Birth</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined49">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Gender</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="patient-gaurdian-info-2-child6" />
      <b className="upload-government-id"> Upload government ID</b>
      <div className="patient-gaurdian-info-2-child7" />
      <div className="patient-gaurdian-info-2-child8" />
      <img
        className="patient-gaurdian-info-2-child9"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="maxresdefault-2-icon"
        alt=""
        src="/maxresdefault-2@2x.png"
      />
      <img
        className="iconsregularchevron-down-s10"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
    </div>
  );
};

export default PatientGaurdianInfo;
