<?php

include '../../includes/db-connect.php';


// Edit Note
if(isset($_POST['save-edit']))  {   
    
    $noteInput = mysqli_real_escape_string($conn, $_POST['noteEdit']);
    $noteName = mysqli_real_escape_string($conn, $_POST['noteName']);
    $id = mysqli_real_escape_string($conn, $_POST['id']);


    $queryUpdate = "UPDATE add_note SET noteInput='$noteInput', noteName='$noteName' WHERE id='$id'";

    if(mysqli_query($conn, $queryUpdate)){
        header('Location: ../../profile/library.php');
    } else {
        echo 'update note error';
    }
};



// Delete Note
if(isset($_POST['delete'])) {

    $id = mysqli_real_escape_string($conn, $_POST['id']);
    $bookTitle = mysqli_real_escape_string($conn, $_POST['bookTitle']);

    $queryDelete = "DELETE FROM add_note WHERE id = '$id'";

    if(mysqli_query($conn, $queryDelete)){
         header('Location: ../../profile/details.php?title=' . $bookTitle);
         echo 'Delete successful';
    } else {
        echo 'Delete note error';
    }
};

?>