import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocConsNotes from "../components/DocConsNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocConsPfrRad.css";

const DocConsPfrRad = () => {
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

  const openDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(true);
  }, []);

  const closeDocConsNotes = useCallback(() => {
    setDocConsNotesOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-cons-pfrbr-editor");
  }, [navigate]);

  return (
    <>
      <div className="doc-cons-pfr-rad">
        <div className="doc-cons-pfr-rad-child" />
        <img className="vector-icon244" alt="" />
        <img
          className="doc-cons-pfr-rad-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing55">
          <img className="vector-icon245" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon246" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon247" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child53" onClick={openNotifications}/>
          <div className="div130">03</div>
        </div>
        <img className="need-help-icon55" alt="" src="/need-help.svg" />
        <div className="doc-cons-pfr-rad-inner" />
        <div className="doc-cons-pfr-rad-child1" />
        <div className="test-details-parent5">
          <b className="test-details28">Test Details</b>
          <div className="frame-child487" />
          <div className="frame-child488" />
          <div className="frame-child489" />
          <b className="original-image23">Original Image</b>
          <img className="xray1-1-icon26" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper154" onClick={openDocConsNotes}>
            <div className="view-own-notes-wrapper9">
              <div className="view-own-notes11">View own notes</div>
            </div>
          </div>
          <div className="frame-child490" />
          <div className="frame-child491" />
          <img className="frame-child492" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child493" alt="" src="/polygon-5.svg" />
          <img className="frame-child494" alt="" src="/polygon-6.svg" />
          <div className="frame-child495" />
        </div>
        <div className="doc-cons-pfr-rad-inner1">
          <div className="back-wrapper67">
            <div className="view-own-notes11">Back</div>
          </div>
        </div>
        <div
          className="doc-cons-pfr-rad-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="add-notes-wrapper5">
            <div className="view-own-notes11">Add Notes</div>
          </div>
        </div>
        <div className="doc-cons-pfr-rad-inner3">
          <div className="view-personnel-info-wrapper22">
            <div className="view-own-notes11">View Personnel Info</div>
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

export default DocConsPfrRad;
