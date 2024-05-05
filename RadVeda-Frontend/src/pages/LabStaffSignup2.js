import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LabStaffSignup2.css";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";
import { request, getAuthToken} from "../axios_helper";

window.Buffer = window.Buffer || require("buffer").Buffer;

const LabStaffSignup2 = () => {
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
  
  const [hospitalLab, setHospitalLab] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState([]);
  const ref = useRef()

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
      uploadedFiles.push(data.location);
      setuploadedFiles(uploadedFiles)
    })
    .catch(err => console.error(err))
}

  const onRectangle1Click = useCallback(() => {
    navigate("/labstaff-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    localStorage.setItem('hospitalLab', hospitalLab)
    localStorage.setItem('hospitalAddress1', addressLine1)
    localStorage.setItem('hospitalAddress2', addressLine2)
    localStorage.setItem('Documents', JSON.stringify(uploadedFiles))
    navigate("/labstaff-signup-1");
  }, [navigate, hospitalLab, addressLine1, addressLine2, uploadedFiles]);

  const onRectangle3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="labstaff-signup-2">
      <img className="vector-icon2" alt="" />
      <div className="labstaff-signup-2-child" />
      <div className="labstaff-signup-2-item" />
      <img
        className="users-background-6-icon"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined14">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <input
              type="text"
              value={hospitalLab}
              onChange={(e) => setHospitalLab(e.target.value)}
              className="label14"
              placeholder="Hospital/Lab"
            />
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined15">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <input
              type="text"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="label14"
              placeholder="Hospital/Lab address line 1"
            />
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined16">
        <div className="input14">
          <div className="content14">
            <div className="min-height14" />
            <input
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="label14"
              placeholder="Hospital/Lab address line 2"
            />
          </div>
        </div>
        <div className="helpertext14">
          <div className="helper-text14">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as-container2">
        <p className="sign-up-as2">Sign up AS</p>
        <p className="sign-up-as2">lab staff</p>
      </div>
      <div className="labstaff-signup-2-inner" />
      <div className="labstaff-signup-2-child1" />
      <div className="labstaff-signup-2-child2" />
      <div className="labstaff-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s3"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="labstaff-signup-2-child4" >
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      </div>
      
      <div className="labstaff-signup-2-child7" onClick={onRectangle1Click} />
      <b className="login2" onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an2" onClick={onRectangle1Click}> Already have an account?</div>
      <div className="labstaff-signup-2-child8" onClick={onRectangle2Click} />
      <b className="next1" onClick={onRectangle2Click}>Next</b>
      <div className="labstaff-signup-2-child9" onClick={onRectangle3Click} />
      <b className="back2" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default LabStaffSignup2;
