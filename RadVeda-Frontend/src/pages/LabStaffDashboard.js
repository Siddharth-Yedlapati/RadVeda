import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./LabStaffDashboard.css";

const LabStaffDashboard = () => {
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
    useEffect(() => {
      navigate("/labstaff-login-page");
    }) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

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
    navigate("/labstaff-test-pending");
  }, [navigate]);

  const onNotifyPatient = useCallback(() => {
    navigate("/labstaff-test-pending");
  }, [navigate]);

  const [patDetails, setpatDetails] = useState([]);

  useEffect(() => {
    request("GET", "http://localhost:9191/labstaffs/profile", {}, true)
      .then(doctorResponse => {
        const doctorId = doctorResponse.data.id;
        return request("GET", `http://localhost:9192/tests/LABSTAFF/${doctorId}/getTests`, {}, true);
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
      <div className="labstaff-dashboard">
        <div className="labstaff-dashboard-child" />
        <img className="vector-icon8" alt="" />
        <img
          className="labstaff-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing1">
          <img className="vector-icon9" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon10" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon11" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-item" onClick={openNotifications}/>
          <div className="div1">03</div>
        </div>
        <img className="need-help-icon1" alt="" src="/need-help.svg" />
        <div className="labstaff-dashboard-inner" />
        <div className="labstaff-dashboard-child1" />
        <div className="frame-parent">
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="good-morning-john-container">
            <span>Good Morning</span>
            <b className="john-doe">
              <span className="span">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div className="frame-parent">
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="good-morning-john-container">
            <span>Good Morning</span>
            <b className="john-doe">
              <span className="span">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>
        </div>
        <div className="patient-id-parent">
          <div className="patient-id">Patient ID</div>
          <div className="frame-inner" />
          <div className="frame-container">
            <div className="group-parent" onClick={onFrameContainerClick}>
              <div className="mri-wrapper">
                <div className="mri">MRI</div>
              </div>
              <div className="remark1">Remark1</div>
              <div className="group-wrapper">
                <div className="notify-patient-wrapper">
                  <div className="notify-patient"> Notify Patient</div>
                </div>
              </div>
            </div>
            <div className="group-container">
              <div className="ct-scan-wrapper">
                <div className="mri">CT Scan</div>
              </div>
              <div className="remark2">Remark2</div>
            </div>
            <div className="test-type-parent">
              <div className="mri">Test Type</div>
              <div className="parent">
                <div className="div2">04/10/2023</div>
                <div className="div3">25/09/2023</div>
                <div className="div4">21/09/2023</div>
                <div className="date-prescribed">Date Prescribed</div>
              </div>
              <div className="status">Status</div>
              <div className="remarks-given-by">Remarks given by doctor</div>
            </div>
          </div>
          <div className="group-parent1">
            <div className="x-ray-wrapper">
              <div className="mri">X-Ray</div>
            </div>
            <div className="remark3">Remark3</div>
          </div>
          <div className="test-pending-parent">
            <div className="test-pending">Test Pending</div>
            <div className="patient-not-notified">Patient not notified</div>
            <div className="test-completed">Test Completed</div>
          </div>
          <div className="id1">ID1</div>
          <b className="test-details1">Test Details</b>
          <div className="id2">ID2</div>
          <div className="id3">ID3</div>
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

export default LabStaffDashboard;
