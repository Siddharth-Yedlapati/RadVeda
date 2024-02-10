import "./RadConsDocNotes.css";

const RadConsDocNotes = () => {
  return (
    <div className="rad-cons-doc-notes">
      <div className="rad-cons-doc-notes-child" />
      <div className="rad-cons-doc-notes-child" />
      <div className="doctors-notes-note-container1">
        <p className="doctors-notes1">{`Doctor’s Notes `}</p>
        <p className="blank-line10">&nbsp;</p>
        <ul className="note-1-note-27">
          <li className="note-17">
            <span>Note 1</span>
          </li>
          <li className="note-17">
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

export default RadConsDocNotes;
