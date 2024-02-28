import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RadConsPFRBDEditor.css";

const RadConsPFRBDEditor = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/rad-login-page");}) 
  }

  return (
    <div className="rad-cons-pfrbd-editor">
      <img className="image-13-icon" alt="" src="/image-13@2x.png" />
      <div className="rad-cons-pfrbd-editor-inner">
        <div className="back-wrapper5">
          <div className="back16">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadConsPFRBDEditor;
