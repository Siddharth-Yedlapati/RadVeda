import "./PatientChooseLab.css";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import ReactModal from 'react-modal';


const selectLab = (labId, testId, patientID, onClose, navigate) => {
    request("POST", `http://localhost:9192/tests/${testId}/assignLab/${labId}/${patientID}`, {}, true)
        .then(response => {
            alert("Lab Chosen Successfully!");
            onClose();
            navigate('/patient-dashboard');
        })
        .catch(error => {
            alert(error.response.data.error);
            navigate('/patient-dashboard');
        });
};

const PatientChooseLab = ({ testID, onClose, patientID }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);
    const [selectedLabId, setSelectedLabId] = useState(null);

    const openModal = (labId) => {
        setSelectedLabId(labId);
        setIsModalOpen(true);
    };

    const handleCheckboxChange = (e) => {
        setConsentChecked(e.target.checked);
    };

    const confirmAndSelectLab = () => {
        if (consentChecked) {
            selectLab(selectedLabId, testID, patientID, onClose, navigate);
        } else {
            alert("Please give your consent to proceed.");
        }
        setIsModalOpen(false);
    };

    return (
        <div className="patient-choose-lab">
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Consent Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <h2>Consent Required</h2>
                <p>To continue, please give your consent to this lab.</p>
                <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={handleCheckboxChange}
                />
                <label>I give my consent to this lab</label>
                <button onClick={confirmAndSelectLab}>Confirm</button>
                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </ReactModal>

            <h2>Choose a Lab Staff</h2>
            <table className="labstaff-table">
                <thead>
                <tr>
                    <th>Lab Staff Name</th>
                    <th>Choose</th>
                </tr>
                </thead>
                <tbody>
                {labStaffs.map((labStaff) => (
                    <tr key={labStaff.id}>
                        <td>{labStaff.firstName}</td>
                        <td>
                            <button onClick={() => openModal(labStaff.id)}>Choose</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientChooseLab;




// const PatientChooseLab = ({testID, onClose, patientID}) => {
//   const navigate = useNavigate();
//
//   const [labStaffs, setlabStafffs] = useState([]);
//   const [flag1, setflag1] = useState(false);
//   const [flag2, setflag2] = useState(false);
//
//
//   useEffect(() => {
//     request ("GET", "http://localhost:9199/labstaff/availableLabStaff", {}, true)
//     .then(labStaffResponse => {
//       const labStaffs = labStaffResponse.data;
//       setlabStafffs(labStaffs);
//     })
//   })
//
//   const selectLab = (labId, testId) => {
//
//       //check the condition over here........
//       alert('insert a checkbox over here')
//     console.log(labId, testID);
//     request("POST", `http://localhost:9192/tests/${testId}/assignLab/${labId}/${patientID}`, {}, true) // TODO: ROLLBACK CHANGES
//       .then(response => {
//         alert("Lab Chosen Successfully !")
//         onClose();
//         request("POST", `http://localhost:9201/radiologist/assignRadiologist/${patientID}/${testId}`, {}, true).then(
//           (response) => {
//             console.log(response.data)
//             navigate('/patient-dashboard')
//           }
//         ).catch(
//           (error) => {
//             alert(error.response.data.error);
//           }
//         )
//
//     }).catch(
//     (error) => {
//       alert(error.response.data.error);
//       navigate('/patient-dashboard')
//     })
//
//   }
//
//   const renderLabStaffTable = () => {
//     return (
//       <table className="labstaff-table">
//         <thead>
//           <tr>
//             <th>Lab Staff Name</th>
//             <th></th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {labStaffs.map((labStaff) => (
//             <tr key={labStaff.id}>
//               <td>{labStaff.firstName}</td>
//               <td>
//                   <button onClick={() => selectLab(labStaff.id, testID)}>Choose</button>
//               </td>
//               {/* Add more table cells as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//
//     );
//   };
//
//   return (
//     <div className="patient-choose-lab">
//       <div className="patient-choose-lab-child" />
//       <div className="patient-choose-lab-item" />
//       <div className="content87">
//         <div className="magnifyingglass10">
//           <div className="magnifyingglass11">􀊫</div>
//         </div>
//         <div className="placeholder-label5">Search</div>
//         <img className="mic-icon6" alt="" src="/-mic.svg" />
//       </div>
//       <div className="patient-choose-lab-inner2">
//         <div className="auto-select-wrapper">
//           <div className="choose">Auto Select</div>
//         </div>
//       </div>
//       <div className="frame-child-labstaff-125" >
//           {renderLabStaffTable()}
//       </div>
//
//
//
//       {/* <div className="lab1-wrapper">
//         <div className="lab13">Lab1</div>
//       </div>
//       <div className="lab2-wrapper">
//         <div className="lab13">Lab2</div>
//       </div>
//       <div className="lab3-wrapper">
//         <div className="lab13">Lab3</div>
//       </div>
//       <div className="lab-name2">Lab Name</div>
//       <div className="address1">Address1</div>
//       <div className="address2">Address2</div>
//       <div className="address3">Address3</div>
//       <div className="lab-address">Lab Address</div>
//       <div className="choose-lab">Choose Lab</div>
//       <div className="patient-choose-lab-inner">
//         <div className="choose-wrapper">
//           <div className="choose">Choose</div>
//         </div>
//       </div>
//       <div className="patient-choose-lab-inner1">
//         <div className="choose-wrapper">
//           <div className="choose">Choose</div>
//         </div>
//       </div>
//
//       <div className="patient-choose-lab-inner3">
//         <div className="choose-wrapper">
//           <div className="choose">Choose</div>
//         </div>
//       </div>
//
//       <div className="type">{`Type `}</div>
//       <div className="location">location</div>
//       <div className="patient-choose-lab-inner4">
//         <div className="apply-filter-wrapper">
//           <div className="apply-filter"> Apply Filter</div>
//         </div>
//       </div>
//       <div className="text-fieldoutlined81">
//         <div className="input82">
//           <div className="content88">
//             <div className="min-height82" />
//             <div className="label82">X-Ray</div>
//           </div>
//         </div>
//         <div className="helpertext82">
//           <div className="helper-text82">Helper text</div>
//         </div>
//       </div>
//       <div className="text-fieldoutlined82">
//         <div className="input82">
//           <div className="content88">
//             <div className="min-height82" />
//             <div className="label82">Location xy</div>
//           </div>
//         </div>
//         <div className="helpertext82">
//           <div className="helper-text82">Helper text</div>
//         </div>
//       </div>
//       <div className="patient-choose-lab-inner5">
//         <div className="filter-by-wrapper">
//           <div className="choose">Filter By:</div>
//         </div>
//       </div>
//       <div className="patient-choose-lab-child1" /> */}
//     </div>
//   );
// };
//
// export default PatientChooseLab;
