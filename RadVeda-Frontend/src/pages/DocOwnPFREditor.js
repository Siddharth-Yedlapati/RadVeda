import { request, getAuthToken} from "../axios_helper";
import "./DocOwnPFREditor.css";

const DocOwnPFREditor = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    navigate("/doc-login-page");
  }

  return (
    <div className="doc-own-pfr-editor">
      <img className="image-13-icon7" alt="" src="/image-13@2x.png" />
      <div className="doc-own-pfr-editor-inner">
        <div className="back-wrapper35">
          <div className="back50">Back</div>
        </div>
      </div>
    </div>
  );
};

export default DocOwnPFREditor;
