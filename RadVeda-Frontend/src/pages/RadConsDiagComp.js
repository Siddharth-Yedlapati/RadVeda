import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadConsDocNotes from "../components/RadConsDocNotes";
import RadConsNotes from "../components/RadConsNotes";
import RadConsOtherRadNotes from "../components/RadConsOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsDiagComp.css";

const RadConsDiagComp = () => {
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
  const [isRadConsDocNotesOpen, setRadConsDocNotesOpen] = useState(false);
  const [isRadConsNotesOpen, setRadConsNotesOpen] = useState(false);
  const [isRadConsOtherRadNotesOpen, setRadConsOtherRadNotesOpen] =
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

  const openRadConsDocNotes = useCallback(() => {
    setRadConsDocNotesOpen(true);
  }, []);

  const closeRadConsDocNotes = useCallback(() => {
    setRadConsDocNotesOpen(false);
  }, []);

  const openRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(true);
  }, []);

  const closeRadConsNotes = useCallback(() => {
    setRadConsNotesOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  const openRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(true);
  }, []);

  const closeRadConsOtherRadNotes = useCallback(() => {
    setRadConsOtherRadNotesOpen(false);
  }, []);

  return (
    <>
      <div className="rad-cons-diag-comp">
        <div className="rad-cons-diag-comp-child" />
        <img className="vector-icon236" alt="" />
        <img
          className="rad-cons-diag-comp-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing53">
          <img className="vector-icon237" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon238" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon239" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child51" onClick={openNotifications}/>
          <div className="div122">03</div>
        </div>
        <img className="need-help-icon53" alt="" src="/need-help.svg" />
        <div className="rad-cons-diag-comp-inner" />
        <div className="rad-cons-diag-comp-child1" />
        <div className="frame-parent66">
          <div className="group-wrapper149" onClick={openRadConsDocNotes}>
            <div className="view-doctors-notes-wrapper15">
              <div className="view-doctors-notes17">View Doctors’ Notes</div>
            </div>
          </div>
          <img className="frame-child469" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image5">self Annotated Image</b>
          <div className="frame-child470" />
          <b className="test-details27">Test Details</b>
          <div className="frame-child471" />
          <div className="frame-child472" />
          <div className="frame-child470" />
          <b className="original-image22">Original Image</b>
          <img className="xray1-1-icon25" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon13"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper150" onClick={openRadConsNotes}>
            <div className="view-own-notes-wrapper8">
              <div className="view-doctors-notes17">View own notes</div>
            </div>
          </div>
          <div className="group-wrapper151">
            <div className="view-personnel-info-wrapper21">
              <div className="view-doctors-notes17">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child474" />
          <div className="frame-child475" />
          <img className="frame-child476" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child477" alt="" src="/polygon-5.svg" />
          <img className="frame-child478" alt="" src="/polygon-6.svg" />
          <div className="frame-child479" />
        </div>
        <div
          className="rad-cons-diag-comp-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper64">
            <div className="view-doctors-notes17">Back</div>
          </div>
        </div>
        <img
          className="rad-cons-diag-comp-child2"
          alt=""
          src="/rectangle-5907.svg"
        />
        <img
          className="annotely-image-1-111"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div
          className="rad-cons-diag-comp-inner2"
          onClick={openRadConsOtherRadNotes}
        >
          <div className="view-other-radiologists-notes-wrapper3">
            <div className="view-doctors-notes17">
              View Other Radiologist’s Notes
            </div>
          </div>
        </div>
        <b className="annotations-by-other5">
          Annotations by other Radiologists
        </b>
        <div className="rad-cons-diag-comp-inner3">
          <div className="view-report-wrapper5">
            <div className="view-doctors-notes17">View Report</div>
          </div>
        </div>
        <div className="rad-cons-diag-comp-child3" />
        <div className="rad-cons-diag-comp-child4" />
        <img
          className="rad-cons-diag-comp-child5"
          alt=""
          src="/rectangle-5913.svg"
        />
        <img
          className="rad-cons-diag-comp-child6"
          alt=""
          src="/polygon-5.svg"
        />
        <img
          className="rad-cons-diag-comp-child7"
          alt=""
          src="/polygon-6.svg"
        />
        <div className="rad-cons-diag-comp-child8" />
        <div className="rad-cons-diag-comp-inner4">
          <div className="view-other-radiologists-detai-wrapper3">
            <div className="view-doctors-notes17">
              View Other Radiologist’s Details
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
      {isRadConsDocNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsDocNotes}
        >
          <RadConsDocNotes onClose={closeRadConsDocNotes} />
        </PortalPopup>
      )}
      {isRadConsNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsNotes}
        >
          <RadConsNotes onClose={closeRadConsNotes} />
        </PortalPopup>
      )}
      {isRadConsOtherRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRadConsOtherRadNotes}
        >
          <RadConsOtherRadNotes onClose={closeRadConsOtherRadNotes} />
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

export default RadConsDiagComp;
