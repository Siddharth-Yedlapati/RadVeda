import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocOwnRadNotes from "../components/DocOwnRadNotes";
import DocOwnNotes from "../components/DocOwnNotes";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DocOwnDiagComplete.css";

const DocOwnDiagComplete = () => {
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
  const [isDocOwnRadNotesOpen, setDocOwnRadNotesOpen] = useState(false);
  const [isDocOwnNotesOpen, setDocOwnNotesOpen] = useState(false);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [notes, setNotes] = useState("");

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

  const openDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(true);
  }, []);

  const closeDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(false);
  }, []);

  const openDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(true);
  }, []);

  const closeDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(false);
  }, []);

  const openEditor = useCallback(() => {
    setEditorOpen(true);
  }, []);

  const closeEditor = useCallback(() => {
    setEditorOpen(false);
  }, []);

  const saveNotes = useCallback(() => {
    // Send 'notes' to the backend
    console.log("Saving notes:", notes);
    // Close the editor overlay
    closeEditor();
  }, [notes, closeEditor]);

  return (
    <>
      <div className="doc-own-diag-complete">
        <div className="doc-own-diag-complete-child" />
        <img className="vector-icon125" alt="" />
        <img
          className="doc-own-diag-complete-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing28">
          <img className="vector-icon126" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon127" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon128" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child26" onClick={openNotifications}/>
          <div className="div60">03</div>
        </div>
        <img className="need-help-icon28" alt="" src="/need-help.svg" />
        <div className="doc-own-diag-complete-inner" />
        <div className="doc-own-diag-complete-child1" />
        <div className="rectangle-parent15">
          <div className="frame-child251" />
          <b className="annotated-image5">Annotated Image</b>
          <div className="frame-child252" />
          <b className="test-details15">Test Details</b>
          <div className="frame-child253" />
          <div className="frame-child254" />
          <div className="frame-child252" />
          <b className="original-image13">Original Image</b>
          <img className="xray1-1-icon13" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon8"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="frame-child256" />
          <div className="frame-child257" />
          <img className="frame-child258" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child259" alt="" src="/polygon-5.svg" />
          <img className="frame-child260" alt="" src="/polygon-6.svg" />
          <div className="frame-child261" />
          <div className="frame-child262" />
          <div className="frame-child263" />
          <img className="frame-child264" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child265" alt="" src="/polygon-5.svg" />
          <img className="frame-child266" alt="" src="/polygon-6.svg" />
          <div className="frame-child267" />
          <div className="group-wrapper74">
            <div className="view-radiologists-details-wrapper6">
              <div className="view-radiologists-details8">
                View Radiologist’s Details
              </div>
            </div>
          </div>
          <div className="group-wrapper75" onClick={openDocOwnRadNotes}>
            <div className="view-radiologists-notes-wrapper6">
              <div className="view-radiologists-details8">
                View Radiologist’s Impressions
              </div>
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner1">
          <div className="back-wrapper33">
            <div className="view-radiologists-details8">Back</div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner2">
          <div className="view-other-doctors-notes-wrapper1">
            <div className="view-radiologists-details8">
              View other doctors’ Notes
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner3" onClick={openEditor}>
          <div className="view-own-notes-wrapper5">
            <div className="view-radiologists-details8">View own Impressions</div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner4">
          <div className="view-personnel-info-wrapper11">
            <div className="view-radiologists-details8">
              View Personnel Info
            </div>
          </div>
        </div>
        <div className="doc-own-diag-complete-inner5">
          <div className="view-report-wrapper2">
            <div className="view-radiologists-details8">View Report</div>
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
      {isDocOwnRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnRadNotes}
        >
          <DocOwnRadNotes onClose={closeDocOwnRadNotes} />
        </PortalPopup>
      )}
      {isDocOwnNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnNotes}
        >
          <DocOwnNotes onClose={closeDocOwnNotes} />
        </PortalPopup>
      )}
      {isEditorOpen && (
        <div className="overlay">
          <div className="editorContainer">
            <textarea
              className="editorTextarea"
              placeholder="Type your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button className="saveBtn" onClick={saveNotes}>Save</button>
            <button className="closeBtn" onClick={closeEditor}>Close</button>
          </div>
        </div>
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

export default DocOwnDiagComplete;
