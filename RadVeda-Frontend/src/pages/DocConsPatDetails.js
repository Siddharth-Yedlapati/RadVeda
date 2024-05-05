import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocConsPatDetails.css";

const DocConsPatDetails = () => {
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
    navigate("/doc-cons-pfr-rad");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-cons-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/doc-cons-diag-complete");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-cons-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-cons-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/doc-cons-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="doc-cons-pat-details">
        <div className="doc-cons-pat-details-child" />
        <img className="vector-icon240" alt="" />
        <img
          className="doc-cons-pat-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing54">
          <img className="vector-icon241" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon242" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon243" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child52" onClick={openNotifications}/>
          <div className="div123">03</div>
        </div>
        <img className="need-help-icon54" alt="" src="/need-help.svg" />
        <div className="doc-cons-pat-details-inner" />
        <div className="doc-cons-pat-details-child1" />
        <div className="patient-details-parent1">
          <b className="patient-details3">Patient Details</b>
          <div className="frame-child480" />
          <div className="frame-child481" />
          <div className="frame-child482" />
          <div className="frame-child482" />
          <div className="name-ayesha5">Name : Ayesha Bazmi</div>
          <div className="dob-031019905">DOB : 03/10/1990</div>
          <div className="frame-wrapper9">
            <div className="ellipse-parent3">
              <img className="frame-child484" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-wrapper3">
                <div className="ayesha-bazmi5">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-245">Age : 24</div>
          <img className="icon-mail3" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom3">: ayeshabazmi@gmail.com</div>
        </div>
        <div className="doc-cons-pat-details-inner1">
          <div className="back-wrapper66">
            <div className="back91">Back</div>
          </div>
        </div>
        <div className="variant-master6">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="variant-master7">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="tests-for-which-consultation-w-group">
          <b className="tests-for-which1">
            Tests for which consultation was requested
          </b>
          <div className="frame-child480" />
          <div className="frame-parent67">
            <div className="group-wrapper152" onClick={onFrameContainerClick}>
              <div className="mri-wrapper6">
                <div className="mri8">MRI</div>
              </div>
            </div>
            <div className="group-parent100" onClick={onFrameContainer1Click}>
              <div className="ct-scan-wrapper6">
                <div className="mri8">CT Scan</div>
              </div>
              <div className="remark28">Remark2</div>
            </div>
            <div className="group-parent101" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper6">
                <div className="mri8">X-Ray</div>
              </div>
              <div className="remark28">Remark3</div>
            </div>
            <div className="test-type-parent6">
              <div className="mri8">Test Type</div>
              <div className="parent13">
                <div className="div124">04/10/2023</div>
                <div className="div125">25/09/2023</div>
                <div className="div126">21/09/2023</div>
                <div className="date-prescribed8">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-container">
                <div className="pending-for-review14">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review15">Pending for review</div>
                <div className="diagnosis-completed7">Diagnosis Completed</div>
              </div>
              <div className="status14">Status</div>
            </div>
            <div className="remark18">Remark1</div>
          </div>
        </div>
        <div className="variant-master8">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="doctors-remarks6">Doctor’s Remarks</div>
        <div className="chat2">Chat</div>
        <div className="doc-cons-pat-details-child2" />
        <div className="variant-master9">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="variant-master10">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="other-tests-group">
          <b className="other-tests1">Other tests</b>
          <div className="frame-child480" />
          <div className="frame-parent67">
            <div className="group-wrapper152" onClick={onFrameContainer3Click}>
              <div className="mri-wrapper6">
                <div className="mri8">MRI</div>
              </div>
            </div>
            <div className="group-parent100" onClick={onFrameContainer12Click}>
              <div className="ct-scan-wrapper6">
                <div className="mri8">CT Scan</div>
              </div>
              <div className="remark28">Remark2</div>
            </div>
            <div className="group-parent101" onClick={onFrameContainer22Click}>
              <div className="x-ray-wrapper6">
                <div className="mri8">X-Ray</div>
              </div>
              <div className="remark28">Remark3</div>
            </div>
            <div className="test-type-parent6">
              <div className="mri8">Test Type</div>
              <div className="parent13">
                <div className="div124">04/10/2023</div>
                <div className="div125">25/09/2023</div>
                <div className="div126">21/09/2023</div>
                <div className="date-prescribed8">Date Prescribed</div>
              </div>
              <div className="pending-for-review-by-radiolog-container">
                <div className="pending-for-review14">
                  Pending for review by radiologist
                </div>
                <div className="pending-for-review15">
                  Pending for review by doctor
                </div>
                <div className="diagnosis-completed7">Diagnosis Completed</div>
              </div>
              <div className="status14">Status</div>
            </div>
            <div className="remark18">Remark1</div>
          </div>
        </div>
        <div className="variant-master11">
          <div className="button-master8">
            <div className="hello8">Chat</div>
          </div>
        </div>
        <div className="doctors-remarks7">Doctor’s Remarks</div>
        <div className="chat3">Chat</div>
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

export default DocConsPatDetails;
