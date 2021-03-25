/* jshint esversion:6 */

function getUrlTitle(){

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const titleName = urlParams.get('title');
document.querySelector(".details-title").innerHTML = titleName;


// FETCH DATA
fetch('./retrieve.php').then(response => {
  return response.json();
}).then(data => {

// FILTER AND FIND MATCHING TITLE NAMES
   dataDetails = data.filter(function(val, index, array){
     return val.title === titleName;
  });

// GET ID
 let title = '';
 for(var h in dataDetails){
   title += dataDetails[h].title;
}
 document.getElementById("new-note-name").value = title;

// GET AUTHOR
 let author = '';
 for(var i in dataDetails){
   author += dataDetails[i].author;
}
 document.querySelector(".details-author").innerHTML = author;

// GET IMAGE SRC
let image = '';
for(var j in dataDetails){
  image += dataDetails[j].image;
}
  document.querySelector(".details-image").src = image;



}).catch(err => {
  console.log('Error');
});
}
