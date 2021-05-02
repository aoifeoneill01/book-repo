<html lang="en">
<body>

 <form class="edit-this-note" id="edit-note-form" action="../profile-includes/notes/edit-note-db.php" method="post"> 
        <div class="edit-note-container">
          <input class="hide-id" id="note-id" type="text" name="id" value="">
          <input class="new-note-title" type="text" name="noteName" value="">

          <label class="input-sizer stacked">
            <textarea oninput="this.parentNode.dataset.value = this.value" name="noteEdit" rows="2" id="note-edit"></textarea>
         </label>

         <div class="save-button">
            <button class="editBtn" id="saveBtn" type="submit" name="save-edit">Save</button>
            <button class="editBtn cancel" id="deleteBtn" type="button" name="button">Cancel</button>
         </div>
         </div>
 </form>

</body>
</html>