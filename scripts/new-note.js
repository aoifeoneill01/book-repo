/* jshint esversion:6 */

// SHOW ADD NOTE FORM
document.querySelector(".add-icon").addEventListener('click', showInput => {
   document.querySelector(".input-container").style.visibility = "visible";
   document.querySelector(".add-icon").style.display = "none";
});

document.querySelector(".cancel").addEventListener('click', cancel => {
  document.querySelector(".input-container").style.visibility = "hidden";
  document.querySelector(".add-icon").style.display = "flex";
});
