import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadDashboard.css";

const RadDashboard = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/rad-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/rad-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  const [patDetails, setpatDetails] = useState([]);

  useEffect(() => {
    request("GET", "http://localhost:9191/radiologists/profile", {}, true)
      .then(radResponse => {
        const radId = radResponse.data.id;
        return request("GET", `http://localhost:9192/tests/RADIOLOGIST/${radId}/getTests`, {}, true);
      })
      .then(testsResponse => {
        const patients = testsResponse.data;
        console.log(patients);
        if (patients.length !== 0) {
          const uniquePatientIDs = [...new Set(patients.map(patient => patient.patientID))];
          const sortedUniquePatientIDs = uniquePatientIDs.sort((id1, id2) => {
            // Find the latest datePrescribed for each patient ID
            const latestDatePrescribed1 = Math.max(...patients.filter(patient => patient.patientID === id1).map(patient => new Date(patient.datePrescribed).getTime()));
            const latestDatePrescribed2 = Math.max(...patients.filter(patient => patient.patientID === id2).map(patient => new Date(patient.datePrescribed).getTime()));
        
            // Compare the latest datePrescribed values
            return latestDatePrescribed1 - latestDatePrescribed2;
        });
          const reqString = sortedUniquePatientIDs.join(',');
          console.log("reqString: " + reqString);
          return request("GET", `http://localhost:9198/patient/getPatients/${reqString}`, {}, true);
        }
      })
      .then(patientsResponse => {
        const patDetails = patientsResponse.data;
        setpatDetails(patDetails);
        console.log("PATIENT DETAILS", patDetails);

      })
      .catch(error => {
        var errormsg = error.response.data.error;
        if(!(errormsg === "No tests found for the given ID")){
          alert(error.response.data.error)
        }
      });
  }, []);

  const renderPatientsTable = () => {
    return (
      <table className = "patients-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody className="tableBody">
        {patDetails.map((patDetail) => (
            <tr key={patDetail.id} onClick = {() => handleRowClick(patDetail.id)}>
              <td>{patDetail.firstName}</td>
              <td>{patDetail.email}</td>
              <td>{patDetail.gender}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleRowClick = (patientID) => {
    localStorage.setItem("currentPatientID", patientID)
    navigate("/rad-own-pat-details")
  }

  return (
    <>
      <div className="rad-dashboard-container">
      <div className="rad-dashboard">
        <div className="rad-dashboard-child" />
        <img className="vector-icon196" alt="" />
        <img
          className="rad-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing44">
          <img className="vector-icon197" alt="" src="/vector.svg" />
          <img className="vector-icon198" alt="" src="/vector.svg" />
          <img className="vector-icon199" alt="" />
          <div className="iconnotification-bing-child42" />
          <div className="div99">03</div>
        </div>
        <img className="need-help-icon44" alt="" src="/need-help.svg" />
        <div className="rad-dashboard-inner" />
        <div className="good-morning-john-doe-group">
          <div className="good-morning-john-container8">
            <span>Good Morning</span>
            <b className="john-doe8">
              <span className="span8">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div className="content115">
            <div className="magnifyingglass24">
              <div className="magnifyingglass25">􀊫</div>
            </div>
            <div className="placeholder-label12">Search</div>
            <img className="mic-icon13" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="rad-dashboard-child1" />
        <div className="consultations-requested-by-oth-group">
          <b className="consultations-requested-by1">
            Consultations requested by other radiologists
          </b>
          <div className="frame-child379" />
          <div className="frame-parent50">
            <div className="group-parent76">
              <div className="patient-1-container">
                <div className="patient-12">Patient 1</div>
                <div className="uk15">uk</div>
              </div>
              <div className="rectangle-parent31">
                <div className="group-child58" />
                <img className="group-child59" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent77" onClick={onFrameContainer1Click}>
              <div className="patient-2-container">
                <div className="patient-12">Patient 2</div>
                <div className="uk15">uSA</div>
              </div>
              <img className="frame-child380" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent78">
              <div className="patient-3-container">
                <div className="patient-12">Patient 3</div>
                <div className="uk15">USA</div>
              </div>
              <div className="frame-child380">
                <div className="rectangle-parent31">
                  <div className="group-child60" />
                  <img
                    className="group-child61"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-container">
              <div className="patient-name5">Patient Name</div>
              <div className="parent9">
                <div className="div100">21</div>
                <div className="div101">25</div>
                <div className="div102">34</div>
                <div className="age5">Age</div>
              </div>
              <div className="male-parent10">
                <div className="male30">Male</div>
                <div className="female15">Female</div>
                <div className="male31">Male</div>
                <div className="gender15">Gender</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-patients-list-parent">
          <b className="my-patients-list">My Patients list</b>
          <div className="frame-child-125" >
          {renderPatientsTable()}
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

export default RadDashboard;