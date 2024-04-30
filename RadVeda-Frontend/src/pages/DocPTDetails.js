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

  const onFrameContainer1Click = useCallback(() => {
    console.log(testType);  // returns blank?
    console.log(patientRemarks);
    console.log(radiologistRemarks);
    
    // if (!testType) {
    //   alert("Please Fill in Test Type");
    //   return;
    // }
    var doctorid;
    request(
      "GET",
      "http://localhost:9191/doctors/profile",
      {},
      true 
      ).then(
        (response) => {
          console.log(response);
          doctorid = response.data.id;
          console.log("docID" + doctorid)
  
          request(
            "POST",
            "http://localhost:9192/prescribe-test",
            {
              "TestType": testType,
              "PatientStatus" : 'Choose Lab',
              "DoctorStatus" : 'Pending For Review',
              "RadiologistStatus": '',
              "LabStaffStatus": '',
              "DoctorsRemarksforPatient": patientRemarks,
              "DoctorsRemarksforRadiologist": radiologistRemarks,
              "doctorID" : doctorid,
              "PatientID" : localStorage.getItem("patientID"),
              "DoctorNotes" : '',
              "OriginalImage": ''    
          },
            true 
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
        }
      ).catch(
        (error) => {
          alert(error.response.data.error);
        }
      )   


  }, [navigate, testType, patientRemarks, radiologistRemarks]);

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
          <img className="vector-icon86" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon87" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon88" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child16" onClick={openNotifications}/>
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

export default DocPTDetails;
