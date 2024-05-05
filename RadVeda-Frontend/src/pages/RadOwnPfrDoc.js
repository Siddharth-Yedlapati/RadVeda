import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadOwnDocNotes from "../components/RadOwnDocNotes";
import RadOwnNotes from "../components/RadOwnNotes";
import RadOwnOtherRadNotes from "../components/RadOwnOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadOwnPfrDoc.css";

const RadOwnPfrDoc = () => {
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
    navigate("/rad-own-pfrbd-editor");
  }, [navigate]);

  const openRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(true);
  }, []);

  const closeRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-own-pfrbd-annotater");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-pfrbd-chat");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/rad-own-pfrbd-cons-rad");
  }, [navigate]);

  const openRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(true);
  }, []);

  const closeRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(false);
  }, []);

  return (
    <>
      <div className="rad-own-pfr-doc">
        <div className="rad-own-pfr-doc-child" />
        <img className="vector-icon53" alt="" />
        <img
          className="rad-own-pfr-doc-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing11">
          <img className="vector-icon54" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon55" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon56" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child9" onClick={openNotifications}/>
          <div className="div31">03</div>
        </div>
        <img className="need-help-icon11" alt="" src="/need-help.svg" />
        <div className="rad-own-pfr-doc-inner" />
        <div className="rad-own-pfr-doc-child1" />
        <div className="frame-parent18">
          <div className="group-wrapper37" onClick={openRadOwnDocNotes}>
            <div className="view-doctors-notes-container">
              <div className="view-doctors-notes1">View Doctor’s Impressions</div>
            </div>
          </div>
          <img className="frame-child50" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image1">Self Annotated Image</b>
          <div className="frame-child51" />
          <b className="test-details3">Test Details</b>
          <div className="frame-child52" />
          <div className="frame-child53" />
          <div className="frame-child51" />
          <b className="original-image1">Original Image</b>
          <img className="xray1-1-icon1" alt="" src="/xray1-1@2x.png" />
          <img
            className="annotely-image-1-icon1"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper38" onClick={onFrameContainer1Click}>
            <div className="add-notes-container">
              <div className="view-doctors-notes1">Add Impressions</div>
            </div>
          </div>
          <div className="group-wrapper39" onClick={openRadOwnNotes}>
            <div className="view-own-notes-container">
              <div className="view-doctors-notes1">View own Impressions</div>
            </div>
          </div>
          <div className="group-wrapper40" onClick={onFrameContainer3Click}>
            <div className="add-further-annotations-container">
              <div className="view-doctors-notes1">Add further annotations</div>
            </div>
          </div>
          <div className="group-wrapper41">
            <div className="view-personnel-info-container">
              <div className="view-doctors-notes1">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child55" />
          <div className="frame-child56" />
          <img className="frame-child57" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child58" alt="" src="/polygon-5.svg" />
          <img className="frame-child59" alt="" src="/polygon-6.svg" />
          <div className="frame-child60" />
        </div>
        <div
          className="rad-own-pfr-doc-inner1"
          onClick={onFrameContainer12Click}
        >
          <div className="back-wrapper11">
            <div className="view-doctors-notes1">Back</div>
          </div>
        </div>
        <img
          className="rad-own-pfr-doc-child2"
          alt=""
          src="/rectangle-5907.svg"
        />
        <img
          className="annotely-image-1-11"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div
          className="rad-own-pfr-doc-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="collaborate-with-authorized-re-container">
            <div className="view-doctors-notes1">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div
          className="rad-own-pfr-doc-inner3"
          onClick={onFrameContainer32Click}
        >
          <div className="consult-other-radiologists-container">
            <div className="view-doctors-notes1">
              Consult Other Radiologists
            </div>
          </div>
        </div>
        <div
          className="rad-own-pfr-doc-inner4"
          onClick={openRadOwnOtherRadNotes}
        >
          <div className="view-other-radiologists-notes-container">
            <div className="view-doctors-notes1">
              View Other Radiologist’s Impressions
            </div>
          </div>
        </div>
        <b className="annotations-by-other1">
          Annotations by other Radiologists
        </b>
        <div className="rad-own-pfr-doc-child3" />
        <div className="rad-own-pfr-doc-child4" />
        <img
          className="rad-own-pfr-doc-child5"
          alt=""
          src="/rectangle-5913.svg"
        />
        <img className="rad-own-pfr-doc-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-own-pfr-doc-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-own-pfr-doc-child8" />
        <div className="rad-own-pfr-doc-inner5">
          <div className="view-other-radiologists-detai-container">
            <div className="view-doctors-notes1">
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

export default RadOwnPfrDoc;
