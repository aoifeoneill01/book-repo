
var titleValue;

 document.getElementById('submitBtn').addEventListener('click', event => {
 event.preventDefault();
 document.querySelector(".cover-img").style.display = "none";
 document.querySelector(".descript-txt").style.display = "none";

 titleValue = document.getElementById('input').value.toString();


// Save value and place into url
fetch('https://www.googleapis.com/books/v1/volumes?q='+titleValue+'&key=AIzaSyAh5OwnOxgMSHFxF26o9ZR6RIGi4wRrWPo', {
  headers: {
    
  }
}).then((response) => {
 console.log('resolved');
 return response.json();
}).then(data => {
  document.querySelector(".search-result-container").style.display = "flex";
  document.getElementById('title').innerHTML = data.items[0].volumeInfo.title;
  document.getElementById('author').innerHTML = data.items[0].volumeInfo.authors;

  if(data.items[0].volumeInfo.subtitle === undefined){
    document.getElementById('subtitle').innerHTML = '';
  } else {
    document.getElementById('subtitle').innerHTML = data.items[0].volumeInfo.subtitle;
  }

  document.getElementById('quote').innerHTML = data.items[0].searchInfo.textSnippet;
  document.getElementById('image').src = data.items[0].volumeInfo.imageLinks.thumbnail;
}).catch((err) => {
  console.log('Error no result');
  document.querySelector(".book-s-container").style.display = "none";
  document.querySelector(".add-book").style.display = "none";
  document.getElementById("no-result").innerHTML = "No results!";

});

});

var i = 1;
document.getElementById("right").addEventListener('click', goRight);

function goRight(){
  fetch('https://www.googleapis.com/books/v1/volumes?q='+titleValue+'&key=AIzaSyAh5OwnOxgMSHFxF26o9ZR6RIGi4wRrWPo').then((response) => {
   console.log('resolved');
   return response.json();
  }).then(data => {
    var next = data.items[i++];
    document.getElementById('title').innerHTML = next.volumeInfo.title;
    document.getElementById('author').innerHTML = next.volumeInfo.authors;

    if(next.volumeInfo.subtitle === undefined){
      document.getElementById('subtitle').innerHTML = '';
    } else {
      document.getElementById('subtitle').innerHTML = next.volumeInfo.subtitle;
    }

    document.getElementById('quote').innerHTML = next.searchInfo.textSnippet;
    document.getElementById('image').src = next.volumeInfo.imageLinks.thumbnail;
  }).catch((err) => {
    console.log('error');
  });
//  document.querySelector(".inside-bar").classList.remove('slideLeft');
//  document.querySelector(".inside-bar").classList.add('slideRight');

// Arrow displays
  if(i > 0){
    document.getElementById("arrow-left-contain").style.visibility = "visible";
  }
  if(i == 2){
    document.getElementById("arrow-right-contain").style.visibility = "hidden";
  }
}


document.getElementById("left").addEventListener('click', goLeft);

function goLeft(){
  fetch('https://www.googleapis.com/books/v1/volumes?q='+titleValue+'&key=AIzaSyAh5OwnOxgMSHFxF26o9ZR6RIGi4wRrWPo').then((response) => {
   console.log('resolved');
   return response.json();
  }).then(data => {
    var back = data.items[i--];
    document.getElementById('title').innerHTML = back.volumeInfo.title;
    document.getElementById('author').innerHTML = back.volumeInfo.authors;

    if(back.volumeInfo.subtitle === undefined){
      document.getElementById('subtitle').innerHTML = '';
    } else {
      document.getElementById('subtitle').innerHTML = back.volumeInfo.subtitle;
    }

    document.getElementById('quote').innerHTML = back.searchInfo.textSnippet;
    document.getElementById('image').src = back.volumeInfo.imageLinks.thumbnail;
  }).catch((err) => {
    console.log('error');
  });
//  document.querySelector(".inside-bar").classList.remove('slideRight');
//  document.querySelector(".inside-bar").classList.add('slideLeft');

  // Arrow displays
   if(i == 0){
    document.getElementById("arrow-left-contain").style.visibility = "hidden";
  }
  if(i < 2){
   document.getElementById("arrow-right-contain").style.visibility = "visible";
 }
}
