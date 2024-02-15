import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadOwnPFRChat.css";

const RadOwnPFRChat = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-own-pfr");
  }, [navigate]);

  return (
    <div className="rad-own-pfr-chat">
      <img className="image-14-icon3" alt="" src="/image-14@2x.png" />
      <div className="rad-own-pfr-chat-child" />
      <div className="rad-own-pfr-chat-item" />
      <div className="rad-own-pfr-chat-inner" />
      <div className="rad-own-pfr-chat-child1" />
      <div className="rad-own-pfr-chat-inner1" onClick={onFrameContainerClick}>
        <div className="frame-child73" />
      </div>
    </div>
  );
};

export default RadOwnPFRChat;
