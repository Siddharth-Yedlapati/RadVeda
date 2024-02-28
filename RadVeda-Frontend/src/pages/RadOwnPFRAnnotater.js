import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadOwnPFRAnnotater.css";

const RadOwnPFRAnnotater = () => {
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
    navigate("/rad-own-pfr");
  }, [navigate]);

  return (
    <div className="rad-own-pfr-annotater">
      <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
      <div
        className="rad-own-pfr-annotater-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-wrapper13">
          <div className="back24">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadOwnPFRAnnotater;
