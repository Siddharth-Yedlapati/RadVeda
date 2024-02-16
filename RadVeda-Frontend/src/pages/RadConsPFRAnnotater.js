import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadConsPFRAnnotater.css";

const RadConsPFRAnnotater = () => {
  const navigate = useNavigate();

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
