import "./RadConsNotes.css";

const RadConsNotes = () => {
  return (
    <div className="rad-cons-notes">
      <div className="rad-cons-notes-child" />
      <div className="my-notes-note-container2">
        <p className="my-notes2">{`My Notes `}</p>
        <p className="blank-line9">&nbsp;</p>
        <ul className="note-1-note-26">
          <li className="note-16">
            <span>Note 1</span>
          </li>
          <li className="note-16">
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

export default RadConsNotes;
