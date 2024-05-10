import { useState, useCallback, useRef } from "react";
import PatientUserOptions from "../components/PatientUserOptions";
import PortalPopup from "../components/PortalPopup";
import PatientDocRemarks from "../components/PatientDocRemarks";
import PatientPersonnelInfo from "../components/PatientPersonnelInfo";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import DicomViewer from "./DicomViewer";
import cornerstone from "cornerstone-core";
import dicomParser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import "./PatientDiagComplete.css";
import S3 from 'react-aws-s3';
import { string_delimiter, config } from "../config";

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
const PatientDiagComplete = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/patients/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/patient-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/patient-login-page");}) 
  }
  
  const [isPatientUserOptionsOpen, setPatientUserOptionsOpen] = useState(false);
  const [isPatientDocRemarksOpen, setPatientDocRemarksOpen] = useState(false);
  const [isPatientPersonnelInfoOpen, setPatientPersonnelInfoOpen] =
    useState(false);
  const [imageURL, setImageURL] = useState("");
  const divRef = useRef(null);

  const openPatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(true);
  }, []);

  const closePatientUserOptions = useCallback(() => {
    setPatientUserOptionsOpen(false);
  }, []);

  const openPatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(true);
  }, []);

  const closePatientDocRemarks = useCallback(() => {
    setPatientDocRemarksOpen(false);
  }, []);

  const openPatientPersonnelInfo = useCallback(() => {
    setPatientPersonnelInfoOpen(true);
  }, []);

  const closePatientPersonnelInfo = useCallback(() => {
    setPatientPersonnelInfoOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/patient-dashboard");
  }, [navigate]);

  // async function downloadTestReport(){
  //   request(
  //     "GET",
  //     "http://localhost:9194/doctor/" + localStorage.getItem("testID") + "/getReport",
  //     {},
  //     true
  //   ).then((response) => {
  //     console.log(response)
  //     const ReactS3Client = new S3(config);
  //     ReactS3Client.getObject(response.data, localStorage.getItem("testID") + "_report.pdf");
  //   })
    
  // }

  // async function downloadTestReport() {
  //   try {
  //     const response = await fetch("http://localhost:9194/doctor/" + localStorage.getItem("testID") + "/getReport");
      
  //     if (!response.ok) {
  //       throw new Error('Failed to download file');
  //     }
  
  //     const blob = await response.blob();
  
  //     // Create a temporary URL for the blob
  //     const url = window.URL.createObjectURL(blob);
  
  //     // Create a link element
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'test_report.pdf'; // specify the file name here
  //     document.body.appendChild(link);
  
  //     // Trigger the download
  //     link.click();
  
  //     // Clean up
  //     window.URL.revokeObjectURL(url);
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error downloading file:', error);
  //   }
  // }

  useEffect(() => {


    request(
      "GET",
      "http://localhost:9200/images/" + localStorage.getItem("testID") + "/getImageOriginal",
      {},
      true
    ).then((response) => {
      setImageURL(response.data[0].imageURL)
      console.log(imageURL)
    
    const particularDiv = document.getElementsByClassName('xray1-1-icon19')[0];
    
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
      <div className="patient-diag-complete">
        <div className="patient-diag-complete-child" />
        <img className="vector-icon156" alt="" />
        <img
          className="patient-diag-complete-item"
          alt=""
          src="/frame-53.svg"
          onClick={openPatientUserOptions}
        />
        <div className="iconnotification-bing35">
          <img className="vector-icon157" alt="" src="/vector.svg" />
          <img className="vector-icon158" alt="" src="/vector.svg" />
          <img className="vector-icon159" alt="" />
          <div className="iconnotification-bing-child33" />
          <div className="div67">03</div>
        </div>
        <img className="need-help-icon35" alt="" src="/need-help.svg" />
        <div className="patient-diag-complete-inner" />
        <div className="patient-diag-complete-child1" />
        <div className="test-details-parent4">
          <b className="test-details21">Test Details</b>
          <div className="frame-child338" />
          <div className="frame-child339" />
          <div className="frame-child340" />
          <b className="test-image2">Test Image</b>
          <img className="xray1-1-icon19" />
          <div className="group-wrapper80">
            <div className="download-test-report-wrapper">
              <div className="download-test-report">Download Test Report</div>
            </div>
          </div>
          <div className="group-wrapper81" onClick={openPatientDocRemarks}>
            <div className="view-doctor-remarks-wrapper1">
              <div className="download-test-report">View Doctor Remarks</div>
            </div>
          </div>
          <div className="frame-child341" />
          <div className="frame-child342" />
          <img className="frame-child343" alt="" src="/rectangle-5913.svg" />
          <img className="frame-child344" alt="" src="/polygon-5.svg" />
          <img className="frame-child345" alt="" src="/polygon-6.svg" />
          <div className="frame-child346" />
        </div>
        <div
          className="patient-diag-complete-inner1"
          onClick={openPatientPersonnelInfo}
        >
          <div className="view-personnel-info-wrapper15">
            <div className="download-test-report">View Personnel Info</div>
          </div>
        </div>
        <div
          className="patient-diag-complete-inner2"
          onClick={onFrameContainer2Click}
        >
          <div className="back-wrapper44">
            <div className="download-test-report">Back</div>
          </div>
        </div>
      </div>
      {isPatientUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientUserOptions}
        >
          <PatientUserOptions onClose={closePatientUserOptions} />
        </PortalPopup>
      )}
      {isPatientDocRemarksOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientDocRemarks}
        >
          <PatientDocRemarks onClose={closePatientDocRemarks} />
        </PortalPopup>
      )}
      {isPatientPersonnelInfoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePatientPersonnelInfo}
        >
          <PatientPersonnelInfo onClose={closePatientPersonnelInfo} />
        </PortalPopup>
      )}
    </>
  );
};

export default PatientDiagComplete;
