import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocPTDetails.css";

const DocPTDetails = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/doc-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [testType, settestType] = useState("");
  const [patientRemarks, setpatientRemarks] = useState("");
  const [radiologistRemarks, setradiologistRemarks] = useState("");
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    console.log(testType);  // returns blank?
    console.log(patientRemarks);
    console.log(radiologistRemarks);
    
    // if (!testType) {
    //   alert("Please Fill in Test Type");
    //   return;
    // }



    request(
      "POST",
      "/prescribe-test",
      {
        "TestType": 'a',
        "PatientStatus" : 'a',
        "DoctorStatus" : 'a',
        "RadiologistStatus": 'b',
        "LabStaffStatus": 'c',
        "DoctorsRemarksforPatient": 'c',
        "DoctorsRemarksforRadiologist": 'b',
        "doctorID": '3',   // patientID can be retrieved using localStorage, how to get doctorID?
        "PatientID" : '2',
        "DoctorNotes" : 'a',
        "OriginalImage": 'g'    
    },
      true // If changed to false, axios request fails with a 403 forbidden error
      ).then(
        (response) => {
          alert(response.data);
          navigate("/doc-dashboard");
        }
      ).catch(
        (error) => {
          alert(error.response.data.error);
        }
      )
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-pt-verification");
  }, [navigate]);

  return (
    <>
      <div className="doc-pt-details">
        <div className="doc-pt-details-child" />
        <img className="vector-icon85" alt="" />
        <img
          className="doc-pt-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing18">
          <img className="vector-icon86" alt="" src="/vector.svg" />
          <img className="vector-icon87" alt="" src="/vector.svg" />
          <img className="vector-icon88" alt="" />
          <div className="iconnotification-bing-child16" />
          <div className="div44">03</div>
        </div>
        <img className="need-help-icon18" alt="" src="/need-help.svg" />
        <div className="doc-pt-details-inner" />
        <div className="doc-pt-details-child1" />
        <div className="frame-parent26">
          <div className="group-wrapper58">
            <div className="remarks-for-radiologist-wrapper">
              <div className="remarks-for-radiologist">
                Remarks for Radiologist
              </div>
            </div>
          </div>
          <div className="group-wrapper59" onClick={onFrameContainer1Click}>
            <div className="submit-container">
              <div className="remarks-for-radiologist">Submit</div>
            </div>
          </div>
          <div className="frame-child131" />
          <div className="frame-child132" />
          <div className="group-wrapper60">
            <div className="remarks-for-patient-wrapper">
              <div className="remarks-for-radiologist">Remarks for patient</div>
            </div>
          </div>
          <div className="text-fieldoutlined71">
          <div className="input71">
          <div className="content76">
            <div className="min-height71" />
            <input
              type="text"
              className="label71"
              value={radiologistRemarks}
              onChange={(e) => setradiologistRemarks(e.target.value)}
              placeholder="Input Remarks for Radiologist"
            />
          </div>
        </div>
            <div className="helpertext71">
              <div className="helper-text71">Helper text</div>
            </div>
          </div>
        </div>
        <div className="text-fieldoutlined72">
        <div className="input71">
          <div className="content76">
            <div className="min-height71" />
            <input
              type="text"
              className="label71"
              value={patientRemarks}
              onChange={(e) => setpatientRemarks(e.target.value)}
              placeholder="Input Remarks for Patient"
            />
          </div>
        </div>
          <div className="helpertext71">
            <div className="helper-text71">Helper text</div>
          </div>
        </div>
        <div className="text-fieldoutlined73">
        <div className="input71">
          <div className="content76">
            <div className="min-height71" />
            <input
              type="text"
              className="label71"
              value={testType}
              onChange={(e) => settestType(e.target.value)}
              placeholder="Input Test"
            />
          </div>
        </div>
        <div className="helpertext71">
          <div className="helper-text71">Helper text</div>
        </div>
      </div>
        <div
          className="doc-pt-details-inner1"
          onClick={onFrameContainer12Click}
        >
          <div className="back-wrapper21">
            <div className="remarks-for-radiologist">Back</div>
          </div>
        </div>
        <div className="doc-pt-details-inner2">
          <div className="test-type-wrapper">
            <div className="remarks-for-radiologist">Test Type</div>
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

export default DocPTDetails;
