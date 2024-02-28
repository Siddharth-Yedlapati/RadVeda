import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./DocOwnChatInterface.css";

const DocOwnChatInterface = () => {

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
    navigate("/doc-own-pfr");
  }, [navigate]);

  return (
    <div className="doc-own-chat-interface">
      <div className="image-14-group">
        <img className="image-14-icon5" alt="" src="/image-14@2x.png" />
        <div className="frame-child271" />
        <div className="frame-child272" />
        <div className="frame-child273" />
        <div className="frame-child274" />
        <div className="rectangle-wrapper1" onClick={onFrameContainerClick}>
          <div className="frame-child275" />
        </div>
      </div>
    </div>
  );
};

export default DocOwnChatInterface;
