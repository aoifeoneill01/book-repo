
function editNote(){

    // EDIT NOTE FORM
    document.querySelectorAll(".edit-note").forEach(note => {
        note.addEventListener('click', editThisNote => {
           document.querySelector(".edit-this-note").style.display = "block";
           document.querySelector(".save-button").style.display = "block";
           document.querySelector(".edit-note-container").style.display = "flex";
     
           const sectionTitle = note.parentNode.previousElementSibling.firstElementChild.textContent;
           document.querySelector(".new-note-title").value = sectionTitle;
     
           const sectionText = note.parentNode.previousElementSibling.firstElementChild.nextElementSibling.textContent;
           document.getElementById("note-edit").value = sectionText;
  
           const positionY = note.parentNode.parentNode.offsetTop;
           document.querySelector(".edit-this-note").style.top = positionY + 'px';
     
           note.parentNode.parentNode.style.visibility = "hidden";
           note.parentNode.parentNode.style.marginBottom = "200px";
  
           const id = note.parentNode.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent;
           document.getElementById("note-id").value = id;

           document.getElementById("note-edit").addEventListener('input',function(e){
            sectionHeight = e.target.offsetHeight;
            note.parentNode.parentNode.style.height = sectionHeight + "px";
           },false);
        });    
     }); 
}


function fetchNotes(){

    // FETCH DATA FROM NOTES DB
    fetch('../profile-includes/notes/retrieve-notes.php', {
        headers: {
           "Cache-Control": "must-revalidate"
        }
     }).then(response => {
        return response.json();
     }).then(data => {
     
       let pageTitle = document.querySelector(".details-title").textContent;
     
     // FILTER THROUGH AND FIND MATCHING BOOK TITLES
       const notes = data.filter(val => {
         return val.bookTitle == pageTitle;
       });

     // PAGE TITLE  
       let noteTitle = pageTitle.toLowerCase();
       document.getElementById("note-container").innerHTML = `<p class="note-title">${noteTitle} <span>notes</span></p>`;

  
     // RETURN RELATED SECTIONS
       let section = '';
       for(var x in notes){
     
        section +=
        `<div class="notes-section">
         <div class="text-note">
          <h2 class="new-note-title">${notes[x].noteName}</h2>
          <p class="new-note-p">${notes[x].noteInput}</p>
          <p class="hide-id">${notes[x].id}</p>
         </div>
         <div class="icon-container note-icons">
           <div class="add-note edit-note" onclick="editNote()">
             <svg alt="edit note" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
             </svg>
         </div>
           <div class="delete-item delete-note">
               <svg alt="delete note" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
               </svg>
              </div>
              <div class="topic-add-c">
              <div class="topic-item topic-note">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky" viewBox="0 0 16 16">
                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z"/>
               </svg>
              </div>
               <p>Create topic</p>
               </div>
           </div>
           <form class="note-delete-form" action="../profile-includes/notes/edit-note-db.php" method="post">
               <label>Sure you want to delete this note?</label>
               <input class="hide-id noteId" id="note-id" type="text" name="id" value="${notes[x].id}">
               <input class="hide-id noteId" type="text" name="bookTitle" value="${pageTitle}">
               <button class="editBtn noteDelete" type="submit" name="delete">Delete</button>
               <button class="editBtn  noteDelete cancel" id="deleteBtn" type="button">Cancel</button>
             </form>
         </div>`
     
        document.querySelector(".saved-notes-container").innerHTML = section;
       };

     // NOTE SECTIONS
     let sectionNotes = '';
     for(var i in notes){
    
     sectionNotes += 
       `<li class="list-s" value="${notes[i].id}"><span>${notes[i].noteName}</span><span class="hide-id">${notes[i].id}</span></li>`;

     document.querySelector(".nSection").innerHTML = sectionNotes   
   
       document.querySelectorAll(".list-s").forEach(item => {
         item.addEventListener('click', SectionScroll => {
           document.querySelectorAll(".noteId").forEach(id => {
   
             if(item.value.toString() == id.value){
                const moveY = id.parentNode.parentNode.offsetTop; 
                window.scrollTo(0, moveY);
             }
           });
         });
       });
     }


       // CREATED AT TIMESTAMP 
      let timeCreated = data.map((times => {
      return times.timestamp;
      }));
       let created = timeCreated.sort(function(a, b){return a - b})

      monthNum = parseInt(created[0][5] + created[0][6]) - 1;
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

      monthCreated = months[monthNum];
      dayCreated = created[0][8] + created[0][9];
      year = created[0][0] + created[0][1] + created[0][2] + created[0][3];

      document.querySelector(".created").innerHTML = `<p class="created-at">Created, ${monthCreated}  ${dayCreated} ${year}</p>`;


         

// DELETE NOTE FORM
document.querySelectorAll(".delete-note").forEach(section => {
 section.addEventListener('click', showDeleteForm => {
   section.parentNode.nextElementSibling.style.display = "block";
});
});       

document.querySelectorAll(".cancel").forEach(button => {
 button.addEventListener('click', hideDeleteForm => {
  button.parentNode.style.display = "none";
});
});

// CREATE TOPIC
document.querySelectorAll(".topic-item").forEach(item => {
    item.addEventListener('click', createTopic => {
        let pageCor = item.parentNode.parentNode.parentNode.offsetTop;

        document.querySelector(".add-topic-form").style.display = "flex"; 
        document.querySelector(".add-topic-form").style.top = pageCor + "px";
        
 });
});
                  
     }).catch(err => {
        console.log('Error');
     });
}