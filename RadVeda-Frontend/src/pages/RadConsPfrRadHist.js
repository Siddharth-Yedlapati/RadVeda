import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsPfrRadHist.css";

const RadConsPfrRadHist = () => {
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
    navigate("/rad-cons-pat-details");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pfr-rad-hist">
        <div className="rad-cons-pfr-rad-hist-child" />
        <img
          className="rad-cons-pfr-rad-hist-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing49">
          <img className="vector-icon220" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon221" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon222" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child47" onClick={openNotifications}/>
          <div className="div118">03</div>
        </div>
        <img className="need-help-icon49" alt="" src="/need-help.svg" />
        <div className="rad-cons-pfr-rad-hist-inner" />
        <div className="rad-cons-pfr-rad-hist-child1" />
        <div className="frame-parent62">
          <div className="group-wrapper136">
            <div className="view-doctors-notes-wrapper11">
              <div className="view-doctors-notes13">View Doctor’s Impressions</div>
            </div>
          </div>
          <div className="frame-child407" />
          <b className="test-details23">Test Details</b>
          <div className="frame-child408" />
          <div className="frame-child409" />
          <div className="frame-child407" />
          <b className="original-image18">Original Image</b>
          <img className="xray1-1-icon21" alt="" src="/xray1-1@2x.png" />
          <div className="group-wrapper137">
            <div className="view-personnel-info-wrapper17">
              <div className="view-doctors-notes13">View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child411" />
          <div className="frame-child412" />
          <img className="frame-child413" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child414" alt="" src="/polygon-5.svg" />
          <img className="frame-child415" alt="" src="/polygon-6.svg" />
          <div className="frame-child416" />
          <img className="vector-icon223" alt="" />
          <img className="frame-child417" alt="" src="/rectangle-5907.svg" />
          <div className="group-wrapper138">
            <div className="view-radiologists-notes-wrapper9">
              <div className="view-doctors-notes13">
                View Radiologist’s Impressions
              </div>
            </div>
          </div>
          <b className="annotations-by-radiologists3">
            Annotations by Radiologists
          </b>
          <img
            className="annotely-image-1-17"
            alt=""
            src="/annotely-image-1-1@2x.png"
          />
          <div className="frame-child418" />
          <div className="frame-child419" />
          <img className="frame-child420" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child421" alt="" src="/polygon-5.svg" />
          <img className="frame-child422" alt="" src="/polygon-6.svg" />
          <div className="frame-child423" />
          <div className="group-wrapper139">
            <div className="view-radiologists-details-wrapper9">
              <div className="view-doctors-notes13">
                View Radiologist’s Details
              </div>
            </div>
          </div>
        </div>
        <div
          className="rad-cons-pfr-rad-hist-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper60">
            <div className="view-doctors-notes13">Back</div>
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

export default RadConsPfrRadHist;
