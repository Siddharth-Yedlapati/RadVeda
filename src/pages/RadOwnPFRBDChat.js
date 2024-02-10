import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadOwnPFRBDChat.css";

const RadOwnPFRBDChat = () => {
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
