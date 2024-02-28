import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocOwnPFRBREditor.css";

const DocOwnPFRBREditor = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/doc-login-page");}) 
  }

  return (
    <div className="doc-own-pfrbr-editor">
      <img className="image-13-icon6" alt="" src="/image-13@2x.png" />
      <div className="doc-own-pfrbr-editor-inner">
        <div className="back-wrapper34">
          <div className="back49">Back</div>
        </div>
      </div>
    </div>
  );
};

export default DocOwnPFRBREditor;
