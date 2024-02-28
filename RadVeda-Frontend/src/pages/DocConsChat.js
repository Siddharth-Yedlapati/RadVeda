import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./DocConsChat.css";

const DocConsChat = () => {

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

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-cons-pfr");
  }, [navigate]);

  return (
    <div className="doc-cons-chat">
      <div className="image-14-parent">
        <img className="image-14-icon4" alt="" src="/image-14@2x.png" />
        <div className="frame-child213" />
        <div className="frame-child214" />
        <div className="frame-child215" />
        <div className="frame-child216" />
        <div className="rectangle-frame" onClick={onFrameContainerClick}>
          <div className="frame-child217" />
        </div>
      </div>
    </div>
  );
};

export default DocConsChat;
