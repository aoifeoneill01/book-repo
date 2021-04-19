<?php

require 'db-connect.php';

if(isset($_POST['save']))  {    

    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $noteName = mysqli_real_escape_string($conn, $_POST['noteName']);
    $noteInput = mysqli_real_escape_string($conn, $_POST['noteInput']);


    $queryUpdate = "UPDATE addnote SET noteInput = '$noteInput', noteName = '$noteName' WHERE id = '$id'";

    if(mysqli_query( $conn, $queryUpdate)){
        header('Location: library.php');
    } else {
        echo 'update note error';
    }

}

?>