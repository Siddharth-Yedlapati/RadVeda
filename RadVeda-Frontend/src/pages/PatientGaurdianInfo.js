import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";
import { request, getAuthToken} from "../axios_helper";
import "./PatientGaurdianInfo.css";

const PatientGaurdianInfo = () => {
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

  const [GdateOfBirth, setDateOfBirth] = useState("");
  const [Ggender, setGender] = useState("");
  const [Grelationship, setRelationship] = useState("");
  const [GphoneNumber, setPhoneNumber] = useState("");
  const [GselectedFile, setSelectedFile] = useState(null);
  const [GuploadedFiles, setuploadedFiles] = useState([]);
  
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    console.log(GuploadedFiles)
    ReactS3Client
    .uploadFile(file, "PATIENT" + string_delimiter + localStorage.getItem("email") + string_delimiter + file.name)
    .then(data => {
      GuploadedFiles.push(data.location);
      setuploadedFiles(GuploadedFiles)
    })
    .catch(err => console.error(err))
}

  const onRectangleClick = useCallback(() => {
    const dob = new Date(GdateOfBirth);
    const today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    localStorage.setItem('GDOB', GdateOfBirth);
    localStorage.setItem('Ggender', Ggender);
    localStorage.setItem('Grelationship', Grelationship);
    localStorage.setItem('GphoneNumber', GphoneNumber);
    localStorage.setItem('GuploadedFiles', JSON.stringify(GuploadedFiles));

    if(age >= 18){
      navigate("/patient-signup-3");
    }
    else{
      alert("Guardians age must be above 18");
      navigate("/patient-login-page")
    }
    
  }, [navigate, GdateOfBirth, Ggender, Grelationship, GphoneNumber, GuploadedFiles]);

  const onRectangle1Click = useCallback(() => {
    navigate("/patient-login-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/patient-guardian-info-1");
  }, [navigate]);

  return (
    <div className="patient-gaurdian-info-2">
      <img className="vector-icon36" alt="" />
      <div className="patient-gaurdian-info-2-child" />
      <div className="patient-gaurdian-info-2-item" />
      <img
        className="users-background-7-icon2"
        alt=""
        src="/users-background-5@2x.png"
      />
      <div
        className="patient-gaurdian-info-2-inner"
        onClick={onRectangleClick}
      />
      <b onClick={onRectangleClick} className="next4">Next</b>
      <div
        className="patient-gaurdian-info-2-child1"
        onClick={onRectangle1Click}
      />
      <b className="login8">Login</b>
      <div className="already-have-an6"> Already have an account?</div>
      <div
        className="patient-gaurdian-info-2-child2"
        onClick={onRectangle2Click}
      />
      <b onClick={onRectangle2Click} className="back14">Back</b>
      <div className="guardian-info1">Guardian Info</div>
      <div className="text-fieldoutlined44">
        <div className="input44">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Confirm password</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="phone-number-validity2"></div>
      <div className="text-fieldoutlined45">
        <div className="input44">
          <div className="content48">
            <div className="min-height44" />
            <div className="label44">Confirm password</div>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="age-verification-status"></div>
      <div className="text-fieldoutlined46">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <input 
              type="tel" value={GphoneNumber}               
              onChange={(e) => {
                const value = e.target.value.replace(/\D/, ""); // Allow only numeric values
                setPhoneNumber(value);
              }} 
              className="label44" 
              placeholder="Phone number">
            </input>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined47">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <input type="text" value={Grelationship} onChange={(e) => setRelationship(e.target.value)} className="label44" placeholder="Relationship to patient"></input>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="patient-gaurdian-info-2-child3" />
      <div className="patient-gaurdian-info-2-child4" />
      <div className="patient-gaurdian-info-2-child5" />
      <div className="text-fieldoutlined48">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <input type="date" value={GdateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="label44" placeholder="Date of Birth"></input>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="text-fieldoutlined49">
        <div className="input46">
          <div className="content48">
            <div className="min-height44" />
            <input type="text" value={Ggender} onChange={(e) => setGender(e.target.value)} className="label44" placeholder="Gender"></input>
          </div>
        </div>
        <div className="helpertext44">
          <div className="helper-text44">Helper text</div>
        </div>
      </div>
      <div className="patient-gaurdian-info-2-child6">
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <button onClick={() => uploadFile(GselectedFile)}> Upload to S3</button>
      </div>
      <div className="patient-gaurdian-info-2-child7" />
      <div className="patient-gaurdian-info-2-child8" />
      <img
        className="patient-gaurdian-info-2-child9"
        alt=""
        src="/arrow-2.svg"
      />
      <img
        className="maxresdefault-2-icon"
        alt=""
        src="/maxresdefault-2@2x.png"
      />
      <img
        className="iconsregularchevron-down-s10"
        alt=""
        src="/iconsregularchevrondowns.svg"
      />
    </div>
  );
};

export default PatientGaurdianInfo;
