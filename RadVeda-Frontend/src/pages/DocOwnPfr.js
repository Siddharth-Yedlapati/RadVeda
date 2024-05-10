import { useState, useCallback, divRef, useRef } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import DocOwnRadNotes from "../components/DocOwnRadNotes";
import DocOwnNotes from "../components/DocOwnNotes";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./DocOwnPfr.css";
import ChatOverlay from "./ChatOverlay";
import DicomViewer from "./DicomViewer";
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";

cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
const DocOwnPfr = () => {
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
  const [isDocOwnRadNotesOpen, setDocOwnRadNotesOpen] = useState(false);
  const [isDocOwnNotesOpen, setDocOwnNotesOpen] = useState(false);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [isEditorRadOpen, setEditorRadOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [notesRad, setRadNotes] = useState("");
  const [isChatOpen, setChatOpen] = useState(false); // State to manage chat overlay visibility
  const [imageURL, setImageURL] = useState("");
  const divRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setuploadedFiles] = useState([]);

  
  const toggleChat = useCallback(() => {
    setChatOpen((prev) => !prev);
  }, []);

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
  const [annotatedimage, setannotatedimage] = useState("");
  


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
    navigate("/doc-own-pfr-editor");
  }, [navigate]);

  const openDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(true);
  }, []);

  const closeDocOwnRadNotes = useCallback(() => {
    setDocOwnRadNotesOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/doc-own-patient-details");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/frame-12611528511");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/doc-own-consult-docs");
  }, [navigate]);

  const openDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(true);
  }, []);

  const closeDocOwnNotes = useCallback(() => {
    setDocOwnNotesOpen(false);
  }, []);

  const openEditor = useCallback(() => {
    setEditorOpen(true);
  }, []);

  const openEditorRad = useCallback(() => {
    setEditorRadOpen(true);
  }, []);


  const closeEditor = useCallback(() => {
    setEditorOpen(false);
  }, []);

  const closeEditorRad = useCallback(() => {
    setEditorRadOpen(false);
  }, []);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  }
  // request(
  //   "POST",
  //   "http://localhost:9192/tests/updateTestStatus",
  //   {
  //     "testID": localStorage.getItem("testID"),
  //     "PatientStatus": "Diagnosis Completed",
  //     "DoctorStatus": "Diagnosis Completed",
  //     "RadiologistStatus": "Diagnosis Completed"
  //   },
  //   true
  // )

  const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    console.log(uploadedFiles)
    ReactS3Client
    .uploadFile(file, "DOCTOR" + string_delimiter + "REPORT" + string_delimiter + file.name)
    .then(data => {
      console.log(data)
      uploadedFiles.push(data.location);
      request(
        "POST",
        "http://localhost:9194/doctor/" + localStorage.getItem("testID") + "/addReport",
        {
          "report" : data.location
        },
        true
      ).then((response) => {
        alert(response.data)

      }).catch((error) => {
        alert(error.response.data.error);
      })
      setuploadedFiles(uploadedFiles)
    })
    .catch(err => console.error(err))
}

  const saveNotes = useCallback(() => {
    // Send 'notes' to the backend
    console.log("Saving notes:", notes);
    request(
      "PUT",
      "http://localhost:9194/doctor/" + localStorage.getItem("testID") + "/addNotes",
      {
        "notes": notes
      },
      true
    ).then((response) => {
      console.log(response)
    })

    // Close the editor overlay
    closeEditor();
  }, [notes, closeEditor]);

  const saveNotesRad = useCallback(() => {
    // Send 'notes' to the backend
    console.log("Saving notes:", notesRad);
    request(
      "PUT",
      "http://localhost:9201/radiologist/" + localStorage.getItem("testID") + "/addNotes",
      {
        "notes": notesRad
      },
      true
    ).then((response) => {
      console.log(response)
    })

    // Close the editor overlay
    closeEditor();
  }, [notesRad, closeEditor]);

  let imageDisplayed = false;

  async function fetchAndDisplayImage() {
    try {

      if (imageDisplayed) {
        // If the image is already displayed, return
        return;
    }
        const displayDiv = document.getElementsByClassName('annotely-image-1-icon')[0];
        // Fetch image data from Amazon S3
        const response = await fetch(annotatedimage);
        
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        
        // Read the image data as a blob
        const blob = await response.blob();
        
        // Create an img element
        const imgElement = document.createElement('img');
        
        // Set the src attribute of the img element to the blob URL
        imgElement.src = URL.createObjectURL(blob);
        imgElement.width = 250
        imgElement.height = 250
        imgElement.style.position = 'relative';
        imgElement.style.top = "-300px"

        // Append the img element to the display div
        displayDiv.appendChild(imgElement);
        displayDiv.bottom = 120
        imageDisplayed = true;
    } catch (error) {
        console.error('Error fetching and displaying image:', error);
    }
}
  
  useEffect(() => {
    request(
      "GET",
      "http://localhost:9200/images/" + localStorage.getItem("testID") + "/" + localStorage.getItem("radID") + "/getImageAnnotated",
      {},
      true
    ).then((response) => {
      setannotatedimage(response.data[0].imageURL)
      console.log(annotatedimage)
      fetchAndDisplayImage();
    })
  }, [annotatedimage]);

  useEffect(() => {
    request(
      "GET",
      "http://localhost:9194/doctor/" + localStorage.getItem("testID") + "/getNotes",
      {},
      true
    ).then((response) => {
      console.log(response.data)
      setNotes(response.data) 
      })
  }, [notes]);

  useEffect(() => {
    request(
      "GET",
      "http://localhost:9201/radiologist/" + localStorage.getItem("testID") + "/getNotes",
      {},
      true
    ).then((response) => {
      console.log(response.data)
      setRadNotes(response.data)
    })
  }, [notesRad]);

  useEffect(() => {


    request(
      "GET",
      "http://localhost:9200/images/" + localStorage.getItem("testID") + "/getImageOriginal",
      {},
      true
    ).then((response) => {
      setImageURL(response.data[0].imageURL)
      console.log(imageURL)
    
    const particularDiv = document.getElementsByClassName('xray1-1-icon')[0];
    
    // Set divRef.current to the particular div
    const image_url = "wadouri:" + response.data[0].imageURL
    divRef.current = particularDiv;
    cornerstone.enable(divRef.current);
    cornerstone
    .loadImage(
      image_url
    )
    .then(image => {

      console.log(image);
      const viewport = {
        invert: false,
        pixelReplication: false,
        voi: {
          windowWidth: 279,
          windowCenter: 200
        },
        scale: 0.4
        ,
        translation: {
          x: 0,
          y: 0
        }
        // colormap: "hot"
      };

      cornerstone.displayImage(divRef.current, image, viewport);

      // run();

      // cornerstone.setViewport(divRef.current, viewport);
      // cornerstone.updateImage(divRef.current);
      
    }).catch((error) => {
      console.log(error.response.data.error)
    })
    });
  }, [imageURL]);

  return (
    <>
      <div className="doc-own-pfr">
        <div className="doc-own-pfr-child" />
        <img className="vector-icon121" alt="" />
        <img
          className="doc-own-pfr-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing27">
          <img className="vector-icon122" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon123" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon124" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-child25" onClick={openNotifications}/>
          <div className="div59">03</div>
        </div>
        <img className="need-help-icon27" alt="" src="/need-help.svg" />
        <div className="doc-own-pfr-inner" />
        <div className="doc-own-pfr-child1" />
        <div className="rectangle-parent14">
          <div className="frame-child234" />
          <b className="annotated-image4">Annotated Image</b>
          <div className="frame-child235" />
          <b className="test-details14">Test Details</b>
          <div className="frame-child236" />
          <div className="frame-child237" />
          <div className="frame-child235" />
          <b className="original-image12">Original Image</b>
          <div className="xray1-1-icon"/>
          <div
            className="annotely-image-1-icon"
          />
          <div className="group-wrapper72" onClick={openEditor}>
            <div className="add-notes-wrapper2">
              <div className="upload-report">Add Impressions</div>
            </div>
          </div>
          <div className="frame-child239" />
          <div className="frame-child240" />
          <img className="frame-child241" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child242" alt="" src="/polygon-5.svg" />
          <img className="frame-child243" alt="" src="/polygon-6.svg" />
          <div className="frame-child244" />
          <div className="frame-child245" />
          <div className="frame-child246" />
          <img className="frame-child247" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child248" alt="" src="/polygon-5.svg" />
          <img className="frame-child249" alt="" src="/polygon-6.svg" />
          <div className="frame-child250" />
          <div className="group-wrapper73" onClick={openEditorRad}>
            <div className="view-radiologists-notes-wrapper5">
              <div className="upload-report">View Radiologist’s Impressions</div>
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-inner1" >
          <div className="upload-report-wrapper">
          <div className="upload-remarks">
            <input type="file" onChange={handleFileInput}/>
            <br></br>
            <button onClick={() => uploadFile(selectedFile)}> UPLOAD REPORT</button>
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-inner2">
          <div className="back-wrapper32">
            <div className="upload-report">Back</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner3" onClick={onFrameContainer3Click}>
          <div className="complete-diagnosis-wrapper">
            <div className="upload-report">Complete Diagnosis</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner4" onClick={toggleChat}>
          <div className="collaborate-with-authorized-re-wrapper1">
            <div className="upload-report">
              Collaborate with Authorized Reps
            </div>
          </div>
        </div>
        <div className="doc-own-pfr-inner5" onClick={onFrameContainer5Click}>
          <div className="consult-other-doctors-container">
            <div className="upload-report">Consult Other Doctors</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner6" onClick={openEditor}>
          <div className="view-own-notes-wrapper4">
            <div className="upload-report">View own Impressions</div>
          </div>
        </div>
        <div className="doc-own-pfr-inner7">
          <div className="view-personnel-info-wrapper10">
            <div className="upload-report">View Personnel Info</div>
          </div>
        </div>
        {/* <div className="doc-own-pfr-inner8">
          <div className="view-radiologists-details-wrapper5">
            <div className="upload-report">View Radiologist’s Details</div>
          </div>
        </div> */}
        {/* <div className="doc-own-pfr-inner9">
          <div className="view-other-doctors-notes-frame">
            <div className="upload-report">View other doctors’ Notes</div>
          </div>
        </div> */}
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
      {isDocOwnRadNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnRadNotes}
        >
          <DocOwnRadNotes onClose={closeDocOwnRadNotes} />
        </PortalPopup>
      )}
      {isDocOwnNotesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDocOwnNotes}
        >
          <DocOwnNotes onClose={closeDocOwnNotes} />
        </PortalPopup>
      )}
      {isEditorOpen && (
        <div className="overlay">
          <div className="editorContainer">
            <textarea
              className="editorTextarea"
              placeholder="Type your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button className="saveBtn" onClick={saveNotes}>Save</button>
            <button className="closeBtn" onClick={closeEditor}>Close</button>
          </div>
        </div>
      )}
      {isEditorRadOpen && (
        <div className="overlay">
          <div className="editorContainer">
            <textarea
              className="editorTextarea"
              placeholder="Type your notes here..."
              value={notesRad}
              onChange={(e) => setRadNotes(e.target.value)}
            ></textarea>
            {/* <button className="saveBtn" onClick={saveNotes}>Save</button> */}
            <button className="closeBtn" onClick={closeEditorRad}>Close</button>
          </div>
        </div>
      )}
      {isChatOpen && <ChatOverlay onClose={toggleChat} />}

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

export default DocOwnPfr;
