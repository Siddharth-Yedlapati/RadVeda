import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocPTVerification.css";

const DocPTVerification = () => {
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
  const [patientID, setpatientID] = useState("");
  const [otp, setOTP] = useState("");

  console.log("HERE",otp)

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


  const sendOTP = useCallback(() => {
    //send otp logic
  }, []);

  const onFrameContainerClick = useCallback(() => {
    localStorage.setItem("patientID", patientID);
    navigate("/doc-pt-details");
  }, [navigate, patientID]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-dashboard");
  }, [navigate]);

  return (
    <>
      <div className="doc-pt-verification">
        <div className="doc-pt-verification-child" />
        <img className="vector-icon81" alt="" />
        <img
          className="doc-pt-verification-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing17">
          <img className="vector-icon82" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon83" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon84" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child15" onClick={openNotifications}/>
          <div className="div43">03</div>
        </div>
        <img className="need-help-icon17" alt="" src="/need-help.svg" />
        <div className="doc-pt-verification-inner" />
        <div className="doc-pt-verification-child1" />
        <div className="frame-parent25">
          <div className="group-wrapper56" onClick={onFrameContainerClick}>
            <div className="submit-wrapper">
              <div className="enter-otp">Submit</div>
            </div>
          </div>
          <div className="frame-child129" />
          <div className="frame-child130" />
          <div className="group-wrapper57">
            <div className="enter-otp-wrapper">
              <div className="enter-otp">Enter OTP</div>
            </div>
          </div>
        </div>
        <div className="doc-pt-verification-inner1"onClick={sendOTP}>
          <div className="send-otp-wrapper">
            <div className="enter-otp" onClick={sendOTP}>Send OTP</div>
          </div>
        </div>
        <div className="text-fieldoutlined69">
          <div className="input69">
            <div className="content74">
              <div className="min-height69" />
              
              <input
              type="text"
              className="label69"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
              />
              
            </div>
          </div>
          <div className="helpertext69">
            <div className="helper-text69">Helper text</div>
          </div>
        </div>
        <div className="text-fieldoutlined70">
          <div className="input69">
            <div className="content74">
              <div className="min-height69" />
              <input
              type="text"
              className="label69"
              value={patientID}
              onChange={(e) => setpatientID(e.target.value)}
              placeholder="Enter PatientID"
              />
            </div>
          </div>
          <div className="helpertext69">
            <div className="helper-text69">Helper text</div>
          </div>
        </div>
        <div
          className="doc-pt-verification-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper20">
            <div className="enter-otp">Back</div>
          </div>
        </div>
        <div className="doc-pt-verification-inner3">
          <div className="patient-id-wrapper">
            <div className="enter-otp">Patient ID</div>
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

export default DocPTVerification;
