import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsPFRAnnotater.css";

const RadConsPFRAnnotater = () => {
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

  

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-cons-pfr");
  }, [navigate]);

  return (
    <div className="rad-cons-pfr-annotater">
      <img className="image-12-icon3" alt="" src="/image-12@2x.png" />
      <div
        className="rad-cons-pfr-annotater-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-wrapper65">
          <div className="back90">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadConsPFRAnnotater;
