import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import S3 from 'react-aws-s3';
import "./AdminSignup2.css";
import { string_delimiter, config } from "../config";

window.Buffer = window.Buffer || require("buffer").Buffer;

const AdminSignup2 = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        navigate("/admin-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        navigate("/su-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        navigate("/doc-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        navigate("/rad-dashboard");
      }).catch(error => {
        
      })

    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        navigate("/patient-dashboard");
      }).catch(error => {
        
      })
    
    request(
      "GET",
      "/labstaffs/profile",
      {},
      true
      ).then(response => {
        navigate("/labstaff-dashboard");
      }).catch(error => {
        
      })
  }

  
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddressLine1, setHospitalAddressLine1] = useState("");
  const [hospitalAddressLine2, setHospitalAddressLine2] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState("");
  const ref = useRef()
  



  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    console.log(uploadedFiles)
    ReactS3Client
    .uploadFile(file, "ADMIN" + string_delimiter + localStorage.getItem("email") + string_delimiter + file.name)
    .then(data => setuploadedFiles(uploadedFiles + data.location))
    .catch(err => console.error(err))
}

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    // Here you can perform any necessary validation before navigating
    localStorage.setItem('hospitalName', hospitalName)
    localStorage.setItem('hospitalAddressLine1', hospitalAddressLine1)
    localStorage.setItem('hospitalAddressLine2', hospitalAddressLine2)
    localStorage.setItem('Documents', uploadedFiles)

    navigate("/admin-signup-3");
  }, [navigate, hospitalName, hospitalAddressLine1, hospitalAddressLine2, uploadedFiles]);

  const onRectangle3Click = useCallback(() => {
    navigate("/admin-signup-1");
  }, [navigate]);

  return (
    <div className="admin-signup-2">
      <img className="vector-icon166" alt="" />
      <div className="admin-signup-2-child" />
      <div className="admin-signup-2-item" />
      <img
        className="users-background-6-icon3"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined97">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <input
              type="text"
              className="label98"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Hospital/Clinic/Lab"
            />
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined98">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <input
              type="text"
              className="label98"
              value={hospitalAddressLine1}
              onChange={(e) => setHospitalAddressLine1(e.target.value)}
              placeholder="Hospital/Clinic/Lab address line 1"
            />
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined99">
        <div className="input98">
          <div className="content104">
            <div className="min-height98" />
            <input
              type="text"
              className="label98"
              value={hospitalAddressLine2}
              onChange={(e) => setHospitalAddressLine2(e.target.value)}
              placeholder="Hospital/Clinic/Lab address line 2"
            />
          </div>
        </div>
        <div className="helpertext98">
          <div className="helper-text98">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container8">
        <p className="sign-up-as11">Sign up AS</p>
        <p className="sign-up-as11">admin</p>
      </div>
      <div className="admin-signup-2-inner" />
      <div className="admin-signup-2-child1" />
      <div className="admin-signup-2-child2" />
      <div className="admin-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s24"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      {/* <div className="admin-signup-2-child4" >
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      </div> */}
      <div className="admin-signup-2-child4" onClick={onRectangle2Click} />
      <b className="next9" onClick={onRectangle2Click}>Next</b>
      <div className="admin-signup-2-child5" onClick={onRectangle3Click} />
      <b className="back69" onClick={onRectangle3Click}>Back</b>
      <div className="admin-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login17" onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an13" onClick={onRectangle1Click}> Already have an account?</div>
      <div className="admin-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next9" onClick={onRectangle2Click}>Next</b>
      <div className="admin-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back69" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default AdminSignup2;
