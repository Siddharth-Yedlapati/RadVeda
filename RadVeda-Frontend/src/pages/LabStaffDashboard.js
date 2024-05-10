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
        // return request("GET", `http://localhost:9192/tests/LABSTAFF/${doctorId}/getTests`, {}, true);    // TODO: DONT HARDCODE VALUE, REFRESH DATABASE
        return request("GET", `http://localhost:9192/tests/LABSTAFF/${doctorId}/getTests`, {}, true)
      })
      .then(testsResponse => { 
        const patients = testsResponse.data;
        setpatDetails(patients);
        console.log(patients);
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
            <th>Patient ID</th>
            <th>Test Type</th>
            <th>Date Prescribed</th>
            <th>Test Status</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody className="tableBody">
        {patDetails.map((patDetail) => (
            <tr key={patDetail.id} onClick = {() => handleRowClick(patDetail.id, patDetail.id, patDetail.labStaffStatus)}>
              <td>{patDetail.patientID}</td>
              <td>{patDetail.testType}</td>
              <td>{patDetail.datePrescribed}</td>
              <td>{patDetail.labStaffStatus}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleRowClick = (patientID, testID, testStatus) => {
    localStorage.setItem("currentPatientID", patientID)
    localStorage.setItem("currentTestID", testID)
    if("Test Not Conducted" == testStatus){
      navigate("/labstaff-test-pending")
    }
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
          {renderPatientsTable()}
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
