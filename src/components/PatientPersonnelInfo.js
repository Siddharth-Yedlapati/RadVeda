import "./PatientPersonnelInfo.css";

const PatientPersonnelInfo = () => {
  return (
    <div className="patient-personnel-info">
      <div className="patient-personnel-info-child" />
      <div className="patient-personnel-info-inner">
        <div className="view-doctor-details-wrapper">
          <div className="view-doctor-details">View Doctor Details</div>
        </div>
      </div>
      <div className="patient-personnel-info-inner1">
        <div className="view-radiologist-details-wrapper">
          <div className="view-doctor-details">View Radiologist Details</div>
        </div>
      </div>
      <div className="patient-personnel-info-inner2">
        <div className="view-lab-staff-details-wrapper">
          <div className="view-doctor-details">View Lab Staff Details</div>
        </div>
      </div>
    </div>
  );
};

export default PatientPersonnelInfo;
