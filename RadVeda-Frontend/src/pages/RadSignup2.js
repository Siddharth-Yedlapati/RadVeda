import React, { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RadSignup2.css";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";

window.Buffer = window.Buffer || require("buffer").Buffer;

const RadSignup2 = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress1, setHospitalAddress1] = useState("");
  const [hospitalAddress2, setHospitalAddress2] = useState("");
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
    .uploadFile(file, "RADIOLOGIST" + string_delimiter + localStorage.getItem("email") + string_delimiter + file.name)
    .then(data => setuploadedFiles(uploadedFiles + data.location))
    .catch(err => console.error(err))
}

  const onRectangle1Click = useCallback(() => {
    navigate("/rad-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    localStorage.setItem('hospitalName', hospitalName)
    localStorage.setItem('hospitalAddress1', hospitalAddress1)
    localStorage.setItem('hospitalAddress2', hospitalAddress2)
    localStorage.setItem('Documents', uploadedFiles)
    navigate("/rad-signup-3");
  }, [navigate, hospitalName, hospitalAddress1, hospitalAddress2, uploadedFiles]);

  const onRectangle3Click = useCallback(() => {
    navigate("/rad-signup-1");
  }, [navigate]);

  return (
    <div className="rad-signup-2">
      <img className="vector-icon202" alt="" />
      <div className="rad-signup-2-child" />
      <div className="rad-signup-2-item" />
      <img
        className="users-background-6-icon4"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div className="text-fieldoutlined116">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <input
              type="text"
              className="label117"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Hospital/Lab"
            />
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined117">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <input
              type="text"
              className="label117"
              value={hospitalAddress1}
              onChange={(e) => setHospitalAddress1(e.target.value)}
              placeholder="Hospital/Lab address line 1"
            />
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined118">
        <div className="input117">
          <div className="content130">
            <div className="min-height117" />
            <input
              type="text"
              className="label117"
              value={hospitalAddress2}
              onChange={(e) => setHospitalAddress2(e.target.value)}
              placeholder="Hospital/Lab address line 2"
            />
          </div>
        </div>
        <div className="helpertext117">
          <div className="helper-text117">Helper text</div>
        </div>
      </div>
      <div className="sign-up-as14">Sign up AS radiologist</div>
      <div className="rad-signup-2-inner" />
      <div className="rad-signup-2-child1" />
      <div className="rad-signup-2-child2" />
      <div className="rad-signup-2-child3" />
      <img
        className="iconsregularchevron-down-s28"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
      <div className="rad-signup-2-child4" >
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      </div>

      <div className="rad-signup-2-child5" />
      <div className="rad-signup-2-child6" />
      <img className="rad-signup-2-child7" alt="" src="/arrow-1.svg" />
      <div className="rad-signup-2-child8" onClick={onRectangle1Click} />
      <b className="login21"onClick={onRectangle1Click}>Login</b>
      <div className="already-have-an16"onClick={onRectangle1Click}> Already have an account?</div>
      <div className="rad-signup-2-child9" onClick={onRectangle2Click} />
      <b className="next11" onClick={onRectangle2Click}>Next</b>
      <div className="rad-signup-2-child10" onClick={onRectangle3Click} />
      <b className="back79" onClick={onRectangle3Click}>Back</b>
    </div>
  );
};

export default RadSignup2;
