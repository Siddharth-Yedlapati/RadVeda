import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./LabStaffRemarksUpload.css";

const LabStaffRemarksUpload = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/labstaff-login-page");
      })
  }
  else
  {
    navigate("/labstaff-login-page");
  }

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/labstaff-test-pending");
  }, [navigate]);

  return (
    <div className="labstaff-remarks-upload">
      <img className="image-15-icon" alt="" src="/image-15@2x.png" />
      <div
        className="labstaff-remarks-upload-inner"
        onClick={onFrameContainerClick}
      >
        <div className="back-container">
          <div className="back5">Back</div>
        </div>
      </div>
    </div>
  );
};

export default LabStaffRemarksUpload;
