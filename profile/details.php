<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    <link rel="stylesheet" type="text/css" href="../styles/my-library.css">
    <link rel="stylesheet" type="text/css" href="../styles/media-queries.css">
    <link rel="stylesheet" type="text/css" href="../styles/add.css">
    <link rel="stylesheet" type="text/css" href="../styles/details-page.css">
    <link rel="stylesheet" href="https://use.typekit.net/rog2nul.css">
    <link rel="shortcut icon" type="image/png" href="../images/logo.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Notes</title>
    <script src="../scripts/add-details.js"></script>
    <script src="../profile-includes/notes/post-new-note.js"></script>
  </head>
  <body onload="getUrlTitle(); fetchNotes()">

    <div class="library" id="back-library">
      <a href="library.php"><img src="../images/arrow-left-short.svg" alt="arrow"></a>
    </div>

    <div class="search-container" id="note-container">
      <!-- NOTE PAGE TITLE HERE -->
    </div>

  <div class="item-body">

    <div class="details-container">
      <div class="list-item" id="note-book-details">
      <div class="list-headings">
         <p id="lib-title" class="details-title"></p>
         <p id="author" class="details-author"></p>
      </div>
        <img class="details-image" src="" alt="book cover">
    </div>
    <div class="details-more">
      <section class="details-section-c">
        <h3 class="sections-title">Sections</h3>
        <ul class="nSection">
          <!--NOTE SECTIONS HERE -->
        </ul>
      </section>
      <section class="details-topic-c">
        <h3>Topics</h3>
      </section>
    </div>
  </div>


<div class="notes-body-container">
  <?php
    include '../profile-includes/notes/edit-note.php';
    include '../profile-includes/notes/add-topic.php';
  ?>
   <div class="created">
      <!-- TIMESTAMP HERE -->
   </div>
   <div class="saved-notes-container">
   
      <!-- NOTES GO HERE -->
   </div>

    <form class="enter-new-note" id="post-note-form">
        <div class="text-main">
          <div class="add-note-c">
          <div class="add-icon-container">
            <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg> 
           </div>     
            <p>add new note</p>
          </div>    
        <div class="input-container">
          <input class="hide-id" id="new-note-name" type="text" name="bookTitle" value="">
          <input class="new-note-title add-title" type="text" name="noteName" value="" placeholder="Heading here">

          <label class="input-sizer stacked">
            <textarea oninput="this.parentNode.dataset.value = this.value" name="noteInput" rows="1" placeholder="Start typing . ." id="note-input"></textarea>
         </label>

         <div class="save-button">
            <button class="editBtn" id="saveBtn" type="submit" name="save">Save</button>
            <button class="editBtn cancelNewNote" id="deleteBtn" type="button" name="button">Cancel</button>
         </div>
         </div>
       </div>
    </form>
</div>

</div>

<script src="../profile-includes/notes/new-note.js"></script>
<script src="../profile-includes/notes/details-feat.js"></script>
<script src="../profile-includes/notes/fetch-notes.js"></script>
<script src="../profile-includes/notes/add-new-topic.js"></script>

  </body>
</html>
