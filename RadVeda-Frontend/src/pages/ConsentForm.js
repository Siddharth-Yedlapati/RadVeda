import React, { useState, useEffect } from "react";
import "./ConsentForm.css";
import { request, getAuthToken} from "../axios_helper"

const ConsentForm = ({ testType, docfirstname, doclastname, consentrequestid, primaryradid, patientid, testid }) => {

    const [consentSeekers, setConsentSeekers] = useState([]);
    const [selectedConsents, setSelectedConsents] = useState({});
    const [selectedothertestsConsents, setselectedothertestsConsents] = useState({});
    const [consentseekerid, setconsentseekerid] = useState([]);
    const [consentseekertype, setconsentseekertype] = useState([]);
    const doc_full_name = docfirstname + " " + doclastname;
    useEffect(() => {
        // Fetch consent seekers from the API endpoint
        request(
            "GET",
            "http://localhost:9202/consent/getConsentSeekersByConsentRequestId/" + consentrequestid,
            {},
            true
        ).then(
            (response) => {
              let arr = []
              let arrID = []
              let arrnames = []
              let seeker_array = []

              for (let i = 0; i < response.data.length; i++) {
                var consentseeker_type = response.data[i].consentSeekerType;
                if("DOCTOR" == consentseeker_type){
                    request(
                        "GET",
                        "http://localhost:9194/doctor/" + response.data[i].consentSeekerId + "/getDoctor",
                        {},
                        true
                    ).then(
                        (response) => {
                            var docfname = response.data.firstName;
                            var doclname = response.data.lastName;
                            var doc_name = docfname + " " + doclname;
                            arrnames.push(doc_name);
                        }
                    )

                }
                if("RADIOLOGIST" == consentseeker_type){
                    request(
                        "GET",
                        "http://localhost:9201/radiologist/" + response.data[i].consentSeekerId + "/getRadiologist",
                        {},
                        true
                    ).then(
                        (response) => {
                            var radfname = response.data.firstName;
                            var radlname = response.data.lastName;
                            var rad_name = radfname + " " + radlname;
                            arrnames.push(rad_name);
                        }
                    )
                }
                var consent_seeker = {
                    name: arrnames[i],
                    consentSeekerType: response.data[i].consentSeekerType,
                    consentSeekerId: response.data[i].consentSeekerId
                }
                seeker_array.push(consent_seeker);
                console.log(seeker_array)
                arr.push(response.data[i].consentSeekerType);
                arrID.push(response.data[i].id);
              }
              setConsentSeekers(seeker_array);
              const initialSelectedConsents = {};
              const initialotherSelectedConsents = {};
              seeker_array.forEach(seeker => {
                initialSelectedConsents[seeker.consentSeekerId] = {
                  name:seeker.name,
                  id:seeker.consentSeekerId,
                  type:seeker.consentSeekerType,
                  imagesAllowed: false,
                  reportAllowed: false
                };
              });
              seeker_array.forEach(seeker => {
                initialotherSelectedConsents[seeker.consentSeekerId] = {
                  name:seeker.name,
                  id:seeker.consentSeekerId,
                  type:seeker.consentSeekerType,
                  imagesAllowed: false,
                  reportAllowed: false
                };
              });
              setSelectedConsents(initialSelectedConsents);
              setselectedothertestsConsents(initialotherSelectedConsents);
            }
            
        )
        

      }, []);

      const handleCheckboxChange = (consentSeekerId, type, name, key) => {
        setSelectedConsents((prevSelected) => ({
          ...prevSelected,
          [consentSeekerId]: {
            ...prevSelected[consentSeekerId],
            [key]: !prevSelected[consentSeekerId]?.[key],
            type,
            name,
          },
        }));
      };

      const handleOtherTestsCheckboxChange = (consentSeekerId, type, name, key) => {
        setselectedothertestsConsents((prevSelected1) => ({
          ...prevSelected1,
          [consentSeekerId]: {
            ...prevSelected1[consentSeekerId],
            [key]: !prevSelected1[consentSeekerId]?.[key],
            type,
            name,
          },
        }));
      };
    
      const handleSubmit = () => {
        var selectedConsentsArray = [];
        for (var key in selectedConsents) {
          // Check if the key is a property of the main dictionary (not inherited)
          if (selectedConsents.hasOwnProperty(key)) {
              // Push the dictionary corresponding to the key into the array
              selectedConsentsArray.push(selectedConsents[key]);
          }
      }
        var selectedotherConsentsArray = [];
        for (var key in selectedothertestsConsents) {
          // Check if the key is a property of the main dictionary (not inherited)
          if (selectedothertestsConsents.hasOwnProperty(key)) {
              // Push the dictionary corresponding to the key into the array
              selectedotherConsentsArray.push(selectedothertestsConsents[key]);
          }
      }
        let arr_string = []
        let arr_other_string = []
        console.log(selectedConsentsArray)
        for(let j = 0; j < selectedConsentsArray.length; j++){
            var temp = selectedConsentsArray[j].type + ":_:" + selectedConsentsArray[j].id + ":_:" + selectedConsentsArray[j].imagesAllowed + ":_:" + selectedConsentsArray[j].reportAllowed;
            arr_string.push(temp);
        }
        for(let k = 0; k< selectedotherConsentsArray.length; k++){
            var temp1 = selectedotherConsentsArray[k].type + ":_:" + selectedotherConsentsArray[k].id + ":_:" + selectedotherConsentsArray[k].imagesAllowed + ":_:" + selectedotherConsentsArray[k].reportAllowed;
            arr_other_string.push(temp1);
        }
        console.log(arr_string)
        console.log(arr_other_string)
        request(
            "POST",
            "http://localhost:9202/consent/setPatientProviderDetails",
            {
                "consentRequestId": consentrequestid,
                "currentTest": arr_string,
                "otherTests": arr_other_string
            },
            true
        ).then(
            (response) =>{
                console.log(response)
                console.log((typeof primaryradid === 'undefined'))
                var consent_seekertype = selectedConsentsArray[0].type;
                console.log(consent_seekertype)
                if(selectedConsentsArray.length == 1 && ("RADIOLOGIST" == consent_seekertype) && (typeof primaryradid === 'undefined')){
                    if(selectedConsentsArray[0].imagesAllowed){
                        request("POST", "http://localhost:9192/tests/" + testid + "/assignRad/" + selectedConsentsArray[0].id, {}, true).then(
                            (response) => {
                            console.log(response)
                            }
                        ).catch(
                            (error) => {
                                alert(error.response.data.error)
                            }
                        )
                    }
                    else{
                        request("POST", "http://localhost:9201/radiologist/assignRadiologist/"+ patientid +"/" + testid, {}, true).then(
                            (response) => {
                                console.log(response)
                            }
                        ).catch(
                            (error) => {
                                alert(error.response.data.error)
                            }
                        )
                    }
                }
            }
        ).catch(
            (error) => {
                alert(error.response.data.error)
            }
        )
      };


return (
    <div className="consent-overlay">
      <div className="consent-header"> {testType} Prescribed By {doc_full_name}</div>
      {consentSeekers.map((consentSeeker) => (
        <div className="consent-form" key={consentSeeker.consentSeekerId}>  
          <p>{`${consentSeeker.consentSeekerType} ${consentSeeker.consentSeekerId} ` }</p>
          <label>
            <input
              type="checkbox"
              checked={selectedConsents[consentSeeker.consentSeekerId]?.imagesAllowed || false}
              onChange={() =>
                handleCheckboxChange(
                  consentSeeker.consentSeekerId,
                  consentSeeker.consentSeekerType,
                  consentSeeker.name,
                  "imagesAllowed"
                )
              }
            />
            Images Allowed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={selectedConsents[consentSeeker.consentSeekerId]?.reportAllowed || false}
              onChange={() =>
                handleCheckboxChange(
                  consentSeeker.consentSeekerId,
                  consentSeeker.consentSeekerType,
                  consentSeeker.name,
                  "reportAllowed"
                )
              }
            />
            Report Allowed
          </label>
        </div>
        )
        )}
       <div className="message"> Do you want to give consent to your consent seekers for tests other than this test for which you haven't previously given Access to any of your resources?</div> 
       {consentSeekers.map((consentSeeker) => (
        <div className="consent-form" key={consentSeeker.consentSeekerId}>  
          <p>{`${consentSeeker.consentSeekerType} ${consentSeeker.consentSeekerId}`}</p>
          <label>
            <input
              type="checkbox"
              checked={selectedothertestsConsents[consentSeeker.consentSeekerId]?.imagesAllowed || false}
              onChange={() =>
                handleOtherTestsCheckboxChange(
                  consentSeeker.consentSeekerId,
                  consentSeeker.consentSeekerType,
                  consentSeeker.name,
                  "imagesAllowed"
                )
              }
            />
            Images Allowed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={selectedothertestsConsents[consentSeeker.consentSeekerId]?.reportAllowed || false}
              onChange={() =>
                handleOtherTestsCheckboxChange(
                  consentSeeker.consentSeekerId,
                  consentSeeker.consentSeekerType,
                  consentSeeker.name,
                  "reportAllowed"
                )
              }
            />
            Report Allowed
          </label>
        </div>
        )
        )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};



export default ConsentForm;