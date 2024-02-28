import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPFRBDEditor.css";

const RadOwnPFRBDEditor = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/rad-login-page");
      })
  }
  else
  {
    navigate("/rad-login-page");
  }

  return (
    <div className="rad-own-pfrbd-editor">
      <img className="image-13-icon2" alt="" src="/image-13@2x.png" />
      <div className="rad-own-pfrbd-editor-inner">
        <div className="back-wrapper15">
          <div className="back26">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadOwnPFRBDEditor;
