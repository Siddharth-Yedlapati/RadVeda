import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocDashboard.css";

const DocDashboard = () => {
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
  const [patients, setPatients] = useState("");
  const [patDetails, setpatDetails] = useState([]);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const [allChatNotifs, setAllChatNotifs] = useState([]);
  const [allChatNotifsID, setAllChatNotifsID] = useState([]);

  const [allConsentRequestNotifications, setAllConsentRequestNotifications] = useState([]);
  const [allConsentRequestNotificationsID, setAllConsentRequestNotificationsID] = useState([]);

  const [allOneWayNotifications, setAllOneWayNotifications] = useState([]);
  const [allOneWayNotificationsID, setAllOneWayNotificationsID] = useState([]);
  


  const deleteChatID = (index) => {
    // console.log(res);
    console.log("index is", index);
    console.log("Chat ID is", allChatNotifsID[index]);
    let idToDelete = allChatNotifsID[index];
    request(
      "DELETE",
      "http://localhost:9193/notifications/deleteChatNotification/" + String(idToDelete), 
      {
        
      },
      true
      ).then(
        () => {
          
          console.log("SUCCESS");
          alert("Chat Notification deleted successfully");
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR in deleting")
        }
      )
  }

  const deleteAllChatNotifs = () => {
    request(
      "DELETE",
      "http://localhost:9193/notifications/deleteAllChatNotifications", 
      {

      },
      true
      ).then(
        () => {
          
          console.log("SUCCESS");
          alert("Chat Notifications deleted successfully");
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR in deleting")
        }
      )
  }

  const openNotifications = useCallback(() => {
    console.log("CLICKED NOTIFICATIONS")
    request(
      "GET",
      "http://localhost:9193/notifications/getAllChatNotifications", 
      {

      },
      true
      ).then(
        (response) => {
          
          console.log(response.data);
          
          setAllChatNotifs([]);
          let arr = []
          let arrID = []
          for (let i = 0; i < response.data.length; i++) {

            arr.push(response.data[i].message);
            arrID.push(response.data[i].id);
          }

          setAllChatNotifs(arr);
          setAllChatNotifsID(arrID);
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR1")
        }
      )

      request(
        "GET",
        "http://localhost:9193/notifications/getAllConsentRequestNotifications", 
        {
  
        },
        true
        ).then(
          (response) => {
            
            console.log(response.data[0].message);
            
            setAllConsentRequestNotifications([]);
            let arr = []
            let arrID = []
            for (let i = 0; i < response.data.length; i++) {
  
              arr.push(response.data[i].message);
              arrID.push(response.data[i].id);
            }
  
            setAllConsentRequestNotifications(arr);
            setAllConsentRequestNotificationsID(arrID);
            
          }
        ).catch(
          (error) => {
            // alert(error.response.data.error);
            console.log("ERROR2")
          }
        )

        request(
          "GET",
          "http://localhost:9193/notifications/getAllOneWayNotifications", 
          {
    
          },
          true
          ).then(
            (response) => {
              
              console.log(response.data[0].message);
              
              setAllOneWayNotifications([]);
              let arr = []
              let arrID = []
              for (let i = 0; i < response.data.length; i++) {
    
                arr.push(response.data[i].message);
                arrID.push(response.data[i].id);
              }
    
              setAllOneWayNotifications(arr);
              setAllOneWayNotificationsID(arrID);
              
            }
          ).catch(
            (error) => {
              // alert(error.response.data.error);
              console.log("ERROR3")
            }
          )


    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/doc-pt-verification");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-own-patient-details");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-cons-pat-details");
  }, [navigate]);

  useEffect(() => {
    const toggleSwitch = document.getElementById('availability-checkbox');
    let isAvailable = toggleSwitch.checked;

    toggleSwitch.addEventListener('change', function() {
      isAvailable = toggleSwitch.checked;
      console.log('Availability:', isAvailable ? 'Available' : 'Not Available'); 
    });

    request("GET", "http://localhost:9191/doctors/profile", {}, true)
      .then(doctorResponse => {
        const doctorId = doctorResponse.data.id;
        return request("GET", `http://localhost:9192/tests/DOCTOR/${doctorId}/getTests`, {}, true);
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
        console.log(patDetails);

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
    navigate("/doc-own-patient-details")
  }

  return (
    <>
      <div className="doc-dashboard">
        <div className="doc-dashboard-child" />
        <img className="vector-icon73" alt="" />
        <img
          className="doc-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing16">
          <img className="vector-icon74" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon75" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon76" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child14" onClick={openNotifications}/>
          <div className="div36">03</div>
        </div>
        <img className="need-help-icon16" alt="" src="/need-help.svg" />
        <div className="doc-dashboard-inner" />
        <div className="good-morning-john-doe-parent">
          <div className="good-morning-john-container4">
            <span>Good Morning</span>
            <b className="john-doe4">
              <span className="span4">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
          <div class="availability-toggle">
            <input type="checkbox" id="availability-checkbox"/>
            <label for="availability-checkbox" class="toggle">Availability:</label>
          </div>

          <div className="group-wrapper53" onClick={onFrameContainerClick}>
            <div className="prescribe-test-wrapper">
              <div className="prescribe-test">Prescribe Test</div>
            </div>
          </div>
          <div className="content54">
            <div className="magnifyingglass8">
              <div className="magnifyingglass9">􀊫</div>
            </div>
            <div className="placeholder-label4">Search</div>
            <img className="mic-icon4" alt="" src="/-mic.svg" />
          </div>
        </div>
        <div className="doc-dashboard-child1" />
        <div className="my-patients-list-parent">
          <b className="my-patients-list">My Patients list</b>
          <div className="frame-child-125" >
          {renderPatientsTable()}
          </div>
        </div>
        <div className="consultations-requested-by-oth-parent">
          <b className="my-patients-lists">
            Consultations requested by other doctors
          </b>
          <div className="frame-child125" />
          <div className="frame-parent23">
            <div className="group-parent33">
              <div className="patient-1-parent">
                <div className="patient-1">Patient 1</div>
                <div className="uk4">uk</div>
              </div>
              <div className="rectangle-parent6">
                <div className="group-child15" />
                <img className="group-child16" alt="" src="/group-236802.svg" />
              </div>
            </div>
            <div className="group-parent34" onClick={onFrameContainer12Click}>
              <div className="patient-2-parent">
                <div className="patient-1">Patient 2</div>
                <div className="uk4">uSA</div>
              </div>
              <img className="frame-child126" alt="" src="/group-236783.svg" />
            </div>
            <div className="group-parent35">
              <div className="patient-3-parent">
                <div className="patient-1">Patient 3</div>
                <div className="uk4">USA</div>
              </div>
              <div className="frame-child126">
                <div className="rectangle-parent6">
                  <div className="group-child17" />
                  <img
                    className="group-child18"
                    alt=""
                    src="/group-236804.svg"
                  />
                </div>
              </div>
            </div>
            <div className="patient-name-parent">
              <div className="patient-name">Patient Name</div>
              <div className="parent1">
                <div className="div37">21</div>
                <div className="div38">25</div>
                <div className="div39">34</div>
                <div className="age">Age</div>
              </div>
              <div className="male-parent2">
                <div className="male8">Male</div>
                <div className="female4">Female</div>
                <div className="male9">Male</div>
                <div className="gender4">Gender</div>
              </div>
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

      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeNotifications}
        >
          <div className="notification-container">
            <h2 className="notification-heading">Notifications</h2>
            <div className="message-container">
                {allChatNotifs.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="reply-button">Reply</button>
                            <button className="ignore-button">Ignore</button>
                            <button className="clear-button" onClick={() => deleteChatID(index)}>Clear</button>
                        </div>
                    </div>
                
                ))}
                {allConsentRequestNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="reply-button">Fill Consent Form</button>
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
                {allOneWayNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
                <button className="clear-button"onClick={deleteAllChatNotifs}>Clear All Chat Notifications</button>

            </div>
        </div>
          
        </PortalPopup>
      )}
    </>
  );
};

export default DocDashboard;
