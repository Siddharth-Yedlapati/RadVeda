document.getElementById('openEditorBtn').addEventListener('click', function() {
    document.getElementById('editorOverlay').style.display = 'block';
  });
  
  document.getElementById('saveBtn').addEventListener('click', function() {
    const notes = document.getElementById('editorTextarea').value;
    // Send the 'notes' variable to the backend using fetch or AJAX
    console.log('Notes:', notes);
    // Close the editor overlay
    document.getElementById('editorOverlay').style.display = 'none';
  });