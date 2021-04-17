/*jshint esversion: 6*/

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
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g transform="translate(-1181 -2128)"><g transform="translate(1181 2128)" fill="none" stroke="#B2B2B2" stroke-width="3"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="28.5" fill="none"/></g><g transform="translate(1181 2128)">
             <path d="M4.919,4.919a1.428,1.428,0,0,1,2.022,0L14.5,12.48l7.558-7.561A1.43,1.43,0,0,1,24.08,6.941L16.519,14.5l7.561,7.558a1.43,1.43,0,0,1-2.022,2.022L14.5,16.519,6.941,24.08a1.43,1.43,0,1,1-2.022-2.022L12.48,14.5,4.919,6.941a1.428,1.428,0,0,1,0-2.022Z" transform="translate(15.501 15.501)" fill="#B2B2B2" stroke="none" /></g></g></svg>
           </div>
          <div class="add-note"><a href="details.html?title=${this.title}">
           <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g transform="translate(-1094 -2128)"><g transform="translate(1094 2128)" fill="none" stroke="#B2B2B2" stroke-width="3"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="28.5" fill="none"/></g>
             <path d="M24.19.292a1,1,0,0,1,1.41,0l5.975,5.975a1,1,0,0,1,0,1.41L11.659,27.592a1,1,0,0,1-.335.219L1.366,31.795A1,1,0,0,1,.072,30.5l3.983-9.958a1,1,0,0,1,.219-.335L24.19.292ZM22.32,4.98l4.567,4.567,2.575-2.575L24.895,2.4Zm3.159,5.975L20.911,6.388,7.966,19.333v.584h1a1,1,0,0,1,1,1v1h1a1,1,0,0,1,1,1v1h.584ZM6.038,21.261l-.211.211-3.043,7.61,7.61-3.043.211-.211a1,1,0,0,1-.647-.932v-1h-1a1,1,0,0,1-1-1v-1h-1a1,1,0,0,1-.932-.647Z" transform="translate(1108.4 2141.734)" fill="#B2B2B2" stroke="none" /></g></svg>
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
fetch("./retrieve.php", {credentials: 'same-origin', SameSite: 'Lax'}).then(response => {
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
      <img class="arrows" id="right" src="images/rightArrow.svg" alt="right arrow">
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
