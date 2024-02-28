import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadConsPFRBDAnnotater.css";

const RadConsPFRBDAnnotater = () => {

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

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-cons-pfr-doc");
  }, [navigate]);

  return (
    <div className="rad-cons-pfrbd-annotater">
      <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      <div
        className="rad-cons-pfrbd-annotater-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-wrapper4">
          <div className="back15">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadConsPFRBDAnnotater;
