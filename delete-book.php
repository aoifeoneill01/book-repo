<?php

include 'db-connect.php';

// Delete book from library

if(isset($_POST['delete-book'])) {

    $id = mysqli_real_escape_string($conn, $_POST['id']);


    $queryDelete = "DELETE FROM library WHERE id = '$id'";

//check query connection
if(mysqli_query($conn, $queryDelete)) {
 header('Location: library.php');
} else {
 echo 'Delete request error';
  }

mysqli_close($conn);

}


?>