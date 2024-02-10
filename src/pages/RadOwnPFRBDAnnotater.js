import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadOwnPFRBDAnnotater.css";

const RadOwnPFRBDAnnotater = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-own-pfr-doc");
  }, [navigate]);

  return (
    <div className="rad-own-pfrbd-annotater">
      <img className="image-12-icon2" alt="" src="/image-12@2x.png" />
      <div
        className="rad-own-pfrbd-annotater-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-wrapper14">
          <div className="back25">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadOwnPFRBDAnnotater;
