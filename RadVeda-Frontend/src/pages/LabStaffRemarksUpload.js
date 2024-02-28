import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./LabStaffRemarksUpload.css";

const LabStaffRemarksUpload = () => {
  const navigate = useNavigate();

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
    useEffect(() => {navigate("/labstaff-login-page");}) 
  }

  

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
