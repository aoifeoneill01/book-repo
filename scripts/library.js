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
            <svg xmlns="http://www.w3.org/2000/svg" width="6.01" height="6.01" viewBox="0 0 6.01 6.01"><g transform="translate(-2415.615 -1656.5)"><g transform="translate(2415.615 1657.561) rotate(-45)" fill="#fff" stroke="#7DA5FF" stroke-width="1"><rect width="1.5" height="7" rx="0.75" stroke="none"/><rect x="0.5" y="0.5" width="0.5" height="6" rx="0.25" fill="none"/></g><g transform="translate(2420.564 1656.5) rotate(45)" fill="#fff" stroke="#7DA5FF" stroke-width="1"><rect width="1.5" height="7" rx="0.75" stroke="none"/><rect x="0.5" y="0.5" width="0.5" height="6" rx="0.25" fill="none"/></g></g></svg>
          </div>
          <div class="add-note"><a href="details.php?title=${this.title}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7DA5FF" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7DA5FF" class="bi bi-three-dots" viewBox="0 0 16 16">
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
