import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadOwnDocNotes from "../components/RadOwnDocNotes";
import RadOwnNotes from "../components/RadOwnNotes";
import RadOwnOtherRadNotes from "../components/RadOwnOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import "./RadOwnPfr.css";

const RadOwnPfr = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/radiologists/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/rad-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/rad-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const [isRadOwnDocNotesOpen, setRadOwnDocNotesOpen] = useState(false);
  const [isRadOwnNotesOpen, setRadOwnNotesOpen] = useState(false);
  const [isImageEditorOpen, setImageEditorOpen] = useState(false);
  const [isRadOwnOtherRadNotesOpen, setRadOwnOtherRadNotesOpen] =
    useState(false);
  

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

  const openRadOwnDocNotes = useCallback(() => {
    setRadOwnDocNotesOpen(true);
  }, []);

  const closeRadOwnDocNotes = useCallback(() => {
    setRadOwnDocNotesOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-own-pfr-annotater");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-pfr-editor");
  }, [navigate]);

  const openRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(true);
  }, []);

  const closeRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(false);
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/rad-own-pfr-chat");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/rad-own-pfr-cons-rad");
  }, [navigate]);

  const openRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(true);
  }, []);

  const openImageEditor = useCallback(() => {
    setImageEditorOpen(true);
  }, []);

  const closeImageEditor = useCallback(() => {
    setImageEditorOpen(false);
  }, []);

  const closeRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(false);
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pfr">
        <div className="rad-own-pfr-child" />
        <img className="vector-icon49" alt="" />
        <img
          className="rad-own-pfr-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing10">
          <img className="vector-icon50" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon51" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon52" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child8" onClick={openNotifications}/>
          <div className="div30">03</div>
        </div>
        <img className="need-help-icon10" alt="" src="/need-help.svg" />
        <div className="rad-own-pfr-inner" />
        <div className="rad-own-pfr-child1" />
        <div className="frame-parent17">
          <div className="group-wrapper34" onClick={openRadOwnDocNotes}>
            <div className="view-doctors-notes-wrapper">
              <div className="view-doctors-notes">View Doctor’s Notes</div>
            </div>
          </div>
          <img className="rectangle-icon" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image">Self Annotated Image</b>
          <div className="frame-child41" />
          <b className="test-details2">Test Details</b>
          <div className="frame-child42" />
          <div className="frame-child43" />
          <div className="frame-child41" />
          <b className="original-image">Original Image</b>
          <img className="xray1-1-icon" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper35" onClick = {openImageEditor}>
            <div className="add-further-annotations-wrapper">
              <div className="view-doctors-notes">Add further annotations</div>
            </div>
          </div>
          <div className="group-wrapper36">
            <div className="view-personnel-info-wrapper">
              <div className="view-doctors-notes">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child45" />
          <div className="frame-child46" />
          <img className="frame-child47" alt="" src="/rectangle-5913.svg" />
          <img className="polygon-icon" alt="" src="/polygon-5.svg" />
          <img className="frame-child48" alt="" src="/polygon-6.svg" />
          <div className="frame-child49" />
        </div>
        <div className="rad-own-pfr-inner1" onClick={onFrameContainer12Click}>
          <div className="finish-review-wrapper">
            <div className="view-doctors-notes">Finish review</div>
          </div>
        </div>
        <div className="rad-own-pfr-inner2" onClick={onFrameContainer2Click}>
          <div className="add-notes-wrapper">
            <div className="view-doctors-notes">Add Notes</div>
          </div>
        </div>
        <div className="rad-own-pfr-inner3" onClick={openRadOwnNotes}>
          <div className="view-own-notes-wrapper">
            <div className="view-doctors-notes">View own notes</div>
          </div>
        </div>
        <img className="rad-own-pfr-child2" alt="" src="/rectangle-5907.svg" />
        <div className="rad-own-pfr-inner4" onClick={onFrameContainer4Click}>
          <div className="collaborate-with-authorized-re-wrapper">
            <div className="view-doctors-notes">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div className="rad-own-pfr-inner5" onClick={onFrameContainer5Click}>
          <div className="consult-other-radiologists-wrapper">
            <div className="view-doctors-notes">Consult Other Radiologists</div>
          </div>
        </div>
        <div className="rad-own-pfr-inner6" onClick={openRadOwnOtherRadNotes}>
          <div className="view-other-radiologists-notes-wrapper">
            <div className="view-doctors-notes">
              View Other Radiologist’s Notes
            </div>
          </div>
        </div>
        <b className="annotations-by-other">
          Annotations by other Radiologists
        </b>
        <img
          className="annotely-image-1-1"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div className="rad-own-pfr-inner7" onClick={onFrameContainer7Click}>
          <div className="back-wrapper10">
            <div className="view-doctors-notes">Back</div>
          </div>
        </div>
        <div className="rad-own-pfr-child3" />
        <div className="rad-own-pfr-child4" />
        <img className="rad-own-pfr-child5" alt="" src="/rectangle-5913.svg" />
        <img className="rad-own-pfr-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-own-pfr-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-own-pfr-child8" />
        <div className="rad-own-pfr-inner8">
          <div className="view-other-radiologists-detai-wrapper">
            <div className="view-doctors-notes">
              View Other Radiologist’s Details
            </div>
          </div>
        </div>
      </div>
      {isImageEditorOpen && (
        <ImageEditorComponent/>
      )}
      {isNPUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNPUserOptions}
        >
          <NPUserOptions onClose={closeNPUserOptions} />
        </PortalPopup>
      )}
      {isRadOwnDocNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnDocNotes}
        >
          <RadOwnDocNotes onClose={closeRadOwnDocNotes} />
        </PortalPopup>
      )}
      {isRadOwnNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnNotes}
        >
          <RadOwnNotes onClose={closeRadOwnNotes} />
        </PortalPopup>
      )}
      {isRadOwnOtherRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadOwnOtherRadNotes}
        >
          <RadOwnOtherRadNotes onClose={closeRadOwnOtherRadNotes} />
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

export default RadOwnPfr;
