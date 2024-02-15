import "./PatientDocRemarks.css";

const PatientDocRemarks = () => {
  return (
    <div className="patient-doc-remarks">
      <div className="patient-doc-remarks-child" />
      <div className="doctor-remarks-remark-container">
        <p className="doctor-remarks">{`Doctor remarks `}</p>
        <p className="blank-line8">&nbsp;</p>
        <ul className="remark-1-remark-2">
          <li className="remark-1">
            <span>Remark 1</span>
          </li>
          <li className="remark-1">
            <span>Remark 2</span>
          </li>
          <li>
            <span>...</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientDocRemarks;
