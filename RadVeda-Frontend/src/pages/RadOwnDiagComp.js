import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import RadOwnDocNotes from "../components/RadOwnDocNotes";
import RadOwnNotes from "../components/RadOwnNotes";
import RadOwnOtherRadNotes from "../components/RadOwnOtherRadNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./RadOwnDiagComp.css";

const RadOwnDiagComp = () => {
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

  // const arrayImgs = ["https://radveda.s3.ap-south-1.amazonaws.com/Create_a_cartoon_scene_featuring_friendly_animals_like_squirrels%2C_rabbits%2C_and_birds_playing_in_a_colorful_forest_setting.png", "https://radveda.s3.ap-south-1.amazonaws.com/porsche-g49cf45a18_1920.jpg"]
  // const arrayImgs = []
  const [arrayImgs, setArrayImgs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollUp = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? arrayImgs.length - 1 : prevIndex - 1));
    console.log("scroll up");
  }
  
  const scrollDown = () => {
    setCurrentIndex((prevIndex) => (prevIndex === arrayImgs.length - 1 ? 0 : prevIndex + 1));
    console.log("scroll down");
  }

  useEffect(() => {
    request(
      "GET",

      "http://localhost:9200/tests/1/getImageOriginal",  //@GetMapping("/{testID}/getImageOriginal")
      {},
      true
      ).then(
        (response) => {
      
          setArrayImgs([]);
          for (let i = 0; i < response.data.length; i++) {
            
            arrayImgs.push(response.data[i].imageURL);
          }

          setArrayImgs(arrayImgs);
          // setCurrentIndex(0);
        }
      ).catch(
        (error) => {
          alert(error.response.data.error);
        }
      )
  }, [arrayImgs])
  

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

  const openRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(true);
  }, []);

  const closeRadOwnNotes = useCallback(() => {
    setRadOwnNotesOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/rad-own-pat-details");
  }, [navigate]);

  const viewReportNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const viewPersonnelNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const viewOtherRadNav = useCallback(() => {
    navigate("/rad-own-diag-comp");
  }, [navigate]);

  const openRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(true);
  }, []);

  const closeRadOwnOtherRadNotes = useCallback(() => {
    setRadOwnOtherRadNotesOpen(false);
  }, []);


  return (
    <>
      <div className="rad-own-diag-comp">
        <div className="rad-own-diag-comp-child" />
        <img className="vector-icon57" alt="" />
        <img
          className="rad-own-diag-comp-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing12">
          <img className="vector-icon58" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon59" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon60" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child10" onClick={openNotifications}/>
          <div className="div32">03</div>
        </div>
        <img className="need-help-icon12" alt="" src="/need-help.svg" />
        <div className="rad-own-diag-comp-inner" />
        <div className="rad-own-diag-comp-child1" />
        <div className="frame-parent19">
          <div className="group-wrapper42" onClick={openRadOwnDocNotes}>
            <div className="view-doctors-notes-frame">
              <div className="view-report">View Doctor’s Impressions</div>
            </div>
          </div>
          <img className="frame-child61" alt="" src="/rectangle-5907.svg" />
          <b className="self-annotated-image2">self Annotated Image</b>
          <div className="frame-child62" />
          <b className="test-details4">Test Details</b>
          <div className="frame-child63" />
          <div className="frame-child64" />
          <div className="frame-child62" />
          <b className="original-image2">Original Image</b>
          <img className="xray1-1-icon2" alt="" src={arrayImgs[currentIndex]} />
          {/* <img className="xray1-1-icon2" alt="" src="https://radveda.s3.ap-south-1.amazonaws.com/porsche-g49cf45a18_1920.jpg" /> */}
          <img
            className="annotely-image-1-icon2"
            alt=""
            src="/annotely-image-1@2x.png"
          />
          <div className="group-wrapper43" onClick={openRadOwnNotes}>
            <div className="view-own-notes-frame">
              <div className="view-report">View own Impressions</div>
            </div>
          </div>
          <div className="group-wrapper44" onClick={viewPersonnelNav}>
            <div className="view-personnel-info-frame" onClick={viewPersonnelNav}>
              <div className="view-report" onClick={viewPersonnelNav}>View Personnel Info</div>
            </div>
          </div>
          <div className="frame-child66" onClick={scrollDown}/>
          <div className="frame-child67" onClick={scrollUp}/>
          <img className="frame-child68" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child69" alt="" src="/polygon-5.svg" />
          <img className="frame-child70" alt="" src="/polygon-6.svg" />
          <div className="frame-child71" />
        </div>
        <div
          className="rad-own-diag-comp-inner1"
          onClick={onFrameContainer1Click}
        >
          <div className="back-wrapper12">
            <div className="view-report">Back</div>
          </div>
        </div>
        <img
          className="rad-own-diag-comp-child2"
          alt=""
          src="/rectangle-5907.svg"
        />
        <img
          className="annotely-image-1-12"
          alt=""
          src="/annotely-image-1-1@2x.png"
        />
        <div
          className="rad-own-diag-comp-inner2"
          onClick={openRadOwnOtherRadNotes}
        >
          <div className="view-other-radiologists-notes-frame">
            <div className="view-report">View Other Radiologist’s Impressions</div>
          </div>
        </div>
        <b className="annotations-by-other2">
          Annotations by other Radiologists
        </b>
        <div className="rad-own-diag-comp-inner3" onClick={viewReportNav}>
          <div className="view-report-wrapper" onClick={viewReportNav}>
            <div className="view-report" onClick={viewReportNav}>View Report</div>
          </div>
        </div>
        <div className="rad-own-diag-comp-child3" />
        <div className="rad-own-diag-comp-child4" />
        <img
          className="rad-own-diag-comp-child5"
          alt=""
          src="/rectangle-5913.svg"
        />
        <img className="rad-own-diag-comp-child6" alt="" src="/polygon-5.svg" />
        <img className="rad-own-diag-comp-child7" alt="" src="/polygon-6.svg" />
        <div className="rad-own-diag-comp-child8" />
        <div className="rad-own-diag-comp-inner4" onClick={viewOtherRadNav}>
          <div className="view-other-radiologists-detai-frame">
            <div className="view-report" onClick={viewOtherRadNav}>View Other Radiologist’s Details</div>
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

export default RadOwnDiagComp;
