/*jshint esversion: 6*/

document.querySelector(".addBtn").addEventListener('click', addForm => {

  var imageSrc = document.getElementById('image').src;
  let title = document.getElementById('title').innerHTML;
  let author = document.getElementById('author').innerHTML;
  console.log(title);


   document.getElementById("addForm-Contain").style.display = "flex";
   document.getElementById('addForm-cover').src = imageSrc;

   document.getElementById('title-form').value = title;
   document.getElementById('author-form').value = author;
   document.getElementById('image-form').value = imageSrc;
});

document.querySelector(".exitImage").addEventListener('click', exitForm => {
    document.getElementById("addForm-Contain").style.display = "none";
  });
