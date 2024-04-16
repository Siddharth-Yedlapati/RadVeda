import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadOwnPatDetails.css";

const RadOwnPatDetails = () => {
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
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const [allChatNotifs, setAllChatNotifs] = useState([]);
  const [allChatNotifsID, setAllChatNotifsID] = useState([]);

  const [allConsentRequestNotifications, setAllConsentRequestNotifications] = useState([]);
  const [allConsentRequestNotificationsID, setAllConsentRequestNotificationsID] = useState([]);

  const [allOneWayNotifications, setAllOneWayNotifications] = useState([]);
  const [allOneWayNotificationsID, setAllOneWayNotificationsID] = useState([]);
  

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-own-pfr-doc");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/rad-own-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-own-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate("/rad-own-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/rad-own-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="rad-own-pat-details">
        <div className="rad-own-pat-details-child" />
        <img className="vector-icon37" alt="" />
        <img
          className="rad-own-pat-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing7">
          <img className="vector-icon38" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon39" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon40" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child5" onClick={openNotifications}/>
          <div className="div19">03</div>
        </div>
        <img className="need-help-icon7" alt="" src="/need-help.svg" />
        <div className="rad-own-pat-details-inner" />
        <div className="rad-own-pat-details-child1" />
        <div className="patient-details-parent">
          <b className="patient-details">Patient Details</b>
          <div className="frame-child29" />
          <div className="frame-child30" />
          <div className="frame-child31" />
          <div className="frame-child31" />
          <div className="name-ayesha">Name : Ayesha Bazmi</div>
          <div className="dob-03101990">DOB : 03/10/1990</div>
          <div className="frame-wrapper1">
            <div className="ellipse-parent">
              <img className="ellipse-icon" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-wrapper">
                <div className="ayesha-bazmi">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-24">Age : 24</div>
          <img className="icon-mail" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom">: ayeshabazmi@gmail.com</div>
          <div className="group-wrapper31" onClick={onFrameContainer1Click}>
            <div className="back-wrapper7">
              <div className="back18">Back</div>
            </div>
          </div>
        </div>
        <div className="remark6">Remark6</div>
        <div className="group-parent15" onClick={onFrameContainer12Click}>
          <div className="mammography-wrapper">
            <div className="mammography">Mammography</div>
          </div>
          <div className="div20">21/08/2023</div>
          <div className="pending-for-review">Pending for Review by doctor</div>
        </div>
        <div className="remark5">Remark5</div>
        <div className="remark31">Remark3</div>
        <div className="tests-assigned-to-me-parent">
          <b className="tests-assigned-to-container">
            <p className="tests-assigned-to">{`Tests assigned to me `}</p>
          </b>
          <div className="frame-child29" />
          <div className="frame-parent9">
            <div className="group-parent16">
              <div className="mri-container">
                <div className="mammography">MRI</div>
              </div>
              <div className="remark11">Remark1</div>
            </div>
            <div className="group-parent17" onClick={onFrameContainer13Click}>
              <div className="ct-scan-container">
                <div className="mammography">CT Scan</div>
              </div>
              <div className="remark21">Remark2</div>
            </div>
            <div className="group-parent18" onClick={onFrameContainer2Click}>
              <div className="x-ray-container">
                <div className="mammography">X-Ray</div>
              </div>
              <div className="remark32">Remark3</div>
            </div>
            <div className="test-type-group">
              <div className="mammography">Test Type</div>
              <div className="group">
                <div className="div21">04/10/2023</div>
                <div className="div22">25/09/2023</div>
                <div className="div23">21/09/2023</div>
                <div className="date-prescribed1">Date Prescribed</div>
              </div>
              <div className="status1">Status</div>
              <div className="doctors-remarks">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent">
            <div className="test-not-conducted">Test not conducted</div>
            <div className="pending-for-review1">Pending for review</div>
            <div className="diagnosis-completed">Diagnosis Completed</div>
          </div>
          <div className="remark33">Remark3</div>
        </div>
        <div className="rad-own-pat-details-child2" />
        <div className="remark61">Remark6</div>
        <div className="group-parent19" onClick={onFrameContainer3Click}>
          <div className="mammography-wrapper">
            <div className="mammography">Mammography</div>
          </div>
          <div className="div20">21/08/2023</div>
          <div className="pending-for-review">Pending for Review by doctor</div>
        </div>
        <div className="remark51">Remark5</div>
        <div className="remark34">Remark3</div>
        <div className="tests-assigned-to-other-radiol-parent">
          <b className="tests-assigned-to1">
            Tests assigned to other radiologists
          </b>
          <div className="frame-child29" />
          <div className="frame-parent9">
            <div className="group-parent16">
              <div className="mri-container">
                <div className="mammography">MRI</div>
              </div>
              <div className="remark12">Remark1</div>
            </div>
            <div className="group-parent17" onClick={onFrameContainer14Click}>
              <div className="ct-scan-container">
                <div className="mammography">CT Scan</div>
              </div>
              <div className="remark22">Remark2</div>
            </div>
            <div className="group-parent18" onClick={onFrameContainer22Click}>
              <div className="x-ray-container">
                <div className="mammography">X-Ray</div>
              </div>
              <div className="remark35">Remark3</div>
            </div>
            <div className="test-type-group">
              <div className="mammography">Test Type</div>
              <div className="group">
                <div className="div21">04/10/2023</div>
                <div className="div22">25/09/2023</div>
                <div className="div23">21/09/2023</div>
                <div className="date-prescribed1">Date Prescribed</div>
              </div>
              <div className="status1">Status</div>
              <div className="doctors-remarks1">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent">
            <div className="test-not-conducted">Test not conducted</div>
            <div className="pending-for-review1">
              Pending for review by radiologist
            </div>
            <div className="diagnosis-completed">Diagnosis Completed</div>
          </div>
          <div className="remark36">Remark3</div>
        </div>
        <div className="remark4">Remark4</div>
        <div className="lab-staffs-remarks">lab Staff’s remarks</div>
        <div className="remark41">Remark4</div>
        <div className="lab-staffs-remarks1">lab Staff’s remarks</div>
      </div>
      {isNPUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
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
            </div>
            <div className="message-container">
                {allConsentRequestNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="reply-button">Fill Consent Form</button>
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="message-container">
                {allOneWayNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
                <button className="clear-button"onClick={deleteAllChatNotifs}>Clear All Chats</button>
            </div>
        </div>
          
        </PortalPopup>
      )}
    </>
  );
};

export default RadOwnPatDetails;
