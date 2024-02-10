import "./RadOwnNotes.css";

const RadOwnNotes = () => {
  return (
    <div className="rad-own-notes">
      <div className="rad-own-notes-child" />
      <div className="my-notes-note-container3">
        <p className="my-notes3">{`My Notes `}</p>
        <p className="blank-line12">&nbsp;</p>
        <ul className="note-1-note-29">
          <li className="note-19">
            <span>Note 1</span>
          </li>
          <li className="note-19">
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

export default RadOwnNotes;
