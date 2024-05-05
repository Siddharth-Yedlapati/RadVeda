import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadConsPatDetails.css";

const RadConsPatDetails = () => {
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
    navigate("/rad-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/rad-cons-pfr-doc");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/rad-cons-pfr");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/rad-cons-diag-comp");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/rad-cons-pfr-doc-hist");
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate("/rad-cons-pfr-rad-hist");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/rad-cons-diag-comp-hist");
  }, [navigate]);

  return (
    <>
      <div className="rad-cons-pat-details">
        <div className="rad-cons-pat-details-child" />
        <img className="vector-icon204" alt="" />
        <img
          className="rad-cons-pat-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing45">
          <img className="vector-icon205" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon206" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon207" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child43" onClick={openNotifications}/>
          <div className="div106">03</div>
        </div>
        <img className="need-help-icon45" alt="" src="/need-help.svg" />
        <div className="rad-cons-pat-details-inner" />
        <div className="rad-cons-pat-details-child1" />
        <div className="patient-details-container">
          <b className="patient-details2">Patient Details</b>
          <div className="frame-child383" />
          <div className="frame-child384" />
          <div className="frame-child385" />
          <div className="frame-child385" />
          <div className="name-ayesha4">Name : Ayesha Bazmi</div>
          <div className="dob-031019904">DOB : 03/10/1990</div>
          <div className="frame-wrapper8">
            <div className="ellipse-parent2">
              <img className="frame-child387" alt="" src="/ellipse-1@2x.png" />
              <div className="ayesha-bazmi-wrapper2">
                <div className="ayesha-bazmi4">Ayesha Bazmi</div>
              </div>
            </div>
          </div>
          <div className="age-244">Age : 24</div>
          <img className="icon-mail2" alt="" src="/-icon-mail.svg" />
          <div className="ayeshabazmigmailcom2">: ayeshabazmi@gmail.com</div>
          <div className="group-wrapper130" onClick={onFrameContainer1Click}>
            <div className="back-wrapper56">
              <div className="back81">Back</div>
            </div>
          </div>
        </div>
        <div className="remark63">Remark6</div>
        <div className="group-parent82" onClick={onFrameContainer12Click}>
          <div className="mammography-frame">
            <div className="mammography2">Mammography</div>
          </div>
          <div className="div107">21/08/2023</div>
          <div className="pending-for-review10">
            Pending for Review by doctor
          </div>
        </div>
        <div className="remark53">Remark5</div>
        <div className="remark39">Remark3</div>
        <div className="tests-for-which-consultation-w-parent">
          <b className="tests-for-which-container">
            <p className="tests-for-which">
              Tests for which consultation was requested
            </p>
          </b>
          <div className="frame-child383" />
          <div className="frame-parent53">
            <div className="group-parent83">
              <div className="mri-wrapper4">
                <div className="mammography2">MRI</div>
              </div>
              <div className="remark16">Remark1</div>
            </div>
            <div className="group-parent84" onClick={onFrameContainer13Click}>
              <div className="ct-scan-wrapper4">
                <div className="mammography2">CT Scan</div>
              </div>
              <div className="remark26">Remark2</div>
            </div>
            <div className="group-parent85" onClick={onFrameContainer2Click}>
              <div className="x-ray-wrapper4">
                <div className="mammography2">X-Ray</div>
              </div>
              <div className="remark310">Remark3</div>
            </div>
            <div className="test-type-parent4">
              <div className="mammography2">Test Type</div>
              <div className="parent11">
                <div className="div108">04/10/2023</div>
                <div className="div109">25/09/2023</div>
                <div className="div110">21/09/2023</div>
                <div className="date-prescribed6">Date Prescribed</div>
              </div>
              <div className="status10">Status</div>
              <div className="doctors-remarks4">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent1">
            <div className="test-not-conducted3">Test not conducted</div>
            <div className="pending-for-review11">Pending for review</div>
            <div className="diagnosis-completed5">Diagnosis Completed</div>
          </div>
          <div className="remark311">Remark3</div>
        </div>
        <div className="rad-cons-pat-details-child2" />
        <div className="remark64">Remark6</div>
        <div className="group-parent86" onClick={onFrameContainer3Click}>
          <div className="mammography-frame">
            <div className="mammography2">Mammography</div>
          </div>
          <div className="div107">21/08/2023</div>
          <div className="pending-for-review10">
            Pending for Review by doctor
          </div>
        </div>
        <div className="remark54">Remark5</div>
        <div className="remark312">Remark3</div>
        <div className="other-tests-parent">
          <b className="other-tests">Other tests</b>
          <div className="frame-child383" />
          <div className="frame-parent53">
            <div className="group-parent83">
              <div className="mri-wrapper4">
                <div className="mammography2">MRI</div>
              </div>
              <div className="remark17">Remark1</div>
            </div>
            <div className="group-parent84" onClick={onFrameContainer14Click}>
              <div className="ct-scan-wrapper4">
                <div className="mammography2">CT Scan</div>
              </div>
              <div className="remark27">Remark2</div>
            </div>
            <div className="group-parent85" onClick={onFrameContainer22Click}>
              <div className="x-ray-wrapper4">
                <div className="mammography2">X-Ray</div>
              </div>
              <div className="remark313">Remark3</div>
            </div>
            <div className="test-type-parent4">
              <div className="mammography2">Test Type</div>
              <div className="parent11">
                <div className="div108">04/10/2023</div>
                <div className="div109">25/09/2023</div>
                <div className="div110">21/09/2023</div>
                <div className="date-prescribed6">Date Prescribed</div>
              </div>
              <div className="status10">Status</div>
              <div className="doctors-remarks5">{`Doctor’s Remarks `}</div>
            </div>
          </div>
          <div className="test-not-conducted-parent1">
            <div className="test-not-conducted3">Test not conducted</div>
            <div className="pending-for-review11">
              Pending for review by radiologist
            </div>
            <div className="diagnosis-completed5">Diagnosis Completed</div>
          </div>
          <div className="remark314">Remark3</div>
        </div>
        <div className="remark43">Remark4</div>
        <div className="lab-staffs-remarks2">lab Staff’s remarks</div>
        <div className="remark44">Remark4</div>
        <div className="lab-staffs-remarks3">lab Staff’s remarks</div>
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

export default RadConsPatDetails;
