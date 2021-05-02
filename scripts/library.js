class ListItem{
  constructor(id, createlist, title, author, image){
     this.id = id;
     this.createlist = createlist;
     this.title = title;
     this.author = author;
     this.image = image;
  }
  listSection(){
      document.querySelectorAll(".li-title").forEach(list => {
        if(this.createlist === list.textContent){
          return list.parentNode.nextElementSibling.firstElementChild.innerHTML +=
          `<li class="list-item">
          <div class="list-headings">
          <p id="lib-title" class="lib-c-title">${this.title}</p>
          <p id="author">${this.author}</p>
          </div>
          <img id="lib-image" src="${this.image}">
          <div class="icon-container">
          <div class="delete-item">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
               <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
             </svg>
          </div>
          <div class="add-note"><a href="details.php?title=${this.title}">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
               <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
             </svg>
            </a>
          </div>
          </div>
          <div class="hide-id">${this.id}</div>
          </li>`;
        }
      });
  }
  editList(){
    var listVal = document.getElementById("currentlist").value;
      if(this.createlist === listVal){
      document.querySelector(".id").innerHTML +=
      `<input class="hide-id" type="text" name="id[]" value="${this.id}">`;
    }
  }
}


// FETCH DATA FROM DATABASE
fetch("../profile-includes/retrieve.php", { 
  headers:{
    "Set-Cookie": "SameSite=Strict",
    credentials: "same-origin"
   }
  })
  .then(response => {
    console.log('success');
return response.json();
}).then(data => {

//GRAB ALL LIST NAMES AND CREATE SEPERATE LIST SECTIONS
  var allLists = data.map(val => {
       return val.createlist;
    });

const uniqueList = allLists.reduce((total, amount) => {
  allLists.forEach( val => {
    if (total.indexOf(val) === -1){
     total.push(val);
    }
  });
  return total;
}, []);

// CREATE LIST SECTION
uniqueList.forEach(val => {
  let titles =
  `<div class="grid-container">
  <div class="title-container">
  <p class="li-title" id="list-title">${val}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BCBCBC" class="bi bi-three-dots" viewBox="0 0 16 16">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  </div>
  <div class="list-container">
   <ul class="list-row">
    <div class="arrow-container" id="arrow-right-library">
      <img class="arrows" id="right" src="../images/rightArrow.svg" alt="right arrow">
    </div>
   </ul>
   </div>
  </div>`;

  document.querySelector(".library-container").innerHTML += titles;

});

     data.forEach(value => {
     // CREATE CLASSES
     let item = new ListItem(value.id, value.createlist, value.title, value.author, value.image);
    // CALL CLASS METHODS
     item.listSection();

     // SHOW LIST EDIT FORM
     document.querySelectorAll(".title-container").forEach(values => {
      values.addEventListener('click', showList => {
        document.getElementById("editForm-contain").style.display = "flex";
        document.getElementById("currentlist").value = values.firstElementChild.innerHTML;

     item.editList();
   });
});

   // SHOW ITEM DELETE FORM
   document.querySelectorAll(".delete-item").forEach(input => {
     input.addEventListener('click', deleteThis => {
        document.getElementById("deleteForm-contain").style.display = "flex";
        const thisTitle = input.parentNode.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
        const thisAuthor = input.parentNode.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
        const thisImage = input.parentNode.previousElementSibling.src;
        const thisId = input.parentNode.nextElementSibling.innerHTML;
        document.getElementById("delete-title").innerHTML = thisTitle;
        document.querySelector(".delete-author").innerHTML = thisAuthor;
        document.querySelector(".delete-cover").src = thisImage;
        document.querySelector(".delete-id").value = thisId;
   });
  });

   // SCROLL ACROSS LISTS
    document.querySelectorAll(".arrow-container").forEach(item => {
      item.addEventListener('click', srcollAcross => {
         item.parentNode.scrollLeft += 600;
    });
  });

 // SHOW LIST ICONS
 document.querySelectorAll(".list-item").forEach(item => {
   item.addEventListener('mouseover', showIcons => {
     item.firstElementChild.nextElementSibling.nextElementSibling.style.visibility = "visible";
   });
 });

 // HIDE LIST ICONS
 document.querySelectorAll(".list-item").forEach(item => {
   item.addEventListener('mouseout', hideIcons => {
     item.firstElementChild.nextElementSibling.nextElementSibling.style.visibility = "hidden";
   });
 });

 });
}).catch(err => {
    console.log('Error in fetch request');
});

// EXIT FORMS
document.querySelectorAll(".exit").forEach(item => {
  item.addEventListener('click', exitForm => {
    document.getElementById("deleteForm-contain").style.display = "none";
    document.getElementById("editForm-contain").style.display = "none";
  });
});
