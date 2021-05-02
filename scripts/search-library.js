
// Search library for book
document.querySelector(".submit-search").addEventListener('click', searchLibrary => {
const searchTerm = document.querySelector(".title-search").value.toLowerCase();

document.querySelectorAll(".lib-c-title").forEach(title => {
  if(title.textContent.toLowerCase() == searchTerm){
    document.getElementById("searchLibrary").action = "details.php?title="+title.textContent;
  }
});
});


// More options top left nav
document.querySelector(".more").addEventListener('click', toggleList => {
  document.querySelector(".nav-dropdown").classList.toggle("showList");
});