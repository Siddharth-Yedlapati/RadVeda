import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./SuDashboard.css";

const SuDashboard = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/su-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/su-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const onFrameContainerClick = useCallback(() => {
    navigate("/su-review-modification");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/su-review-deletion");
  }, [navigate]);

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

  const onFrameContainer12Click = useCallback(() => {
    navigate("/su-view-admins");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/su-review-signup");
  }, [navigate]);

  return (
    <>
      <div className="su-dashboard">
        <div className="su-dashboard-inner" onClick={onFrameContainerClick}>
          <div className="review-account-modification-re-wrapper">
            <div className="review-account-modification">{`review Account Modification Requests `}</div>
          </div>
        </div>
        <div className="su-dashboard-child" onClick={onFrameContainer1Click}>
          <div className="review-account-deletion-reques-wrapper">
            <div className="review-account-modification">
              Review Account Deletion Requests
            </div>
          </div>
        </div>
        <div className="group-parent2">
          <div className="rectangle-wrapper">
            <div className="group-child" />
          </div>
          <div className="frame-child5" />
          <div className="clear-all">clear all</div>
        </div>
        <img className="vector-icon13" alt="" />
        <img
          className="su-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing2">
          <img className="vector-icon14" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon15" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon16" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-inner" onClick={openNotifications}/>
          <div className="div5">03</div>
        </div>
        <img className="need-help-icon2" alt="" src="/need-help.svg" />
        <div className="su-dashboard-child1" />
        <div className="good-morning-super-admin1-parent">
          <div className="good-morning-super-container">
            <span>Good Morning</span>
            <b className="super-admin1"> Super Admin1</b>
          </div>
          <div className="group-frame">
            <div className="notifications-wrapper">
              <div className="review-account-modification">Notifications</div>
            </div>
          </div>
          <div className="group-wrapper1" onClick={onFrameContainer12Click}>
            <div className="notifications-wrapper">
              <div className="review-account-modification">View Admins</div>
            </div>
          </div>
          <div className="group-wrapper2" onClick={onFrameContainer2Click}>
            <div className="review-signup-requests-wrapper">
              <div className="review-account-modification">{`review signup requests `}</div>
            </div>
          </div>
        </div>
        <div className="su-dashboard-child2" />
        <div className="admin-john-doe">
          Admin John Doe, registered today 2:39 pm
        </div>
        <div className="su-dashboard-child3" />
        <div className="su-dashboard-child4" />
        <img className="line-icon" alt="" />
        <img className="su-dashboard-child5" alt="" />
        <img className="su-dashboard-child6" alt="" />
        <img className="su-dashboard-child7" alt="" />
        <div className="su-dashboard-child8" />
        <div className="statistics">Statistics</div>
        <div className="patients-online-555">patients online: 555</div>
        <div className="patients-enrolled-today">
          patients Enrolled Today: 297
        </div>
        <div className="total-patients-2587">Total Patients: 2587</div>
        <div className="doctors-onboard-857">Doctors Onboard: 857</div>
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

export default SuDashboard;
