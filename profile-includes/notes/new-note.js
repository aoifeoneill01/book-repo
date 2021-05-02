
// SHOW ADD NOTE FORM
document.querySelector(".add-icon").addEventListener('click', showInput => {
   document.querySelector(".input-container").style.display = "flex";
   document.querySelector(".add-note-c").style.display = "none";
});

// EXIT NOTE FORM
document.querySelector(".cancelNewNote").addEventListener('click', cancel => {
    document.querySelector(".input-container").style.display = "none";
    document.querySelector(".edit-note-container").style.display = "none";
    document.querySelector(".add-note-c").style.display = "flex";

    document.querySelector(".add-title").value = "";
    document.getElementById("note-input").value = "";

    document.querySelectorAll(".notes-section").forEach(section => {
     section.style.visibility = "visible";
     section.style.height = "fit-content";
    });
  });

  // EXIT EDIT NOTE FORM
  document.querySelector(".cancel").addEventListener('click', cancelEdit => {
   document.querySelector(".edit-this-note").style.display = "none";

   document.querySelectorAll(".notes-section").forEach(section => {
      section.style.visibility = "visible";
      section.style.height = "fit-content";
      section.style.marginBottom = "60px";
     });
  });

