<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/add.css">
    <link rel="stylesheet" href="styles/media-queries.css">
    <link rel="stylesheet" href="https://use.typekit.net/rog2nul.css">
    <link rel="shortcut icon" type="image/png" href="images/logo.png">
    <title>Book Repository</title>
  </head>
  <body id="index-body" onload="animateText()">

<?php
require 'addtolist.html';
 ?>

<!-- INTORDUCTION PAGE -->
  <div class="intro-container">

    <!-- GO TO LIBRARY -->
    <div class="library" id="nav-library">
       <p><a href="library.php"><span>Go to my</span> Library</a></p>
       <img src="images/arrow-right-short.svg" alt="arrow">
   </div>

    <!-- SEARCH BAR -->
    <div class="search-container">
      <form class="search-bar">
        <input id="input" type="text" name="title-search" value="" placeholder="Search By Title">
        <button id="submitBtn" type="submit" name="submit"><img src="images/search.svg" /></button>
      </form>
      <div class="search-bg">
      </div>
    </div>

    <div class="cover-bg"></div>

    <div class="main-text">
     <div class="main-txt">
         <p id="title-main"><span>MY</span><p>
      </div> 
      <div class="main-txt">
        <p id="title-main-two">REPOSITORY</p>
     </div>
    </div>

    <embed class="cover-img" src="images/book.svg">

    <div class="descript-txt">
      <p class="home-descript" >create your own notes on each book you save to your library</p>
    </div>

    <embed class="white-bg" src="images/Group 39.svg" type="">
    

<!-- BOOK SEARCH RESULTS -->
<div class="search-result-container">
<div class="book-s-container">
  <div class="arrow-container" id="arrow-left-contain">
    <img class="arrows" id="left" src="images/leftArrow.svg" alt="left arrow">
  </div>
<div class="title-search-container">
  <div class="image-container">
    <img id="image" src="" alt="Book cover">
  </div>
  <div class="text-container">
    <p id="title"></p>
    <p id="author"></p>
    <p id="subtitle"></p>
    <p id="quote"></p>
  <!--  <div class="slide-bar">
      <div class="inside-bar"></div>
    </div>  -->
  </div>
</div>
<div class="arrow-container" id="arrow-right-contain">
  <img class="arrows" id="right" src="images/rightArrow.svg" alt="right arrow">
</div>
</div>

<div class="add-book">
  <button class="addBtn" id="addToList" type="button" name="button">Add to reading list</button>
</div>
<p id="no-result"></p>
</div>


    <script src="scripts/request.js"></script>
    <script src="scripts/addList.js"></script>
    <script src="scripts/populate-form.js"></script>
    <script src="scripts/animateCover.js"></script>

  </body>
</html>
