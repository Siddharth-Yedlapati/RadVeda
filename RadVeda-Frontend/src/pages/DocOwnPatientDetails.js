import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnPatientDetails.css";

const DocOwnPatientDetails = () => {
  const navigate = useNavigate();
  const [loginflag, setLoginFlag] = useState("0");

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        setLoginFlag("1");
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/doc-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [tests, setTests] = useState([]);
  const [consultTests, setConsultTests] = useState([]);
  
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
    navigate("/doc-own-pfr-rad");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-own-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-own-diag-complete");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-own-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-own-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/doc-own-diag-comp-hist");
  }, [navigate]);


  useEffect(() => {
  var doctorid;
  request(
    "GET",
    "http://localhost:9191/doctors/profile",
    {},
    true 
    ).then(response => {
      doctorid = response.data.id
      request(  
      "GET",
      "http://localhost:9192/tests/" + localStorage.getItem("currentPatientID") + "/DOCTOR/" + doctorid + "/getTests",
      {},
      true
      ).then(response => {
        setTests(response.data)
      }).catch(error => {
        alert(error.response.data.error);
      })

      request(  
      "GET",
      "http://localhost:9192/tests/" +localStorage.getItem("currentPatientID") + "/DOCTOR/" + doctorid + "/getConsultedTests",
      {},
      true
      ).then(response => {
        setConsultTests(response.data)
      }).catch(error => {
        var errorMsg = error.response.data.error;
          if(!(errorMsg === "No consulted tests found for the given Patient" || errorMsg === "No tests found for the given Patient")){
            alert(error.response.data.error);
          }
        // alert(error.response.data.error);
      })
        }).catch(error => {
          // if(!(error.response.data.error === "No consulted tests found for the given Patient" || error.response.data.error === "No tests found for the given Patient")){
          //   alert(error.response.data.error);
          // }
          alert(error.response.data.error);
        })

  }, []);

  const renderTestsTable = () => {
    return (
      <table className = "tests-table">
        <thead>
          <tr>
            <th>Test Type</th>
            <th>Date Prescribed</th>
            <th>Status</th>
            <th>Remarks</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody className="tableBody">
          {tests.map((test) => (
            <tr key={test.id} onClick = {() => handleRowClick(test.id)}>
              <td>{test.testType}</td>
              <td>{test.datePrescribed}</td>
              <td>{test.doctorStatus}</td>
              <td>{test.doctorsRemarksforPatient}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      
    );
  };

  const renderConsultedTestsTable = () => {
    return (
      <table className = "consulted-tests-table">
        <thead>
          <tr>
            <th>Test Type</th>
            <th>Date Prescribed</th>
            <th>Status</th>
            <th>Remarks</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {consultTests.map((test) => (
            <tr key={test.id} onClick = {() => handleRowClickConsult(test.id)}>
              <td>{test.testType}</td>
              <td>{test.datePrescribed}</td>
              <td>{test.doctorStatus}</td>
              <td>{test.doctorsRemarksforPatient}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleRowClick = (testID) => {
    
    const test = tests.find(test => test.id === testID);
    localStorage.setItem("testID", test.id);
    const status = test.doctorStatus;
    if(status == "Pending For Review By Radiologist"){
      navigate("/doc-own-pfr-rad");
    }
    else if(status == "Pending For Review"){
      navigate("/doc-own-pfr");
    }
    else if(status == "Diagnosis Completed"){
      navigate("/doc-own-diag-complete");
    }
    else {
      console.error("Doctor Status not valid:", status)  // ensure that the doctorstatus is one of the above 3
    }      
  }
  const handleRowClickConsult = (testID) => {
    const test = consultTests.find(test => test.id === testID);
    localStorage.setItem("testID", test.id);
    const status = test.doctorStatus;
    if(status == "Pending For Review By Radiologist"){
      navigate("/doc-own-pfr-rad");
    }
    else if(status == "Pending For Review"){
      navigate("/doc-own-pfr");
    }
    else if(status == "Diagnosis Complete"){
      navigate("/doc-own-diag-complete");
    }
    else {
      console.error("Doctor Status not valid:", status)  // ensure that the doctorstatus is one of the above 3
    }      
  }

  return (
    <>
      <div className="doc-own-patient-details">
        <div className="doc-own-patient-details-child" />
        <img className="vector-icon113" alt="" />
        <img
          className="doc-own-patient-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing25">
          <img className="vector-icon114" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon115" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon116" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child23" onClick={openNotifications}/>
          <div className="div51">03</div>
        </div>
        <img className="need-help-icon25" alt="" src="/need-help.svg" />
        <div className="doc-own-patient-details-inner" />
        <div className="doc-own-patient-details-child1" />
        <div className="patient-details-group">
          <b className="patient-details1">Patient Details</b>
          <div className="frame-child218" />
          <div className="frame-child219" />
          <div className="frame-child220" />
          <div className="frame-child220" />
          <div className="name-ayesha1">Name : Ayesha Bazmi</div>
          <div className="dob-031019901">DOB : 03/10/1990</div>
          <div className="frame-wrapper2">
            <div className="ellipse-group">
              <img className="frame-child222" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-container">
                <div className="ayesha-bazmi1">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-241">Age : 24</div>
          <img className="icon-mail1" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom1">: ayeshabazmi@gmail.com</div>
        </div>
        <div className="doc-own-patient-details-inner1">
          <div className="back-wrapper30">
            <div className="back45">Back</div>
          </div>
        </div>
        {/* <div className="tests-prescribed-by-me-parent">
          <b className="tests-prescribed-by">Tests prescribed by me</b>
          <div className="group-parent44">
          {renderTestsTable()}
          </div> */}
          
        <div className="my-tests-list-parent1" >
          <b className="my-tests-list">Tests prescribed by me</b>
          <div className="frame-child-test-125" >
          {renderTestsTable()}
        </div>
          

        </div>
        <div className="tests-prescribed-by-other-doct-parent">
          <b className="tests-prescribed-by1">Tests prescribed by other doctors</b>
          <div className = "group-parent44">
            {renderConsultedTestsTable()}
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

export default DocOwnPatientDetails;
