import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RadOwnPFRBDEditor.css";

const RadOwnPFRBDEditor = () => {
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
