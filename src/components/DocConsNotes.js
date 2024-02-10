import "./DocConsNotes.css";

const DocConsNotes = () => {
  return (
    <div className="doc-cons-notes">
      <div className="doc-cons-notes-child" />
      <div className="my-notes-note-container">
        <p className="my-notes">{`My Notes `}</p>
        <p className="blank-line2">&nbsp;</p>
        <ul className="note-1-note-22">
          <li className="note-12">
            <span>Note 1</span>
          </li>
          <li className="note-12">
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

export default DocConsNotes;
