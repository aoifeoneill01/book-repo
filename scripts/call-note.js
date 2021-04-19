
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
   `<div class="notes-section">
    <div class="text-note">
     <h2 class="new-note-title">${notes[x].noteName}</h2>
     <p class="new-note-p">${notes[x].noteInput}</p>
     <p class="hide-id">${notes[x].id}</p>
    </div>
    <div class="icon-container note-icons">
       <div class="delete-item delete-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g transform="translate(-1181 -2128)"><g transform="translate(1181 2128)" fill="none" stroke="#B2B2B2" stroke-width="3"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="28.5" fill="none"/></g><g transform="translate(1181 2128)">
          <path d="M4.919,4.919a1.428,1.428,0,0,1,2.022,0L14.5,12.48l7.558-7.561A1.43,1.43,0,0,1,24.08,6.941L16.519,14.5l7.561,7.558a1.43,1.43,0,0,1-2.022,2.022L14.5,16.519,6.941,24.08a1.43,1.43,0,1,1-2.022-2.022L12.48,14.5,4.919,6.941a1.428,1.428,0,0,1,0-2.022Z" transform="translate(15.501 15.501)" fill="#B2B2B2" stroke="none" /></g></g></svg>
        </div>
        <div class="add-note edit-note">
           <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g transform="translate(-1094 -2128)"><g transform="translate(1094 2128)" fill="none" stroke="#B2B2B2" stroke-width="3"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="28.5" fill="none"/></g>
           <path d="M24.19.292a1,1,0,0,1,1.41,0l5.975,5.975a1,1,0,0,1,0,1.41L11.659,27.592a1,1,0,0,1-.335.219L1.366,31.795A1,1,0,0,1,.072,30.5l3.983-9.958a1,1,0,0,1,.219-.335L24.19.292ZM22.32,4.98l4.567,4.567,2.575-2.575L24.895,2.4Zm3.159,5.975L20.911,6.388,7.966,19.333v.584h1a1,1,0,0,1,1,1v1h1a1,1,0,0,1,1,1v1h.584ZM6.038,21.261l-.211.211-3.043,7.61,7.61-3.043.211-.211a1,1,0,0,1-.647-.932v-1h-1a1,1,0,0,1-1-1v-1h-1a1,1,0,0,1-.932-.647Z" transform="translate(1108.4 2141.734)" fill="#B2B2B2" stroke="none" /></g></svg>
        </div>
       </div>
    </div>`

   document.querySelector(".saved-notes-container").innerHTML = section;


   // EDIT NOTE FORM
   document.querySelectorAll(".edit-note").forEach(note => {
   note.addEventListener('click', editThisNote => {
      document.querySelector(".edit-note-container").style.visibility = "visible";

      const sectionTitle = note.parentNode.previousElementSibling.firstElementChild.textContent;
      document.querySelector(".new-note-title").value = sectionTitle;

      const sectionText = note.parentNode.previousElementSibling.firstElementChild.nextElementSibling.textContent;
      document.querySelector(".new-note-p").value = sectionText;

      const positionY = note.parentNode.parentNode.offsetTop;
      document.querySelector(".edit-this-note").style.top = positionY + 'px';

      note.parentNode.parentNode.style.visibility = "hidden";
      note.parentNode.parentNode.style.height = "300px";

      const id = note.parentNode.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent;
      document.getElementById("note-id").value = id;
   });    
});    


}).catch(err => {
   console.log('Error');
});

