import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./RadOwnPFRBDChat.css";

const RadOwnPFRBDChat = () => {

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
    navigate("/rad-login-page");
  }

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-own-pfr-doc");
  }, [navigate]);

  return (
    <div className="rad-own-pfrbd-chat">
      <img className="image-14-icon2" alt="" src="/image-14@2x.png" />
      <div className="rad-own-pfrbd-chat-child" />
      <div className="rad-own-pfrbd-chat-item" />
      <div className="rad-own-pfrbd-chat-inner" />
      <div className="rad-own-pfrbd-chat-child1" />
      <div
        className="rad-own-pfrbd-chat-inner1"
        onClick={onFrameContainerClick}
      >
        <div className="frame-child72" />
      </div>
    </div>
  );
};

export default RadOwnPFRBDChat;
