$(document).ready(function(){
    $("#post-note-form").submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '../profile-includes/notes/add-note.php',
            data: $('#post-note-form').serialize(),
            success: function() {
              console.log("Note Added!");

              document.querySelector(".input-container").style.display = "none";
              document.querySelector(".add-note-c").style.display = "flex";
              document.querySelector(".add-title").value = "";
              document.getElementById("note-input").value = "";

              fetchNotes();

            },
            error: function() {
              console.log("Note Add Error");
            }
        });

    });
});

