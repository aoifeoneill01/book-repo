<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/add.css">
    <link rel="stylesheet" href="styles/media-queries.css">
    <link rel="stylesheet" href="https://use.typekit.net/rog2nul.css">
    <link rel="shortcut icon" type="image/png" href="images/blue.svg">
    <title>Book Repository</title>
  </head>
  <body id="index-body">

<?php
require 'addtolist.php';
 ?>

<!-- GRID LINES STYLING ELEMENTS -->
<div class="outline-container">
  <div class="border one">
  </div>
  <div class="border two">
  </div>
  <div class="border three">
  </div>
  <div class="border four">
  </div>
  <div class="b five">
  </div>
  <div class="b six">
  </div>
  <div class="b heavy">
  </div>
</div>

<!-- INTORDUCTION PAGE -->
  <div class="intro-container">

    <!-- GO TO LIBRARY -->
    <div class="library" id="nav-library">
       <p><a href="library.php"><span>Go to my</span> Library</a></p>
       <img src="images/arrow-right-circle-fill.svg" alt="arrow">
   </div>

    <!-- SEARCH BAR -->
    <div class="search-container">
      <form class="search-bar">
        <input id="input" type="text" name="title-search" value="" placeholder="Search By Title">
        <button id="submitBtn" type="submit" name="submit">Search</button>
      </form>
    </div>

    <div class="main-text">
       <p id="title-main"><span>My </span>Repository</p>
    </div>

    <div class="white-box">
    <div class="intro-text-container">
      <p id="descript">Create your own reading library and log notes on each book</p>
      <p class="handwriting" id="hand-one">Search for a book</p>
    </div>
    </div>

    <p id="last-grid-item" class="handwriting">Write your own notes</p>
</div>


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

  </body>
</html>
