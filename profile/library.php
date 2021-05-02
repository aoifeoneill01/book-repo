<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../styles/styles.css">
    <link rel="stylesheet" href="../styles/my-library.css">
    <link rel="stylesheet" href="../styles/add.css">
    <link rel="stylesheet" href="../styles/media-queries.css">
    <link rel="stylesheet" href="https://use.typekit.net/rog2nul.css">
    <link rel="shortcut icon" type="image/png" href="../images/logo.png">
    <title>My Library</title>
  </head>

  <body class="library-bg">

<?php
require '../profile-includes/edit-list.html';
require '../profile-includes/delete-item.html';
 ?>


<nav class="navbar">
<div class="library" id="my-library">
  <p><a href="search.php"><span>Go to</span> Search</a></p>
</div>

<!-- SEARCH BAR -->
<div class="search-container">
  <form class="search-bar" id="searchLibrary" action="" method="POST">
    <input id="input" class="title-search" type="text" name="title-search" value="" placeholder="Search My Library">
    <button id="submitBtn" class="submit-search" type="submit" name="submit-search"><img src="../images/search.svg" /></button>
  </form>
  <div class="search-bg">
  </div>
</div>
</nav>

  <p id="results"></p>

<div class="library-container">
<!-- LIBRARY DATA HERE -->
</div>
</div>

<script src="../scripts/library.js"></script>
<script src="../scripts/search-library.js"></script>


  </body>
</html>
