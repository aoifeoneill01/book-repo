<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>

 <form class="edit-this-note" action="edit-note-db.php" method="POST"> 
        <div class="edit-note-container">
          <input class="hide-id" id="note-id" type="text" name="id" value="">
          <input class="new-note-title" type="text" name="noteName" value="">
          <textarea class="new-note-p" name="noteInput" rows="6" cols="90"></textarea>
         <div class="save-button">
            <button class="editBtn" id="saveBtn" type="submit" name="save">Save</button>
            <button class="editBtn cancel" id="deleteBtn" type="button" name="button">Cancel</button>
         </div>
         </div>
 </form>

</body>
</html>