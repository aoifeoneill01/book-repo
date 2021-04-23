document.querySelector(".intro-container").addEventListener('mousemove', (e) => {
    var x = e.offsetX;
    if(x > 400){
        document.querySelector(".cover-img").style.transform = "rotate(10deg)";
    } else if(x < 400){
    document.querySelector(".cover-img").style.transform = "rotate(-10deg)";
  }
});

function animateText(){
    document.getElementById("title-main").style.top = "0";
    document.getElementById("title-main-two").style.top = "5px";
    document.querySelector(".home-descript").style.top = "0";
    document.querySelector(".cover-img").style.left = "-50%";
}