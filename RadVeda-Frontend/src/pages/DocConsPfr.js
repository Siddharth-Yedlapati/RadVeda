import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocConsRadNotes from "../components/DocConsRadNotes";
import DocConsNotes from "../components/DocConsNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocConsPfr.css";

const DocConsPfr = () => {
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
  const [isDocConsRadNotesOpen, setDocConsRadNotesOpen] = useState(false);
  const [isDocConsNotesOpen, setDocConsNotesOpen] = useState(false);
  

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
    navigate("/doc-cons-pfr-editor");
  }, [navigate]);

  const openDocConsRadNotes = useCallback(() => {
    setDocConsRadNotesOpen(true);
  }, []);

  const closeDocConsRadNotes = useCallback(() => {
    setDocConsRadNotesOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/frame-1261152851");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-cons-other-docs");
  }, [navigate]);

  const openDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(true);
  }, []);

  const closeDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(false);
  }, []);

  return (
    <>
      <div className="doc-cons-pfr">
        <div className="doc-cons-pfr-child" />
        <img className="vector-icon89" alt="" />
        <img
          className="doc-cons-pfr-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing19">
          <img className="vector-icon90" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon91" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon92" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child17" onClick={openNotifications}/>
          <div className="div45">03</div>
        </div>
        <img className="need-help-icon19" alt="" src="/need-help.svg" />
        <div className="doc-cons-pfr-inner" />
        <div className="doc-cons-pfr-child1" />
        <div className="rectangle-parent10">
          <div className="frame-child133" />
          <b className="annotated-image">Annotated Image</b>
          <div className="frame-child134" />
          <b className="test-details8">Test Details</b>
          <div className="frame-child135" />
          <div className="frame-child136" />
          <div className="frame-child134" />
          <b className="original-image6">Original Image</b>
          <img className="xray1-1-icon6" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon3"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper61" onClick={onFrameContainerClick}>
            <div className="add-notes-frame">
              <div className="consult-other-doctors">Add Impressions</div>
            </div>
          </div>
          <div className="frame-child138" />
          <div className="frame-child139" />
          <img className="frame-child140" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child141" alt="" src="/polygon-5.svg" />
          <img className="frame-child142" alt="" src="/polygon-6.svg" />
          <div className="frame-child143" />
          <div className="frame-child144" />
          <div className="frame-child145" />
          <img className="frame-child146" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child147" alt="" src="/polygon-5.svg" />
          <img className="frame-child148" alt="" src="/polygon-6.svg" />
          <div className="frame-child149" />
          <div className="group-wrapper62" onClick={openDocConsRadNotes}>
            <div className="view-radiologists-notes-wrapper1">
              <div className="consult-other-doctors">
                View Radiologist’s Impressions
              </div>
            </div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner1">
          <div className="back-wrapper22">
            <div className="consult-other-doctors">Back</div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner2" onClick={onFrameContainer2Click}>
          <div className="collaborate-with-authorized-re-frame">
            <div className="consult-other-doctors">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner3" onClick={onFrameContainer3Click}>
          <div className="consult-other-doctors-wrapper">
            <div className="consult-other-doctors">Consult Other Doctors</div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner4" onClick={openDocConsNotes}>
          <div className="view-own-notes-wrapper1">
            <div className="consult-other-doctors">View own Impressions</div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner5">
          <div className="view-personnel-info-wrapper4">
            <div className="consult-other-doctors">View Personnel Info</div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner6">
          <div className="view-radiologists-details-wrapper1">
            <div className="consult-other-doctors">
              View Radiologist’s Details
            </div>
          </div>
        </div>
        <div className="doc-cons-pfr-inner7">
          <div className="view-other-doctors-notes-wrapper">
            <div className="consult-other-doctors">
              View other doctors’ Notes
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
      {isDocConsRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocConsRadNotes}
        >
          <DocConsRadNotes onClose={closeDocConsRadNotes} />
        </PortalPopup>
      )}
      {isDocConsNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocConsNotes}
        >
          <DocConsNotes onClose={closeDocConsNotes} />
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

export default DocConsPfr;
