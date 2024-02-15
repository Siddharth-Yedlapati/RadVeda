import "./RadOwnOtherRadNotes.css";

const RadOwnOtherRadNotes = () => {
  return (
    <div className="rad-own-other-rad-notes">
      <div className="rad-own-other-rad-notes-child" />
      <div className="rad-own-other-rad-notes-child" />
      <div className="others-notes-note-container">
        <p className="others-notes">{`Other’s Notes `}</p>
        <p className="blank-line1">&nbsp;</p>
        <ul className="note-1-note-21">
          <li className="note-11">
            <span>Note 1</span>
          </li>
          <li className="note-11">
            <span>Note 2</span>
          </li>
          <li>
            <span>...</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RadOwnOtherRadNotes;
