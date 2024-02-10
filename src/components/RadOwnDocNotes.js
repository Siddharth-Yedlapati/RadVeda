import "./RadOwnDocNotes.css";

const RadOwnDocNotes = () => {
  return (
    <div className="rad-own-doc-notes">
      <div className="rad-own-doc-notes-child" />
      <div className="rad-own-doc-notes-child" />
      <div className="doctors-notes-note-container">
        <p className="doctors-notes">{`Doctor’s Notes `}</p>
        <p className="blank-line">&nbsp;</p>
        <ul className="note-1-note-2">
          <li className="note-1">
            <span>Note 1</span>
          </li>
          <li className="note-1">
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

export default RadOwnDocNotes;
