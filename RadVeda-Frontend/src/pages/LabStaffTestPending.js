import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";

import "./LabStaffTestPending.css";

const LabStaffTestPending = () => {
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

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState([]);
  

  var base_url = "https://radveda.s3.ap-south-1.amazonaws.com/"
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    console.log(uploadedFiles)
    ReactS3Client
    .uploadFile(file, "LABSTAFF" + string_delimiter + localStorage.getItem("email") + string_delimiter + file.name)
    .then(data => {
      console.log(data)
      uploadedFiles.push(data.location);
      request(
        "POST",
        "http://localhost:9200/images/addOriginalImage",
        {
          "testID": localStorage.getItem("currentTestID"),
          "imageURL": data.location
        },
        true
      ).then((response) => {
        alert(response.data)
        request(
          "POST",
          "http://localhost:9192/tests/updateTestStatus", 
          {
            "testID": localStorage.get("currentTestID"),
            "PatientStatus": "Pending For Review By Radiologist",
            "DoctorStatus": "Pending For Review By Radiologist",
            "RadiologistStatus": "Pending for Review",
            "LabStaffStatus": "Test Completed"
          },
          true
        )
      }).then((response) => {
        navigate("/labstaff-dashboard")
        console.log(response)
      }).catch((error) => {
        alert(error.response.data.error);
      })
      setuploadedFiles(uploadedFiles)
    })
    .catch(err => console.error(err))
}


  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/labstaff-dashboard");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/labstaff-remarks-upload");
  }, [navigate]);

  return (
    <>
      <div className="labstaff-test-pending">
        <div className="labstaff-test-pending-child" />
        <img className="vector-icon4" alt="" />
        <img
          className="labstaff-test-pending-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing">
          <img className="vector-icon5" alt="" src="/vector.svg" />
          <img className="vector-icon6" alt="" src="/vector.svg" />
          <img className="vector-icon7" alt="" />
          <div className="iconnotification-bing-child" />
          <div className="div">03</div>
        </div>
        <img className="need-help-icon" alt="" src="/need-help.svg" />
        <div className="labstaff-test-pending-inner" />
        <div className="frame-div" />
        <div className="test-details-parent">
          <b className="test-details">Test Details</b>
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
        <div
          className="labstaff-test-pending-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper">
            <div className="upload-remarks">Back</div>
          </div>
        </div>
        <div
          className="labstaff-test-pending-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="upload-remarks-wrapper">
            <div className="upload-remarks">Upload Remarks</div>
          </div>
        </div>
        <div className="labstaff-test-pending-inner3">
          <div className="upload-images-wrapper">
            <div className="upload-remarks">
            <input type="file" onChange={handleFileInput}/>
            <br></br>
            <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
            </div>
          </div>
        </div>
      </div>
      {isNPUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNPUserOptions}
        >
          <NPUserOptions onClose={closeNPUserOptions} />
        </PortalPopup>
      )}
    </>
  );
};

export default LabStaffTestPending;
