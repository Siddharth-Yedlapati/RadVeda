import { request, getAuthToken} from "../axios_helper";
import "./DocConsPFREditor.css";

const DocConsPFREditor = () => {

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

  return (
    <div className="doc-cons-pfr-editor">
      <img className="image-13-icon5" alt="" src="/image-13@2x.png" />
      <div className="doc-cons-pfr-editor-inner">
        <div className="back-wrapper28">
          <div className="back43">Back</div>
        </div>
      </div>
    </div>
  );
};

export default DocConsPFREditor;
