import "./DocConsRadNotes.css";

const DocConsRadNotes = () => {
  return (
    <div className="doc-cons-rad-notes">
      <div className="doc-cons-rad-notes-child" />
      <div className="radiologist-notes-note-container">
        <p className="radiologist-notes">Radiologist Notes</p>
        <p className="radiologist-notes">&nbsp;</p>
        <p className="radiologist-notes">&nbsp;</p>
        <ul className="note-1-note-23">
          <li className="note-13">Note 1</li>
          <li className="note-13">Note 2</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
};

export default DocConsRadNotes;
