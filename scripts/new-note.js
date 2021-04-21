
// SHOW ADD NOTE FORM
document.querySelector(".add-icon").addEventListener('click', showInput => {
   document.querySelector(".input-container").style.display = "flex";
   document.querySelector(".add-icon").style.display = "none";
});

// EXIT NOTE FORM
document.querySelectorAll(".cancel").forEach(form => {
   form.addEventListener('click', cancel => {
    document.querySelector(".input-container").style.display = "none";
    document.querySelector(".edit-note-container").style.display = "none";
    document.querySelector(".add-icon").style.display = "flex";

    document.querySelectorAll(".notes-section").forEach(section => {
     section.style.visibility = "visible";
     section.style.height = "fit-content";
    });
  });
});
