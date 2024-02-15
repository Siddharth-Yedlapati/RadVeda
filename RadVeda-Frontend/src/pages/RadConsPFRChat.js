import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadConsPFRChat.css";

const RadConsPFRChat = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-cons-pfr");
  }, [navigate]);

  return (
    <div className="rad-cons-pfr-chat">
      <img className="image-14-icon1" alt="" src="/image-14@2x.png" />
      <div className="rad-cons-pfr-chat-child" />
      <div className="rad-cons-pfr-chat-item" />
      <div className="rad-cons-pfr-chat-inner" />
      <div className="rad-cons-pfr-chat-child1" />
      <div className="rad-cons-pfr-chat-inner1" onClick={onFrameContainerClick}>
        <div className="frame-child28" />
      </div>
    </div>
  );
};

export default RadConsPFRChat;
