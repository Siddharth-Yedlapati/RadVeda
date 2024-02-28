import { request, getAuthToken} from "../axios_helper";
import "./DocConsPFRBREditor.css";

const DocConsPFRBREditor = () => {

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
    <div className="doc-cons-pfrbr-editor">
      <img className="image-13-icon4" alt="" src="/image-13@2x.png" />
      <div className="doc-cons-pfrbr-editor-inner">
        <div className="back-wrapper27">
          <div className="back42">Back</div>
        </div>
      </div>
    </div>
  );
};

export default DocConsPFRBREditor;
