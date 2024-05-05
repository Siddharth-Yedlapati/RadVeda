import { useState, useCallback } from "react";
import PatientUserOptions from "../components/PatientUserOptions";
import PortalPopup from "../components/PortalPopup";
import PatientChooseLab from "../components/PatientChooseLab";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import ConsentForm from "./ConsentForm";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/patient-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/patient-login-page");}) 
  }

  const [isPatientUserOptionsOpen, setPatientUserOptionsOpen] = useState(false);
  const [isPatientChooseLabOpen, setPatientChooseLabOpen] = useState(false);
  const [testDetails, setTestDetails] = useState([]);
  const [chooseLabTest, setChooseLabTest] = useState(0);

  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const [allChatNotifs, setAllChatNotifs] = useState([]);
  const [allChatNotifsID, setAllChatNotifsID] = useState([]);

  const [allConsentRequestNotifications, setAllConsentRequestNotifications] = useState([]);
  const [allConsentRequestNotificationsID, setAllConsentRequestNotificationsID] = useState([]);
  const [allConsentRequestNotificationsConsentID, setAllConsentRequestNotificationsConsentID] = useState([]);

  const [allOneWayNotifications, setAllOneWayNotifications] = useState([]);
  const [allOneWayNotificationsID, setAllOneWayNotificationsID] = useState([]);

  const[testType, settestType] = useState("");
  const [docfirstname, setDocFirstname] = useState("");
  const [doclastname, setDocLastname] = useState("");
  const [consentForm, setConsentForm] = useState({
    currentTest: [],
    otherTests: []
  });

  const [isPatientConsentFormOpen, setPatientConsentFormOpen] = useState(false);
  const [currentconsentrequestID, setcurrentconsentrequestID] = useState(-1);
  const [primaryradiologistid, setprimaryradiologistid] = useState(-1);
  const [patId, setPatId] = useState(-1);
  const [testID, setTestID] = useState(-1);


  const openPatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(true);
  }, []);

  const closePatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/patient-pfr-doctor");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/patient-diag-complete");
  }, [navigate]);

  const openPatientChooseLab = useCallback((testID) => {
    setChooseLabTest(testID)
    setPatientChooseLabOpen(true);
  }, []);

  const closePatientChooseLab = useCallback(() => {
    setPatientChooseLabOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/patient-pfr-radiologist");
  }, [navigate]);

  useEffect(() => {
    // Add event listener to close overlay when clicking outside the form
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".consent-form")) {
        setPatientConsentFormOpen(false);
      }
    };

    // Attach the event listener when the overlay is open
    if (isPatientConsentFormOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Cleanup: remove event listener when component unmounts or overlay is closed
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isPatientConsentFormOpen]);

  useEffect(() => {
    request ("GET", "http://localhost:9191/patients/profile", {}, true).
    then(patResponse => {
      const patId = patResponse.data.id;
      setPatId(patId);
      return request("GET", `http://localhost:9192/tests/PATIENT/${patId}/getTests`, {}, true)
    })
    .then(testResponse => {
      const testDetails = testResponse.data;
      testDetails.sort((a, b) => {
        // Splitting the date strings into components
        const partsA = a.datePrescribed.split('/');
        const partsB = b.datePrescribed.split('/');
      
        // Constructing sortable date strings in "yyyy/mm/dd" format
        const dateA = `${partsA[2]}/${partsA[1].padStart(2, '0')}/${partsA[0].padStart(2, '0')}`;
        const dateB = `${partsB[2]}/${partsB[1].padStart(2, '0')}/${partsB[0].padStart(2, '0')}`;
      
        // Compare the dates as strings
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
        return 0;
      });
      setTestDetails(testDetails);
    })
    .catch(error => {
      console.log(error)
      var errormsg = error.response.data.error;
      if(!(errormsg === "No tests found for the given ID")){
        alert(error.response.data.error)
      }
    });
  })

  const acceptRad = (radId, testId) => {
    request("POST", `http://localhost:9192/tests/${testId}/assignRad/${radId}`, {}, true) // not rolling back in case of failure
    .then(response => {
      request(
        "POST",
        "http://localhost:9201/radiologist/prescribe-test",
        {
          "testID": testId,
          "radiologistID": radId    
      },
        true 
        ).then(
          (response) => {
            alert("Radiologist Assigned Successfully !");
          }
        ).catch(
          (error) => {
            alert(error.response.data.error);
          }
        )
    })
    .catch(
      (error) => {
        alert(error.response.data.error)
        navigate('/patient-dashboard')
      }
    )

  }

  const requestRad = (patId, testId) => {
    request("POST", `http://localhost:9201/radiologist/assignRadiologist/${patId}/${testId}`, {}, true)
    .catch(
      (error) => {
        alert(error.response.data.error)
        // requestRad(patId, testId)
      }
    )


  }
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsentForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitConsentForm = () => {
    // You can perform form submission logic here
    console.log("Submitted Consent Form:", consentForm);
    // request(
    //   "POST",
    //   "http://localhost:9202/setPatientProviderDetails", 
    //   {
    //     "consentRequestId" : allConsentRequestNotificationsConsentID[curIndex],
    //     ""
    //   },
    //   true
    //   ).then(
    //     (response) => {
          
    //       console.log(response.data[0].message);
          
          
    //     }
    //   ).catch(
    //     (error) => {
    //       // alert(error.response.data.error);
    //       console.log("ERROR3")
    //     }
    //   )
    // // Clear the form after submission if needed
    // setConsentForm({
    //   currentTest: [],
    //   otherTests: []
    // });
  };

  const renderConsentForm = () => (
    <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientUserOptions}
        >
          {/* <PatientUserOptions onClose={closePatientUserOptions} /> */}
    <div className="consent-form">
      <h2>Consent Form</h2>
      <div>
        <label htmlFor="currentTest">Current Test:</label>
        <input
          type="text"
          id="currentTest"
          name="currentTest"
          value={consentForm.currentTest}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="otherTests">Other Tests:</label>
        <input
          type="text"
          id="otherTests"
          name="otherTests"
          value={consentForm.otherTests}
          onChange={handleInputChange}
          />
      </div>
      <button onClick={submitConsentForm}>Submit</button>
    </div>
  </PortalPopup>
  );

  const [curIndex, setCurIndex] = useState(0)
  
  const fillConsentForm = (consentrequestId) => {
    console.log("consent form fill", consentrequestId)
    setCurIndex(consentrequestId);
    setcurrentconsentrequestID(consentrequestId);
    request(
      "GET",
      "http://localhost:9202/consent/getConsentRequestById/" + consentrequestId,
      {},
      true
    ).then(
      (response) => {
        var testID = response.data.testId;
        setTestID(testID);
        request(
          "GET",
          "http://localhost:9192/tests/" + testID + "/getTest",
          {},
          true
        ).then(
          (response) => {
            var testType = response.data.testType;
            settestType(testType);
            var primary_rad_id = response.data.RadiologistID;
            setprimaryradiologistid(primary_rad_id);
            var docid = response.data.doctorID;
            request(
              "GET",
              "http://localhost:9194/doctor/" + docid + "/getDoctor",
              {},
              true
            ).then(
              (response) => {
                var docfirstname = response.data.firstName;
                setDocFirstname(docfirstname);
                var doclastname = response.data.lastName;
                setDocLastname(doclastname);
                setPatientConsentFormOpen(true);
              }
            )
          }
        )
      }
    )
    
  }

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
          console.log("data is", arr);
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
            let arrConsentID = []
            for (let i = 0; i < response.data.length; i++) {
  
              arr.push(response.data[i].message);
              arrID.push(response.data[i].id);
              arrConsentID.push(response.data[i].consentRequestId);
            }
  
            setAllConsentRequestNotifications(arr);
            setAllConsentRequestNotificationsID(arrID);
            setAllConsentRequestNotificationsConsentID(arrConsentID);
            
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

  const renderPatientsTable = () => {
    return (
      <table className="tests-table">
        <thead>
          <tr>
            <th>Test type</th>
            <th>Date Prescribed</th>
            <th>Status</th>
            <th>Remarks</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody className="tableBody">
          {testDetails.map((testDetail) => (
            <tr key={testDetail.id} onClick={testDetail.patientStatus !== 'Choose Lab' ? () => handleRowClick(testDetail.id) : null}>
              <td>{testDetail.testType}</td>
              <td>{testDetail.datePrescribed}</td>
              <td>
                {testDetail.patientStatus !== 'Choose Lab' ? (
                  testDetail.patientStatus
                ) : (
                  <button onClick={() => openPatientChooseLab(testDetail.id)}>Choose Lab</button>
                )}
              </td>
              <td>{testDetail.doctorsRemarksforPatient}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

    );
  };

  const handleRowClick = (testID) => {
    console.log('Clicked Row');
  }

  // const handleButtonClick = (testID) => {

  //   console.log('Clicked button')

  // }

  return (
    <>
      <div className="patient-dashboard">
        <div className="patient-dashboard-child" />
        <img className="vector-icon160" alt="" />
        <img
          className="patient-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openPatientUserOptions}
        />
        <div className="iconnotification-bing36">
          <img className="vector-icon161" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon162" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon163" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child34" onClick={openNotifications}/>
          <div className="div77">03</div>
        </div>
       
        <img className="need-help-icon36" alt="" src="/need-help.svg" />
        <div className="patient-dashboard-inner" />
        <div className="patient-dashboard-child1" />
        <div className="frame-child350" />
        <div className="frame-child351" />
        <div className="good-morning-john-container7">
            <span>Good Morning</span>
            <b className="john-doe7">
              <span className="span7">{` `}</span>
              <span>John Doe</span>
            </b>
          </div>

        <div className="my-tests-list-parent">
          <b className="my-tests-list">My Tests</b>
          <div className="frame-child-test-125" >
          {renderPatientsTable()}
          </div>

        </div>

        {/* <div className="frame-parent35">
          <div className="group-parent54" onClick={onFrameContainerClick}>
            <div className="endoscopy-wrapper">
              <div className="endoscopy">Endoscopy</div>
            </div>
            <div className="div78">11/10/2023</div>
          </div>
          <div className="remark52">Remark5</div>
          <div className="group-parent55" onClick={onFrameContainer1Click}>
            <div className="ultrasound-wrapper">
              <div className="endoscopy">Ultrasound</div>
            </div>
            <div className="div78">21/09/2023</div>
          </div>
          <div className="remark15">Remark1</div>
          <div className="remark25">Remark2</div>
          <div className="remark62">Remark6</div>
          <div className="doctors-remarks3">doctor’s remarks</div>
          <div className="remark42">Remark4</div>
        </div>
        <div className="frame-parent36">
          <div className="frame-child350" />
          <div className="frame-parent37">
            <div className="group-parent56">
              <div className="mri-wrapper3">
                <div className="endoscopy">MRI</div>
              </div>
              <div className="group-wrapper82" onClick={openPatientChooseLab}>
                <div className="choose-lab-wrapper">
                  <div className="notifications1">Choose Lab</div>
                </div>
              </div>
            </div>
            <div className="group-wrapper83">
              <div className="ct-scan-wrapper3">
                <div className="endoscopy">CT Scan</div>
              </div>
            </div>
            <div className="group-wrapper84" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper3">
                <div className="endoscopy">X-Ray</div>
              </div>
            </div>
            <div className="test-type-parent3">
              <div className="endoscopy">Test Type</div>
              <div className="parent5">
                <div className="div80">05/01/2024</div>
                <div className="div81">04/12/2023</div>
                <div className="div82">15/11/2023</div>
                <div className="date-prescribed5">Date Prescribed</div>
              </div>
              <div className="status9">Status</div>
            </div>
          </div>
          <div className="test-not-conducted-container">
            <div className="test-not-conducted2">Test Not Conducted</div>
            <div className="pending-for-review-container">
              <p className="pending-for-review8">
                Pending for review by radiologist
              </p>
              <p className="pending-for-review8">
                pending for review by doctor
              </p>
              <p className="diagnosis-completed4">Diagnosis Completed</p>
            </div>
          </div>
          <b className="my-tests">My tests</b>
        </div> */}


        {/* <div className="patient-dashboard-inner1">
          <div className="notifications-container">
            <div className="notifications1">Notifications</div>
          </div>
        </div>
        <div className="patient-dashboard-child2" />
        <div className="clear-all1">clear all</div>
        <div className="patient-dashboard-child3" />
        <div className="patient-dashboard-inner2">
          <div className="group-child23" />
        </div>
        <div className="consent-request-by">
          Consent Request by Dr. XYZ from Hospital D
        </div>
        <div className="patient-dashboard-child4" />
        <div className="patient-dashboard-child5" />
        <img className="patient-dashboard-child6" alt="" />
        <img className="patient-dashboard-child7" alt="" />
        <img className="patient-dashboard-child8" alt="" />
        <img className="patient-dashboard-child9" alt="" />
        <div className="patient-dashboard-inner3">
          <div className="group-child23" />
        </div>
        <div className="reminder-to-visit">
          Reminder to visit XYZ Lab at 5pm 02/02/24 for CT Scan
        </div>
        <div className="patient-dashboard-inner4">
          <div className="group-child23" />
        </div>
        <div className="new-chat-message">New Chat Message from Dr. John</div>
        <div className="patient-dashboard-inner5">
          <div className="group-child23" />
        </div>
        <div className="diagnosis-has-been">
          Diagnosis has been completed for Ultrasound issued on 21/09/2023
        </div>
        <div className="patient-dashboard-inner6">
          <div className="group-child23" />
        </div>
        <div className="new-chat-message1">New Chat Message from Dr. Abdul</div>
        
        */}

      </div>
      {isPatientUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientUserOptions}
        >
          <PatientUserOptions onClose={closePatientUserOptions} />
        </PortalPopup>
      )}
      {isPatientChooseLabOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientChooseLab}
        >
          <PatientChooseLab 
          testID={chooseLabTest} 
          onClose={closePatientChooseLab}
          patientID={patId}
          />
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
                        <button className="reply-button" onClick={() => fillConsentForm(allConsentRequestNotificationsConsentID[index])}>Fill Consent Form</button>
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
                <button className="clear-button"onClick={deleteAllChatNotifs}>Clear All Chats</button>
            </div>
           
        </div>
          
        </PortalPopup>
      )}
      {isPatientConsentFormOpen && (
        <ConsentForm
          testType={testType}
          docfirstname={docfirstname}
          doclastname={doclastname}
          consentrequestid={currentconsentrequestID}
          primaryradid={primaryradiologistid}
          patientid={patId}
          testid = {testID}
        />
      )}
    </>
  );
};

export default PatientDashboard;
