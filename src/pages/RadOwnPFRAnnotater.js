import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RadOwnPFRAnnotater.css";

const RadOwnPFRAnnotater = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/rad-own-pfr");
  }, [navigate]);

  return (
    <div className="rad-own-pfr-annotater">
      <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
      <div
        className="rad-own-pfr-annotater-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-wrapper13">
          <div className="back24">Back</div>
        </div>
      </div>
    </div>
  );
};

export default RadOwnPFRAnnotater;
