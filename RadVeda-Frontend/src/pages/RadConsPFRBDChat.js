import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadConsPFRBDChat.css";

const RadConsPFRBDChat = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-cons-pfr-doc");
  }, [navigate]);

  return (
    <div className="rad-cons-pfrbd-chat">
      <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      <div className="rad-cons-pfrbd-chat-child" />
      <div className="rad-cons-pfrbd-chat-item" />
      <div className="rad-cons-pfrbd-chat-inner" />
      <div className="rad-cons-pfrbd-chat-child1" />
      <div
        className="rad-cons-pfrbd-chat-inner1"
        onClick={onFrameContainerClick}
      >
        <div className="frame-child27" />
      </div>
    </div>
  );
};

export default RadConsPFRBDChat;
