<?php

include '../../includes/db-connect.php';

// ADD Notes
if(isset($_POST['save'])) {

  if(empty($_POST['bookTitle'])){
  echo '';
} else {
  $bookTitle = $_POST['bookTitle'];
}

  if(empty($_POST['noteName'])){
  echo '';
} else {
  $noteName = $_POST['noteName'];
}

if(empty($_POST['noteInput'])){
echo '';
} else {
$noteInput = $_POST['noteInput'];
 }
}

$bookTitle = mysqli_real_escape_string($conn, $_POST['bookTitle']);
$noteName = mysqli_real_escape_string($conn, $_POST['noteName']);
$noteInput = mysqli_real_escape_string($conn, $_POST['noteInput']);

$querySave = "INSERT INTO add_note(bookTitle, noteName, noteInput) VALUES('$bookTitle', '$noteName', '$noteInput')";

if(mysqli_query($conn, $querySave)){
  header('Location: ../../profile/details.php?title=' . $bookTitle);
} else {
  echo 'Save error';
};

 ?>
