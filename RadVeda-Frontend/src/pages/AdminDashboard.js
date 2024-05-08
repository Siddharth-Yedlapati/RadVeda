import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [id, setID] = useState(0)
  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/admins/profile",
      {},
      true
      ).then(response => {
        console.log("ID",response.data.id)
        setID(response.data.id);
      }).catch(error => {
        navigate("/admin-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/admin-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const onFrameContainerClick = useCallback(() => {
    navigate("/admin-review-signup");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/admin-review-deletion");
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
  
  const [statistics, setStatistics] = useState(["Pending <requestType> requests made <temporalScope> by <requesterType>s: <count>", "there", "my", "name"]);

  useEffect(() => {

    // Request statistics
    
      request(
        "GET",
        "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
        {
          "requesterType": "DOCTOR",
          "requestType": "SIGNUP",
          "clientType": "ADMIN",
          "clientId": 1
        },
        true
      ).then(
        (response) => {
          console.log("RESPONSE", response)
        }
      ).catch(
        (error) => {
          console.log(error.response.data.error)
          // alert(error.response.data.error);
        }
      );
    
  }, []);
  

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
    navigate("/admin-view-doctors");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/admin-view-radiologists");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/admin-review-modifications");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/admin-view-labstaff");
  }, [navigate]);

  return (
    <>
      <div className="admin-dashboard">
        <div className="admin-dashboard-child" />
        <div className="admin-dashboard-inner" onClick={onFrameContainerClick}>
          <div className="review-signup-requests-container">
            <div className="view-doctors">{`review signup requests `}</div>
          </div>
        </div>
        <div
          className="admin-dashboard-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="review-account-deletion-reques-container">
            <div className="view-doctors">Review Account Deletion Requests</div>
          </div>
        </div>
        
        <img className="vector-icon168" alt="" />
        <img
          className="admin-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing37">
          <img className="vector-icon169" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon170" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon171" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child35" onClick={openNotifications}/>
          <div className="div83">03</div>
        </div>
        <img className="need-help-icon37" alt="" src="/need-help.svg" />
        <div className="admin-dashboard-child1" />
        <div className="good-morning-admin1-parent">
          <div className="good-morning-admin1-container">
            <span>Good Morning</span>
            <b className="admin14"> Admin1</b>
          </div>
          
          <div className="group-wrapper86" onClick={onFrameContainer12Click}>
            <div className="view-doctors-wrapper">
              <div className="view-doctors">View doctors</div>
            </div>
          </div>
          <div className="group-wrapper87" onClick={onFrameContainer2Click}>
            <div className="view-radiologists-wrapper">
              <div className="view-doctors">view radiologists</div>
            </div>
          </div>
        </div>
        <div
          className="admin-dashboard-inner3"
          onClick={onFrameContainer4Click}
        >
          <div className="review-account-modification-re-container">
            <div className="view-doctors">{`review Account Modification Requests `}</div>
          </div>
        </div>
        <div
          className="admin-dashboard-inner4"
          onClick={onFrameContainer5Click}
        >
          <div className="view-lab-staff-wrapper">
            <div className="view-doctors">View lab staff</div>
          </div>
        </div>
        
        
        {/* <div className="admin-dashboard-child4" />
        <div className="statistics1">
          <h3>Statistics</h3>
        {statistics.map((stat, index) => (
            <div key={index}>{stat}</div>
          ))}
        </div> */}
        <div className="statistics-container">
            <h2 className="statistics-heading">Statistics</h2>
              {statistics.map((stat, index) => (
                <div className="statistics-message" key={index}>
                <div className="statistics-content">{stat}</div>
        </div>
  ))}
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

export default AdminDashboard;
