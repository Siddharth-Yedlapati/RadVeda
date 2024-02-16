import "./DocOwnNotes.css";

const DocOwnNotes = () => {
  return (
    <div className="doc-own-notes">
      <div className="doc-own-notes-child" />
      <div className="my-notes-note-container1">
        <p className="my-notes1">{`My Notes `}</p>
        <p className="blank-line5">&nbsp;</p>
        <ul className="note-1-note-24">
          <li className="note-14">
            <span>Note 1</span>
          </li>
          <li className="note-14">
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

export default DocOwnNotes;
