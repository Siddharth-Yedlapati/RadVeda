import { request, getAuthToken} from "../axios_helper";
import "./RadConsPFREditor.css";

const RadConsPFREditor = () => {

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

  return (
    <div className="rad-cons-pfr-editor">
      <img className="image-13-icon1" alt="" src="/image-13@2x.png" />
      <div className="rad-cons-pfr-editor-inner">
        <div className="back-wrapper6">
          <div className="back17">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadConsPFREditor;
