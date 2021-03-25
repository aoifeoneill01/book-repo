<?php

include 'db-connect.php';


if(isset($_POST['submit'])) {

  if(empty($_POST['createlist'])) {
   echo '';
  } else {
   $createlist = $_POST['createlist'];
  }

  if(empty($_POST['title'])) {
    echo '';
  }  else {
    $title = $_POST['title'];
  }

  if(empty($_POST['author'])) {
    echo '';
  }  else {
    $author = $_POST['author'];
  }

  if(empty($_POST['image'])) {
    echo '';
  }  else {
    $image = $_POST['image'];
  }
}

$createlist = mysqli_real_escape_string($conn, $_POST['createlist']);
$title = mysqli_real_escape_string($conn, $_POST['title']);
$author = mysqli_real_escape_string($conn, $_POST['author']);
$image = mysqli_real_escape_string($conn, $_POST['image']);

$query = "INSERT INTO library(createlist, title, author, image) VALUES('$createlist', '$title', '$author', '$image')";

if(mysqli_query($conn, $query)){
  header('Location: home.php');
} else {
  echo 'Connection error';
};

 ?>
