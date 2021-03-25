/* jshint esversion:6 */

fetch('./retrieve-notes.php').then(response => {
   return response.json();
}).then(data => {

  const pageTitle = document.querySelector(".details-title").textContent;

// FILTER THROUGH AND FIND MATCHING BOOK TITLES
  const notes = data.filter(val => {
    return val.bookTitle == pageTitle;
  });

// RETURN RELATED SECTIONS
  let section = '';
  for(var x in notes)
   section +=
   '<h2 class="new-note-title">'+notes[x].noteName+'</h2><p class="new-note-p">'+notes[x].noteInput+'</p>';

   document.querySelector(".saved-notes-container").innerHTML = section;


}).catch(err => {
   console.log('Error');
});
