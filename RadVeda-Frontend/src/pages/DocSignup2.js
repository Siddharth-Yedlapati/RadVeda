import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DocSignup2.css";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";
import { request, getAuthToken} from "../axios_helper";

window.Buffer = window.Buffer || require("buffer").Buffer;

const DocSignup2 = () => {
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
  const [hospitalAddress1, setHospitalAddress1] = useState("");
  const [hospitalAddress2, setHospitalAddress2] = useState("");
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
    .uploadFile(file, "DOCTOR" + string_delimiter + localStorage.getItem("email") + string_delimiter + file.name)
    .then(data => {
      uploadedFiles.push(data.location);
      setuploadedFiles(uploadedFiles)
    })
    .catch(err => console.error(err))
}

  const onRectangle1Click = useCallback(() => {
    navigate("/doc-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    localStorage.setItem('hospitalName', hospitalName)
    localStorage.setItem('hospitalAddress1', hospitalAddress1)
    localStorage.setItem('hospitalAddress2', hospitalAddress2)
    localStorage.setItem('Documents', JSON.stringify(uploadedFiles))
    navigate("/doc-signup-3");
  }, [navigate, hospitalName, hospitalAddress1, hospitalAddress2, uploadedFiles]);

  const onRectangle3Click = useCallback(() => {
    navigate("/doc-signup-1");
  }, [navigate]);

  return (
    <div className="doc-signup-2">
      <img className="vector-icon79" alt="" />
      <div className="doc-signup-2-child" />
      <div className="doc-signup-2-item" />
      <img
        className="users-background-6-icon1"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined64">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Hospital/Clinic"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined65">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalAddress1}
              onChange={(e) => setHospitalAddress1(e.target.value)}
              placeholder="Hospital/Clinic address line 1"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined66">
        <div className="input64">
          <div className="content69">
            <div className="min-height64" />
            <input
              type="text"
              className="label64"
              value={hospitalAddress2}
              onChange={(e) => setHospitalAddress2(e.target.value)}
              placeholder="Hospital/Clinic address line 2"
            />
          </div>
        </div>
        <div className="helpertext64">
          <div className="helper-text64">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as7">Sign up AS Doctor</div>
      <div className="doc-signup-2-inner" />
      <div className="doc-signup-2-child1" />
      <div className="doc-signup-2-child2" />
      <div className="doc-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s14"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="doc-signup-2-child4" >
        
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      </div> 
    
      <div className="doc-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login11" onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an9" onClick={onRectangle1Click}> Already have an account?</div>
      <div className="doc-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next6" onClick={onRectangle2Click}>Next</b>
      <div className="doc-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back33" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default DocSignup2;
